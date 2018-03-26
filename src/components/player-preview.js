import React from 'react'
import PropTypes from 'prop-types'

const PlayerPreview = (props) => {
  return (
    <div>
      <div className="column">
        <img
          className="avatar"
          src={props.avatar}
          alt={props.username}
        />
        <h2 className="username">@{props.username}</h2>
      </div>
      <button
        className="reset"
        onClick={props.onReset.bind(null, props.id)}>
          Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}
export default PlayerPreview