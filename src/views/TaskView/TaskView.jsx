import Sidebar from '@components/Sidebar/Sidebar';
import TaskInfo from './TaskInfo';
import TasksTable from './TasksTable';
import { Container, Row } from 'reactstrap';
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
      <div id="workspace">
        <Container>
          <Row>
            <TaskInfo />
          </Row>
          <Row>
            <TasksTable />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TaskView;
