import 'whatwg-fetch'

const id = "556ab588466fc75ac350"
const secret = "e4c338911051856ba813e2f07c3c533a4a804a3c"
const params = `?client_id=${id}&client_secret=${secret}`

const getProfile = async username => {
  const response = await fetch(`https://api.github.com/users/${username}${params}`)
  return response.json()
}

const getRepos = async username => {
  const profile = await fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
  return profile.json()
}

const getStarCount = repos => {
  return repos.reduce((count, { stargazers_count }) =>count +
    stargazers_count, 0)
}

const calculateScore = ({ followers }, repos) => {
  return ( followers * 3 ) + getStarCount(repos)
}

const getUserData = async player => {
  const [ profile, repos ] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ])
  return {
    profile,
    score: calculateScore(profile, repos)
  }
 }

const sortPlayers = players => {
  return players.sort((a,b) => b.score - a.score)
}

const handleError = error => {
  console.warn(error)
  return null
}

export const battle =  async players => {
  const results = await Promise.all(players.map(getUserData))
    .catch(handleError)
  return results === null
    ? results
    : sortPlayers(results)
}

export const fetchPopularRepos = async language => {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

  const response = await fetch(encodedURI)
  const repos = await response.json()
  return repos.items
}