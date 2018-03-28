import React from 'react'

import Player from '../components/player'
import PlayerPreview from '../components/player-preview'
import Loading from '../components/loading'

import queryString from 'query-string'
import api from '../utils/api'

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    loading: true
  }
  componentDidMount() {
    const players = queryString.parse(this.props.location.search)

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      if(results === null) {
        this.setState({ loading: false })
      }
      this.setState({
        winner: results[0],
        loser: results[1],
        loading: false
      })
    })
  }
  render() {
    const winner = this.state.winner
    const loser = this.state.loser
    const loading = this.state.loading
    return (
      <div>
        {loading ? <div><Loading /></div>: (
          <div className="row">
          <Player
            label="Winner"
            score={winner.score}
            profile={winner.profile}
          />
          <Player
            label="Loser"
            score={loser.score}
            profile={loser.profile}
          />
        </div>
        )}
      </div>
    )
  }
}
export default Results