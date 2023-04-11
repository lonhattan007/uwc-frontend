import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter } from 'react-router-dom';

import MainPage from '@pages/main/MainPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainPage/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
