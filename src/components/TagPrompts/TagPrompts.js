import React, { Component } from 'react'

export default class TagPrompts extends Component {

  submitStuff = () => {
    if (this.props.number === 3) return
    if (this.props.number === 2) this.props.submitStuff()
  }

  render() {

    return (
      <div className="prompts">
        {this.props.number===3 ? 
          <p className="addSpan span1" onTransitionEnd={this.glow} ref="glowy">Take a pic </p>
          : null 
          }
          <p className="addSpan span2" onTransitionEnd={this.glow} ref="glowy2"> Kill tags </p>
          <p className="addSpan span3" onClick={this.submitStuff} > {this.props.buttonName}! </p>
      </div>
    )
  }
}
