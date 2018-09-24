import axios from 'axios';
import { urlFromCloudinarySuccess } from '../actions';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dh9xnvxbz/upload/';

export default store => next => action => {
  if (action.type !== 'URL_FROM_CLOUDINARY') return next(action);

  next({
    ...action,
    type: action.type + '_REQUEST'
  });

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: action.data
  })
    .then(res =>
      res.data.url.replace('image/upload/', 'image/upload/c_fill,h_480,w_820/')
    )
    .then(url => {
      store.dispatch(urlFromCloudinarySuccess(url));
    })
    .catch(err => {
      next({
        ...action,
        type: action.type + '_FAILURE'
      });
    });
};
