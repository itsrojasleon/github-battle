import React from 'react'
import PropTypes from 'prop-types'

const PlayerPreview = ({ avatar, username, children }) => {
  return (
    <div>
      <div className="column players">
        <img
          className="avatar"
          src={avatar}
          alt={username}
        />
        <h2 className="username">@{username}</h2>
      </div>
      {children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}
export default PlayerPreview