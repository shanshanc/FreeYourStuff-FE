import { getAllGiftsSuccess } from "../actions";


export default store => next => action => {
  if (action.type !== 'GET_ALL_GIFTS') return next(action)

  next({
    ...action,
    type: action.type + '_REQUEST'
  })
  
  fetch('https://fys-demo.herokuapp.com/getStuff')
    .then(data => data.json())
    .then(data => {
      console.log(data)
      store.dispatch(getAllGiftsSuccess(data))
    })
    .catch(err => {
      next({
        ...action,
        type: action.type + '_FAILURE'
      })
    })
  
}