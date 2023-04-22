import TaskViewInfoLeft from './TaskViewInfoLeft';
import TaskViewInfoRight from './TaskViewInfoRight';

const TaskInfo = () => {
  const TaskView_Info = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    fontSize: '20px',
  };
  return (
    <div style={TaskView_Info}>
      <TaskViewInfoLeft
        idTask="# 1 0 0 1"
        driver="Nguyen Van A"
        idRoute="LT1003"
        idShift="2001"
        idCar="51-A1-45678"
        idEndShift="9:00"
      />
      <TaskViewInfoRight />
    </div>
  );
};

export default TaskInfo;
