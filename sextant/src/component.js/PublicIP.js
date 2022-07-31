import React, { Component } from 'react'
import '../App.css'

export default class PublicIP extends Component {
  state = {
    IP: <p id='displayip'><GetMyIP /></p>,
  }

  render() {
    return (
      <>
      {this.state.IP}
      </>
    )
  }
}

function GetMyIP() {
  fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => document.getElementById("displayip").innerHTML = data.ip)
  .catch(err => console.log(err))
}