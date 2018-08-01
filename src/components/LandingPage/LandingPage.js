import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'


export default class LandingPage extends Component {

  updateCheck = () => {
    if (this.props.closest && this.props.closest.distance < 0.025) {
      this.refs.update.classList.remove("noUpdate") 
   }
  }

  componentDidUpdate() {
    this.updateCheck()
  }
  componentDidMount() {
    this.updateCheck()
  }

  render() {

    return (
      
      <div className="landingPage">
        <div>
          <img src="./images/LogoMobo.png" className="logoMobo" alt="logo for mobile devices"/>
          <img src="./images/LogoBigo2.png" className="logoBigo" alt="logo for larger devices"/>
        </div>


        <div className="buttons">


          <Link to="/list">
            <div className="button">
              <i className="fas fa-list-ul"/>
              <p className="buttonText"> List View </p>
            </div>
          </Link>

          <Link to="/map">
            <div className="button">
              <i className="fas fa-map-marked-alt"/>
              <p className="buttonText"> MapView </p>
            </div>
          </Link>

          <Link to="/add">
            <div className="button">
              <i className="fas fa-plus"/>
              <p className="buttonText"> Add a Gift </p>
            </div>
          </Link>

          <Link to="/update">
            <div className="button noUpdate" ref="update">
              <i className="fas fa-edit"/>
              <p className="buttonText"> Update </p>
            </div>
          </Link>

      </div>
      </div>
    )
  }
}
