import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from './Dashboard/Home'
import NewPost from './Dashboard/NewPost'
import NotFound from './Dashboard/NotFound'

class Dashboard extends Component {
  render () {
    return (
      <Router>
        <div className='row'>
          <div className='col-md-3'>
            <ul className='list-group'>
              <Link to='/'><li className='list-group-item'>Home</li></Link>
              <Link to='/newpost'><li className='list-group-item'>New Post</li></Link>
              <Link to='/'><li className='list-group-item'>Logout</li></Link>
            </ul>
          </div>
          <div className='col-md-9'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/newpost' component={NewPost} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default Dashboard
