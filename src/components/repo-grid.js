import React from 'react'
import PropTypes from 'prop-types'

const RepoGrid = ({ repos }) => {
  return (
    <div>
      <ul className="poplular-list">
        {repos.map((repo, index) => (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank"># {index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={repo.owner.avatar_url}
                  className="avatar"
                  alt={repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
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