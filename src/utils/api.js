import axios from 'axios'

const id = "556ab588466fc75ac350"
const secret = "e4c338911051856ba813e2f07c3c533a4a804a3c"
const params = `?client_id=${id}&client_secret=${secret}`

getProfile = (username) => {
  return axios.get(`https://github.com/users/${username}${params}`)
    .then(user => {
      return user.data
    })
}

getRepos = (username) => {
  return axios.get(`https://github.com/users/${username}/repos${params}&per_page=100`)
}

getStarCount = (repos) => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return ( followers * 3 ) + totalStars
}
 getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then((data) => {
    const profile = data[0]
    const repos = data[1]

    return {
      profile,
      score: getStarCount(profile, repos)
    }
  })
 }

 sortPlayers = (players) => {
  return players.sort((a,b) => {
    return b.score - a.score
  })
 }

handleError = (error) => {
  console.warn(error)
  return null
}

const api = {
  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },
  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      })
  }
}
export default api