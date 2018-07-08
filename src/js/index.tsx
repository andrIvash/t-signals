if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../styles/app.scss';

const app = document.getElementById('app');
if (app === null) {
  throw new Error('no app element');
}
render(
  <App compiler='TypeScript' framework='React' />,
  app,
);
