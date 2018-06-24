import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Form from './Login/Form'
import NotFound from './Login/NotFound'

class Login extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Form} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default Login
