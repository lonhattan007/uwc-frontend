import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainPage from '@views/main';
import LoginView from '@views/LoginView';
import ForgotPassView from '@views/ForgotPassView';
import CalendarView from '@views/CalendarView';
import ShiftView from '@views/ShiftView';
import StaffView from '@views/StaffView';
import { TaskAssignView1, TaskAssignView2 } from '@views/TaskAssignView';
import TaskListView from '@views/TaskListView/TaskListView';
import TaskView from '@views/TaskView';
import Mapbox from '@components/Mapbox/Mapbox';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={localStorage.userLoggedIn === 'true' ? '/calendar' : '/login'} />,
  },
  {
    path: '/login',
    element: <LoginView />,
  },
  {
    path: '/logout',
    element: <Navigate to="/login" />,
  },
  {
    path: '/calendar',
    element: <CalendarView />,
  },
  {
    path: '/shifts',
    element: <ShiftView />,
  },
  {
    path: '/tasks',
    element: <TaskListView />,
  },
  {
    path: '/tasks/task',
    element: <TaskView />,
  },
  {
    path: '/collecting-sites',
    element: <Mapbox />,
  },
  {
    path: '/staffs',
    element: <StaffView />,
  },
  {
    path: '/task-assign-1',
    element: <TaskAssignView1 />,
  },
  {
    path: '/task-assign-2',
    element: <TaskAssignView2 />,
  },
  {
    path: '/forgot',
    element: <ForgotPassView />,
  },
]);

export default router;
