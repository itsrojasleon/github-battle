import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './nav'

import Home from './home'
import Battle from './battle'
import Popular from './popular'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={() => {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App