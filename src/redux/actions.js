export const getAllGifts = () => ({
  type: 'GET_ALL_GIFTS'
});

export const getAllGiftsSuccess = data => ({
  type: 'GET_ALL_GIFTS_SUCCESS',
  data
});

export const getLocation = () => ({
  type: 'GET_LOCATION'
});

export const sortAllGifts = () => ({
  type: 'SORT_ALL_GIFTS'
});

export const listToMap = data => ({
  type: 'LIST_TO_MAP',
  data
});

export const urlFromCloudinary = data => ({
  type: 'URL_FROM_CLOUDINARY',
  data
});

export const urlFromCloudinarySuccess = data => ({
  type: 'URL_FROM_CLOUDINARY_SUCCESS',
  data
});

export const getTagsFromGoogle = data => ({
  type: 'GET_TAGS_FROM_GOOGLE',
  data
});

export const getTagsFromGoogleSuccess = data => ({
  type: 'GET_TAGS_FROM_GOOGLE_SUCCESS',
  data
});

export const getGeocode = data => ({
  type: 'GET_GEOCODE',
  data
});

export const getGeocodeSuccess = data => ({
  type: 'GET_GEOCODE_SUCCESS',
  data
});

export const sendToDB = data => ({
  type: 'SEND_TO_DB',
  data
});

export const sendNewGiftToDB = data => ({
  type: 'NEW_GIFT_TO_DB',
  data
});

export const sendNewGiftToDBSuccess = data => ({
  type: 'NEW_GIFT_TO_DB_SUCCESS',
  data
});

export const updateGiftInDB = data => ({
  type: 'UPDATE_GIFT_IN_DB',
  data
});

export const updateGiftInDBSuccess = data => ({
  type: 'UPDATE_GIFT_IN_DB_SUCCESS',
  data
});

export const deleteGiftFromDB = data => ({
  type: 'DELETE_GIFT_FROM_DB',
  data
});
