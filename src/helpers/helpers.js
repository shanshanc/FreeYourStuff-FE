export default {
  getDistance: (lat1, lon1, lat2, lon2) => {
    const p = 0.017453292519943295; // Math.PI / 180
    const c = Math.cos;
    let a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  },

  getBearing: (stuffLat, stuffLong, myLat, myLong) => {
    let y = Math.sin(stuffLong - myLong) * Math.cos(stuffLat);
    let x =
      Math.cos(myLat) * Math.sin(stuffLat) -
      Math.sin(myLat) * Math.cos(stuffLat) * Math.cos(stuffLong - myLong);
    let brng = (Math.atan2(y, x) * 180) / Math.PI;
    return brng;
  }
};
