import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '@pages/main/MainPage';
import ShiftPage from '@pages/ShiftPage/shiftPage';
import StaffPage from '@pages/Staff/StaffPage';
import Taskassign1 from '@pages/Taskassign1/Taskassign1';
import Taskassign2 from '@pages/Taskassign2/Taskassign2';
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
    path: '/shifts',
    element: <ShiftPage />,
  },
  {
    path: '/calendar',
    element: <MainPage />,
  },
  {
    path: '/shifts',
    element: <MainPage />,
  },
  {
    path: '/collecting-sites',
    element: <MainPage />,
  },
  {
    path: '/staffs',
    element: <StaffPage />,
  },
  {
    path: '/taskassign1',
    element: <Taskassign1 />,
  },
  {
    path: '/taskassign2',
    element: <Taskassign2 />,
  },
  {
    path: '/settings',
    element: <MainPage />,
  },
  {
    path: '/logout',
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
