import Sidebar from '@components/Sidebar/Sidebar';
import TaskListViewHeader from './TaskListViewHeader';
import TaskListViewContent from './TaskListViewContent';
import TaskListViewTable from './TaskListViewTable';

// import './TaskListView.scss';

const TaskListView = () => {
  const TaskListView = {
    width: '100%',
    backgroundColor: '#f2f2f2',
    height: '100vh',
    overflow: 'scroll',
  };
  return (
    <>
      <Sidebar />
      <div style={TaskListView}>
        <TaskListViewHeader />
        <TaskListViewContent />
        <TaskListViewTable />
      </div>
    </>
  );
};

export default TaskListView;
