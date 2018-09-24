import { getGeocodeSuccess } from '../actions';

const GOOGLE_KEY = 'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto';

export default store => next => action => {
  if (action.type !== 'GET_GEOCODE') return next(action);
  next({
    ...action,
    type: action.type + '_REQUEST'
  });

  let lat = action.data.lat;
  let lng = action.data.lng;
  console.log(lat, lng);

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_KEY}`
  )
    .then(res => res.json())
    .then(res => res.results[0].formatted_address)
    .then(res => store.dispatch(getGeocodeSuccess(res)))

    .catch(err => {
      console.log(err);
      next({
        ...action,
        type: action.type + '_FAILURE'
      });
    });
};
