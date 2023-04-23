import { createBrowserRouter, Navigate } from 'react-router-dom';

import LoginView from '@views/LoginView';
import ForgotPassView from '@views/ForgotPassView';
import CalendarView from '@views/CalendarView';
import ShiftView from '@views/ShiftView';
import StaffView from '@views/StaffView';
import { TaskAssignView1, TaskAssignView2 } from '@views/TaskAssignView';
import TaskListView from '@views/TaskListView/TaskListView';
import TaskView from '@views/TaskView';
import DepotsView from '@views/DepotsView';

const AuthProxy = ({ element }) => {
  return localStorage.userLoggedIn === 'true' ? element : <Navigate to={'/login'} />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthProxy element={<CalendarView />} />,
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
    element: <AuthProxy element={<CalendarView />} />,
  },
  {
    path: '/shifts',
    element: <AuthProxy element={<ShiftView />} />,
  },
  {
    path: '/tasks',
    element: <AuthProxy element={<TaskListView />} />,
  },
  {
    path: '/tasks/task',
    element: <AuthProxy element={<TaskView />} />,
  },
  {
    path: '/collecting-sites',
    element: <DepotsView />,
  },
  {
    path: '/staffs',
    element: <AuthProxy element={<StaffView />} />,
  },
  {
    path: '/task-assign-1',
    element: <AuthProxy element={<TaskAssignView1 />} />,
  },
  {
    path: '/task-assign-2',
    element: <AuthProxy element={<TaskAssignView2 />} />,
  },
  {
    path: '/forgot',
    element: <ForgotPassView />,
  },
]);

export default router;
