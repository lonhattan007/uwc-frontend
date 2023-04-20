import { FaEllipsisV } from 'react-icons/fa';

const TaskListViewTable = () => {
  const TaskListView_Table = {
    width: '90%',
    margin: 'auto',
    marginTop: '3rem',
    backgroundColor: '#fff',
    borderRadius: '30px',
    overflow: 'hidden',
  };
  const rowHead = {
    height: '7rem',
    backgroundColor: '#018241',
    color: '#fff',
    width: '100%',
  };
  const row = {
    height: '7rem',
  };
  const rowOdd = {
    height: '7rem',
    backgroundColor: '#B2FFDA',
  };
  const cell = {
    width: '14%',
  };
  const buttonShow = {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#018241',
    padding: '1rem 2rem',
    borderRadius: '30px',
  };
  const table = {
    width: '100%',
  };
  const thead = {
    width: '100%',
  };

  return (
    <div style={TaskListView_Table}>
      <table style={table}>
        <thead style={thead}>
          <tr style={rowHead}>
            <th style={cell}>Mã nhiệm vụ</th>
            <th style={cell}>Trạng thái</th>
            <th style={cell}>Mã phương tiện</th>
            <th style={cell}>Tài xế</th>
            <th style={cell}>Mã lộ trình</th>
            <th style={cell}></th>
            <th style={cell}></th>
          </tr>
        </thead>
        <tbody>
          <tr style={rowOdd}>
            <td>#1001</td>
            <td>Đang diễn ra</td>
            <td>51-A1-45678</td>
            <td>Nguyễn Văn A</td>
            <td>#LT1003</td>
            <td>
              <a href="#" style={buttonShow}>
                Show
              </a>
            </td>
            <td>
              <FaEllipsisV />
            </td>
          </tr>
          <tr style={row}>
            <td>#1001</td>
            <td>Đang diễn ra</td>
            <td>51-A1-45678</td>
            <td>Nguyễn Văn A</td>
            <td>#LT1003</td>
            <td>
              <a href="#" style={buttonShow}>
                Show
              </a>
            </td>
            <td>
              <FaEllipsisV />
            </td>
          </tr>
          <tr style={rowOdd}>
            <td>#1001</td>
            <td>Đang diễn ra</td>
            <td>51-A1-45678</td>
            <td>Nguyễn Văn A</td>
            <td>#LT1003</td>
            <td>
              <a href="/tasks/task" style={buttonShow}>
                Show
              </a>
            </td>
            <td>
              <FaEllipsisV />
            </td>
          </tr>
          <tr style={row}>
            <td>#1001</td>
            <td>Đang diễn ra</td>
            <td>51-A1-45678</td>
            <td>Nguyễn Văn A</td>
            <td>#LT1003</td>
            <td>
              <a href="#" style={buttonShow}>
                Show
              </a>
            </td>
            <td>
              <FaEllipsisV />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskListViewTable;
