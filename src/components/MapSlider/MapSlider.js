import React, { Component } from 'react'

import './MapSlider.css'

export default class MapSlider extends Component {

  render() {

    return (
      <div className="slider" onScroll={this.handleScroll}>
          {this.props.stuffList.map((item,i) => {
            return (
              <div className="sliderBox" key={i}>
                <img src={item.picture} alt='stuff' className="sliderImage" onClick={this.props.expandSlider}/>
              </div>
            )
          })} 
        </div>
    )
  }
}
