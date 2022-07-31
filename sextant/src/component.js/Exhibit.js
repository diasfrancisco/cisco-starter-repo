import React, { Component } from 'react'
import PublicIP from './PublicIP'
import '../App.css'


export default class Exhibit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Menu',
      type: 'Please choose an address type'
    }
    this.handleClick4 = this.IPTypeHandler4.bind(this)
    this.handleClick6 = this.IPTypeHandler6.bind(this)
  }

  IPTypeHandler4() {
    this.setState({type: 'Your IPv4 address is'})
  }

  IPTypeHandler6() {
    this.setState({type: 'Your IPv6 address is'})
  }

  render () {
    return (
      <div className='container'>
        <h2>
          {this.state.title}
        </h2>
        <div>
          <button className='typebutton' onClick={this.handleClick4}>IPv4</button>
          <button className='typebutton' onClick={this.handleClick6}>IPv6</button>
        </div>
        <div>
          {this.state.type}
          <PublicIP />
        </div>
      </div>
    )
  }
}