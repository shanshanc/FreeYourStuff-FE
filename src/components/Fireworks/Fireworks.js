import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Fireworks.css'

export default class Fireworks extends Component {
  render() {
    return (
      <div className="fireworks">
        <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
        </div>
        <Link to='/'>
          <button className="goBack"> Go Back </button>
        </Link>
      </div>
    )
  }
}
