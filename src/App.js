import React, { Component } from 'react'

import Login from './Login'
import Dashboard from './Dashboard'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      auth: false
    }
  }
  render () {
    return (
      <div>
        {!this.state.auth && <Login />}
        {this.state.auth && <Dashboard />}
      </div>
    )
  }
}

export default App
