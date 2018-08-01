import helpers from '../helpers/helpers'

const initialState = {
  gifts: [],
  loading: false,
  location: {},
  sorted: false,
  listToMapLocation: {},
  waitingForApi: false,
  cloudinaryURL: "",
  googleTags: [],
  address: "",
  needTags: true,
  newGift: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_ALL_GIFTS_SUCCESS':
      return {
        ...state,
        gifts: action.data,
        loading: false
      }

    case 'GET_ALL_GIFTS_REQUEST':
      return  {
        ...state,
        loading: true
      }

    case 'GET_ALL_GIFTS_FAILURE':
      return state




    case 'GET_LOCATION':
      return  {
        ...state,
        location: action.data
      }

    case 'GET_LOCATION_REQUEST':
      return  {
        ...state,
        loading: true
      }



      

    case 'SORT_ALL_GIFTS':
      let data = state.gifts;
      data.forEach(gift => {
        if (gift.location) gift.distance = helpers.getDistance(gift.location.lat, gift.location.lng, state.location.lat, state.location.lng)
        else gift.distance = 9999
      })
      data.sort((a,b) => a.distance - b.distance)
      return  {
        ...state,
        gifts: data,
        sorted: true,
      }



    case 'LIST_TO_MAP':
      return  {
        ...state,
        listToMapLocation: action.data
      }



    case 'URL_FROM_CLOUDINARY_REQUEST':
      return  {
        ...state,
        waitingForApi: true,
      }

    case 'URL_FROM_CLOUDINARY_SUCCESS':
      return {
        ...state,
        cloudinaryURL: action.data,
        waitingForApi: false,
      }


    case 'GET_TAGS_FROM_GOOGLE':
      return {
        ...state,
        waitingForApi: true,
      }

    case 'GET_TAGS_FROM_GOOGLE_SUCCESS':
      return {
        ...state,
        googleTags: action.data,
        waitingForApi: false,
        needTags: false,
      }


    case 'GET_GEOCODE_REQUEST':
      return state

    case 'GET_GEOCODE_SUCCESS':
      return {
        ...state,
        address: action.data,
        needTags: false
      }

    case 'NEW_GIFT_TO_DB_REQUEST':
      return {
        ...state,
        gifts: [action.data, ...state.gifts]
      }
    

    case 'NEW_GIFT_TO_DB_SUCCESS':
      return {
        ...state,
        cloudinaryURL: "",
        googleTags: [],
        finalTags: [],
        needTags: true,
        address: "",
      }


    case 'UPDATE_GIFT_IN_DB_REQUEST':
    return state

  

    case 'UPDATE_GIFT_IN_DB_SUCCESS':
      return {
        ...state,
        cloudinaryURL: "",
        googleTags: [],
        finalTags: [],
        needTags: true,
      }


    default:
      return state
  }

}

export default reducer;