import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import LocationAPI from './redux/middlewares/LocationAPI';
import ServerAPI from './redux/middlewares/ServerAPI';
import Cloudinary from './redux/middlewares/Cloudinary';
import GoogleTags from './redux/middlewares/GoogleTags';
import GoogleGeocode from './redux/middlewares/GoogleGeocode';
import NewGiftToDb from './redux/middlewares/NewGiftToDb';
import UpdateGiftInDB from './redux/middlewares/UpdateGiftInDB';
import DeleteGiftFromDB from './redux/middlewares/DeleteGiftFromDB';

import reducers from './redux/reducers';

let Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    ServerAPI,
    LocationAPI,
    Cloudinary,
    GoogleTags,
    GoogleGeocode,
    NewGiftToDb,
    UpdateGiftInDB,
    DeleteGiftFromDB
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);
registerServiceWorker();
