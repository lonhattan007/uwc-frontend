import { FaEllipsisV } from 'react-icons/fa';
import { Table, Button } from 'react-bootstrap';

import './TaskListViewTable.scss';

const tasks = [
  {
    id: '1001',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
  {
    id: '1002',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
  {
    id: '1003',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
  {
    id: '1004',
    state: 'Đang diễn ra',
    mcp: '51-A1-45678',
    collector: 'Nguyễn Văn A',
    route: 'LT1003',
  },
];

const TaskListViewTable = () => {
  return (
    <Table hover borderless striped>
      <thead className="table-head-row">
        <tr>
          <th>Mã nhiệm vụ</th>
          <th>Trạng thái</th>
          <th>Mã phương tiện</th>
          <th>Tài xế</th>
          <th>Mã lộ trình</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr className={(index + 1) % 2 == 0 ? 'even-row' : 'odd-row'} key={'task-row-' + index}>
            <td>{task.id}</td>
            <td>{task.state}</td>
            <td>{task.mcp}</td>
            <td>{task.collector}</td>
            <td>{task.route}</td>
            <td>
              <div className="btn-container">
                <Button className="task-show-btn" color="success">
                  Chi tiết
                </Button>
              </div>
            </td>
            <td>
              <FaEllipsisV />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskListViewTable;
