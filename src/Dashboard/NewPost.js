import React, { Component } from 'react'

import base from '../base'

class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      subtitle: '',
      text: ''
    }

    this.handleTitle = this.handleTitle.bind(this)
    this.handleSubtitle = this.handleSubtitle.bind(this)
    this.handleText = this.handleText.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.clean = this.clean.bind(this)
  }
  handlePost (event) {
    event.preventDefault()
    base.push('/posts', {
      data: {
        title: this.state.title,
        subtitle: this.state.subtitle,
        text: this.state.text
      }
    })
      .then(() => {
        this.clean()
      })
  }
  handleTitle (event) {
    this.setState({
      title: event.target.value
    })
  }
  handleSubtitle (event) {
    this.setState({
      subtitle: event.target.value
    })
  }
  handleText (event) {
    this.setState({
      text: event.target.value
    })
  }
  clean () {
    this.setState({
      title: '',
      subtitle: '',
      text: ''
    })
  }
  render () {
    return (
      <div className='container'>
        <h1 className='display-4'>New Post</h1>
        <form onSubmit={this.handlePost}>
          <div className='form-row'>
            <div className='col-md-7'>
              <div className='form-group'>
                <label className='text-info'>Title</label>
                <input className='form-control' type='text' placeholder='Give a title to your post' required value={this.state.title} onChange={this.handleTitle} />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <label className='text-info'>Subtitle</label>
                <input className='form-control' type='text' placeholder='Call to post' required value={this.state.subtitle} onChange={this.handleSubtitle} />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label className='text-info '>Text</label>
            <textarea className='form-control' placeholder='Write your text here...' rows='15' required value={this.state.text} onChange={this.handleText} />
          </div>
          <div className='text-right'>
            <button type='submit' className='btn btn-info btn-lg px-5'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Dashboard
