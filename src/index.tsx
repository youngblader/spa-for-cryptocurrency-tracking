import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import Navigator from './navigation/navigator';
import rootReducer from './reducers/combine';

import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);