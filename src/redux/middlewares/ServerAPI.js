import { getAllGiftsSuccess } from "../actions";


export default store => next => action => {
  if (action.type !== 'GET_ALL_GIFTS') return next(action)

  next({
    ...action,
    type: action.type + '_REQUEST'
  })

  fetch('http://192.168.1.127:3000/getStuff')
    .then(data => data.json())
    .then(data => {

      store.dispatch(getAllGiftsSuccess(data))
    })
    .catch(err => {
      next({
        ...action,
        type: action.type + '_FAILURE'
      })
    })
  
}