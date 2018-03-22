import React, { Component } from 'react'

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All'
  }

  updateLanguage = (lang) => {
    this.setState({ selectedLanguage: lang })
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className="languages">
        {languages.map(lang => (
          <li style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={this.updateLanguage.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        ))}
      </ul>
    )
  }
}
export default Popular
