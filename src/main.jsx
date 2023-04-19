import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Provider } from 'react-redux';
import store from './store/store';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import MainPage from '@pages/main/MainPage';
import Login from '@pages/Login/Login';
import ForgotPass from '@pages/ForgotPass/ForgotPass';
import CalendarPage from '@pages/CalendarPage';
import ShiftPage from '@pages/ShiftPage/shiftPage';
import StaffPage from '@pages/StaffPage';
import Taskassign1 from '@pages/Taskassign1/Taskassign1';
import Taskassign2 from '@pages/Taskassign2/Taskassign2';
import TaskListPage from '@pages/TaskListPage/TaskListPage';
import TaskPage from '@pages/TaskPage';
import Mapbox from '@components/Mapbox/Mapbox';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={localStorage.userLoggedIn === 'true' ? '/calendar' : '/login'} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/calendar',
    element: <CalendarPage />,
  },
  {
    path: '/shifts',
    element: <ShiftPage />,
  },
  {
    path: '/tasks',
    element: <TaskListPage />,
  },
  {
    path: '/tasks/task',
    element: <TaskPage />,
  },
  {
    path: '/collecting-sites',
    element: <Mapbox />,
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
    path: '/forgot',
    element: <ForgotPass />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
