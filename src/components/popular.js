import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectLanguage from './select-language'
import RepoGrid from './repo-grid'

import api from '../utils/api'

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: null
  }

componentDidMount() {
  this.updateLanguage(this.state.selectedLanguage)
}

  updateLanguage = lang => {
    this.setState({ selectedLanguage: lang })

    api.fetchPopularRepos(lang)
    .then((repos) => this.setState({ repos }))
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ?
          <div>Loading...</div>:
          <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
export default Popular
