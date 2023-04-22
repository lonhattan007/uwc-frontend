import TaskListViewContentLeft from './TaskListViewContentLeft';
import TaskListViewContentRight from './TaskListViewContentRight';

const TaskListViewContent = () => {
  const taskListView_Content = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    fontSize: '20px',
  };
  return (
    <div style={taskListView_Content} className="taskListView_Content">
      <TaskListViewContentLeft
        idShift="# 4 0 0 1"
        dayShift="12/5/2023"
        statusShift="Đang diễn ra"
        startShift="6:00"
        endShift="9:00"
      />
      <TaskListViewContentRight timeProgress="1" idProgress="# 1 0 0 1" />
    </div>
  );
};

export default TaskListViewContent;
