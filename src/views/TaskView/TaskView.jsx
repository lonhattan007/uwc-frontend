import Sidebar from '@components/Sidebar/Sidebar';
import TaskInfo from './TaskInfo';
import TasksTable from './TasksTable';
import React from 'react';
import './TaskView.scss';

const TaskView = () => {
  const TaskView = {
    width: '100%',
    backgroundColor: '#f2f2f2',
    height: '100vh',
    overflow: 'scroll',
  };
  return (
    <>
      <Sidebar />
      <div style={{ TaskView }}>
        <TaskInfo />
        <TasksTable />
      </div>
    </>
  );
};

export default TaskView;
