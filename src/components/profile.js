import React from 'react'
import PropTypes from 'prop-types'

import PlayerPreview from './player-preview'

const Profile = ({ info: { avatar_url, name, location, company, followers, following, blog, public_repos, login } }) => {
  return (
    <PlayerPreview avatar={avatar_url} username={login}>
      <ul className='space-list-items'>
        {name && <li>{name}</li>}
        {location && <li>{location}</li>}
        {company && <li>{company}</li>}
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
        <li>Public Repos: {public_repos}</li>
        {blog && <li><a href={blog}>{blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}
Profile.propTypes = {
  info: PropTypes.object.isRequired
}
export default Profile