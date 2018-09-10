import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/store';
import './styles/main.scss';
import 'react-day-picker/lib/style.css';
import './assets/images/favicon.ico';
import { config } from './config';

const store = configureStore();


if (window.Raven) {
  // eslint-disable-next-line
  Raven.config(config.SENTRY_URL).install();
}

export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app') || document.createElement('div')
);
