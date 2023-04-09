import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
// import * as bootstrap from "bootstrap";

import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App/App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
