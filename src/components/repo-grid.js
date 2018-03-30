import React from 'react'
import PropTypes from 'prop-types'

const RepoGrid = ({ repos }) => {
  return (
    <div>
      <ul className="poplular-list">
        {repos.map(({ name, owner: { avatar_url, login  }, stargazers_count, html_url }, index) => (
          <li key={name} className="popular-item">
            <div className="popular-rank"># {index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={avatar_url}
                  className="avatar"
                  alt={login}
                />
              </li>
              <li><a href={html_url}>{name}</a></li>
              <li>@{login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoGrid