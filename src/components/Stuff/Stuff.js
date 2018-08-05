import React, { Component } from 'react'
import './Stuff.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { listToMap } from '../../redux/actions'
import helpers from '../../helpers/helpers';


class Stuff extends Component {

  listToMap = () => {
    this.props.listToMap(this.props.data.location)
  }


  render() {
    let stuff = this.props.data;
    if (!stuff.distance) stuff.distance = 0;
    let address = "";
    if(stuff.adress) address = stuff.address.split(',').slice(0,2);
    let style;
    if (stuff.location) {
      let brng = helpers.getBearing(stuff.location.lat, stuff.location.lng, this.props.myLocation.lat, this.props.myLocation.lng)
      style = {
        transform: `rotate(${-45-brng}deg)`
      }
    }

    return (
      <div className="stuff">

        <Link to="/map">
          <div className="picture">
            <img src={stuff.picture} alt="findAGift" onClick={this.listToMap}/>
            <p className="dropDistance">
              {address}
              <span> 
              {stuff.distance.toFixed(1)}
              km</span> 
              <i className="fas fa-location-arrow" 
              style={style}></i></p>
          </div>
        </Link>
          
          <div className="tagss">
              {stuff.tags.map((tag, i) => {
                return <p key={i} className="listTag" style={{background: "var(--primary)"}}>{tag}</p>
              })}
          </div>
          <div className="divider"/>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  listToMap: (data) => dispatch(listToMap(data))
})

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stuff);



