import axios from 'axios'

const id = "556ab588466fc75ac350"
const secret = "e4c338911051856ba813e2f07c3c533a4a804a3c"
const params = `?client_id=${id}&client_secret=${secret}`

const getProfile = username => {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then(user => ( user.data ))
}

const getRepos = username => {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

const getStarCount = repos => {
  return repos.data.reduce((count, { stargazers_count }) =>count +
    stargazers_count, 0)
}

const calculateScore = ({ followers }, repos) => {
  return ( followers * 3 ) + getStarCount(repos)
}

const getUserData = player => {
  return Promise.all([
    getProfile(player),
    getRepos(player)
  ]).then(([profile, repos]) => ({
    profile,
    score: calculateScore(profile, repos)
  }))
 }

const sortPlayers = players => {
  return players.sort((a,b) => b.score - a.score)
}

const handleError = error => {
  console.warn(error)
  return null
}

const api = {
  battle (players) {
    return Promise.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },
  fetchPopularRepos(language) {
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(response => response.data.items)
  }
}
export default api