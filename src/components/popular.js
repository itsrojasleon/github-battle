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
          <li
          onClick={this.updateLanguage}
          key={lang}>
            {lang}
          </li>
        ))}
      </ul>
    )
  }
}
export default Popular
