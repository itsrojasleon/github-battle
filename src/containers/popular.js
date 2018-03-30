import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectLanguage from '../components/select-language'
import RepoGrid from '../components/repo-grid'
import Loading from '../components/loading'

import { fetchPopularRepos } from '../utils/api'

class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: null
  }

componentDidMount() {
  this.updateLanguage(this.state.selectedLanguage)
}

  updateLanguage = async lang => {
    this.setState({ selectedLanguage: lang })

    const repos = await fetchPopularRepos(lang)
    this.setState({ repos })
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
