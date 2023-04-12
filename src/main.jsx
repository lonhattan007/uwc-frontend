import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import ShiftPage from '@pages/SiftPage/shiftPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/user-info',
    element: <MainPage />,
  },
  {
    path: '/calendar',
    element: <MainPage />,
  },
  {
    path: '/shift',
    element: <ShiftPage />
  },
  {
    path: '/tasks',
    element: <MainPage />,
  },
  {
    path: '/collecting-sites',
    element: <MainPage />,
  },
  {
    path: '/staffs',
    element: <MainPage />,
  },
  {
    path: '/settings',
    element: <MainPage />,
  },
  {
    path: '/loggout',
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
