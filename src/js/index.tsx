if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './components/App';
import '../styles/app.scss';

const store = createStore(
  // initialState,
  reducer,
  applyMiddleware(thunk),
);

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
render(
  <Provider store={store}>
    <App compiler='TypeScript' framework='React' />
  </Provider>,
  app
);
