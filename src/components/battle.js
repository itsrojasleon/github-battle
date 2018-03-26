import React from 'react'
import PlayerInput from './player-input'

class Battle extends React.Component {
  state = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null,
  }

  handleSubmit = (id, username) => {
    this.setState(() => {
      const newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`
      return newState
    })
  }

  render() {
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    return (
      <div>
        <div className="row">
          {!playerOneName &&
            <PlayerInput
              id="playerOne"
              label="player One"
              onSubmit={this.handleSubmit}
             />}

          {!playerTwoName &&
            <PlayerInput
              id="playerOne"
              label="player One"
              onSubmit={this.handleSubmit}
              />}
        </div>
      </div>
    )
  }
}
export default Battle