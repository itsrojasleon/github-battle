import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectLanguage from '../components/select-language'
import RepoGrid from '../components/repo-grid'
import Loading from '../components/loading'

import api from '../utils/api'

class Popular extends Component {
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
    .then(repos => this.setState({ repos }))
  }

  render() {
    const { selectedLanguage, repos } = this.state
    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!repos ?
          <div><Loading /></div>:
          <RepoGrid repos={repos} />}
      </div>
    )
  }
}
export default Popular
