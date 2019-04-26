import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleMapAPIKey } from "../../config";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Map.css'
import MapSlider from '../MapSlider/MapSlider';
import Loading from '../loading/Loading';

const GOOGLE_KEY = GoogleMapAPIKey;

export class MapContainer extends Component {

  addMarker = (props) => {
    return (
      <Marker key={props._id}
      position={props.location}
      title={props.tags.join(" ")}
      onClick={this.onMarkerClick} 
      />
    )
  }

  onMarkerClick = (props, marker, e) => {
    let tags = props.title.split(" ")
    if (props.position.lat) {
    let location = {lat:props.position.lat, lng:props.position.lng}
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        infoWindowTags: tags,
        center: location,
      });
    }
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  expandSlider = (e) => {
    let pin;    
    this.props.stuffList.forEach(pic => {
      if (pic.picture === e.target.src) pin = pic
    })
    if (pin.location) this.onMarkerClick(pin.location.current.props, pin.location.current.marker, e)

  }

  componentDidMount(prevProps, prevState) {
    if (this.props.listToMapLocation.lat) {
      let locationNow = {lat:this.props.listToMapLocation.lat, lng: this.props.listToMapLocation.lng}
      this.setState({
        center: locationNow,
        loaded: true
      })
    }
  }

  componentDidUpdate() {
    if (this.state.loaded) {
      this.onMarkerClick(this.props.listToMapLocation.current.props, this.props.listToMapLocation.current.marker)
      this.setState({
        loaded: false
      })
    }
  }


  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      infoWindowTags: [],
      initialCenter: {lat: 41.3851, lng: 2.1734},
      center: {},
    }
    
  }
  
  render() {

    const style = {
      width: '100%',
      height: '91%'
    }

    if (!this.props.gifts) return <Loading />

     else return (
      <div className="mapDiv">

        <Map google={this.props.google} 
              onClick={this.onMapClicked}
              zoom={13} 
              className="map" 
              style={style}
              initialCenter={this.state.initialCenter}
              center={this.state.center}>

          
          {this.props.stuffList.map(item => {
            return this.addMarker(item)
          })}

          <InfoWindow className="infoWindow"
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
            {this.state.infoWindowTags.map((tag, i) => {
              return <h5 className="infoTag" key={i}># {tag}</h5>
            })}
            </div>
          </InfoWindow>

        </Map>

        <MapSlider stuffList={this.props.stuffList} expandSlider={this.expandSlider}/>

      </div>
      
    );
  }
} 

const mapDispatchToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({

  gifts: state.gifts,
  location: state.location,
  loading: state.loading,
  sorted: state.sorted,
  listToMapLocation: state.listToMapLocation

})

const wrappedMap = GoogleApiWrapper({
  apiKey: GOOGLE_KEY
})(MapContainer)

export default connect(mapStateToProps, mapDispatchToProps)(wrappedMap);