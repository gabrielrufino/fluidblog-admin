import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import SignIn from './Login/SignIn'
import NotFound from './Login/NotFound'

class Login extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default Login
