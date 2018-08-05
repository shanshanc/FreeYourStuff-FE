import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Header.css'

export default class Header extends Component {
  render() {

    let path = this.props.location.pathname;
    let header
    switch (path) {
      case '/':
        header = 'Home'
        break
      case '/add':
        header = 'Give a gift'
        break
      case '/update':
        header = 'Update a gift'
        break
      case '/list':
        header = 'List View'
        break
      case '/map':
        header = 'Map View'
        break
      default:
        header = 'Free Your Stuff'
    }


    return (
      <div className="main-header">
      <Link to="/">
        <i className="fas fa-arrow-left"></i>
      </Link>
        <p>{header}</p>
      <Link to='/'>
        <img src="./images/icons/android-icon-144x144.png" alt="small logo icon"></img>
      </Link>
      </div>
    )
  }
}
