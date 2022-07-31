import React, { Component } from 'react'

export default class Banner extends Component {
  state = {
    title: 'Sextant'
  }

  render() {
    return (
      <div className='banner'>
        <h1>
          {this.state.title}
        </h1>
      </div>
    )
  }
}