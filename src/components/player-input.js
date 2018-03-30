import React from 'react'
import PropTypes from 'prop-types'

class PlayerInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  }
  static defaultProps = {
    label: 'Username'
  }
  state = {
    username: ''
  }

  handleChange = (e) => {
    const username = e.target.value
    this.setState({ username })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    const { id, label, onSubmit } = this.props
    const { username } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className="column">
        <label className="header" htmlFor='username'>
          {label}
        </label>
        <input
          id="username"
          placeholder="Github username"
          type="text"
          autoComplete="off"
          value={username}
          onChange={this.handleChange}
         />
         <button
         className="button"
         type="submit"
         disabled={!username}
         onClick={this.handleSubmit}>
          Submit
         </button>
      </form>
    )
  }
}
export default PlayerInput