import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  getAllGifts,
  sortAllGifts,
  getLocation,
  getAllGiftsSuccess
} from './redux/actions';

import Header from './components/Header/index';
import StuffList from './components/StuffList/StuffList';
import AddStuff from './components/AddStuff/AddStuff';
import MapContainer from './components/Map/Map';
import LandingPage from './components/LandingPage/LandingPage';
import Update from './components/Update/Update';
import Loading from './components/loading/Loading';

class App extends Component {
  componentDidMount() {
    this.props.getAllGifts();
    this.props.getLocation();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.sorted === false &&
      this.props.gifts.length > 0 &&
      this.props.location.lat
    ) {
      this.props.sortAllGifts();
    }
  }

  myList = () => (
    <StuffList
      stuffList={this.props.gifts}
      myMap={this.myMap}
      myLocation={this.props.location}
    />
  );
  myMap = e => (
    <MapContainer stuffList={this.props.gifts} location={this.props.location} />
  );
  myUpdate = () => <Update gift={this.props.gifts[0]} />;
  myLandingPage = () => <LandingPage closest={this.props.gifts[0]} />;

  render() {
    if (this.props.loading) return <Loading />;
    else {
      return (
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" render={this.myLandingPage} />
          <Route path="/list" render={this.myList} />
          <Route path="/map" render={this.myMap} />
          <Route path="/add" component={AddStuff} />
          <Route path="/update" render={this.myUpdate} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts,
  location: state.location,
  loading: state.loading,
  sorted: state.sorted
});

const mapDispatchToProps = dispatch => ({
  getAllGifts: () => dispatch(getAllGifts()),
  sortAllGifts: () => dispatch(sortAllGifts()),
  getLocation: () => dispatch(getLocation()),
  getAllGiftsSuccess: data => dispatch(getAllGiftsSuccess(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
