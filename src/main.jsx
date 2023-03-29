import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <Navbar />
            <App />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
