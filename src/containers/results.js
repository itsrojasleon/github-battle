import React from 'react'

import Player from '../components/player'
import PlayerPreview from '../components/player-preview'
import Loading from '../components/loading'

import queryString from 'query-string'
import { battle } from '../utils/api'

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    loading: true
  }
  async componentDidMount() {
    const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search)

    const results = await battle([
      playerOneName,
      playerTwoName
    ])
    if(results === null) {
      this.setState({ loading: false })
    }
    this.setState({
      winner: results[0],
      loser: results[1],
      loading: false
    })
  }
  render() {
    const { winner, loser, loading } = this.state
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