export default store => next => action => {
  if (action.type !== 'DELETE_GIFT_FROM_DB') return next(action)

  next({
    ...action,
    type: action.type + '_REQUEST'
  })

  fetch(`http://192.168.1.127:3000/delete/${action.data}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
