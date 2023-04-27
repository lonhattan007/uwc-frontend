import { Table } from 'reactstrap';

const task = [
  {
    site: '167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM',
    leader: 'Nguyễn Văn A',
    janitors: [{ name: 'Nguyễn Văn B' }, { name: 'Nguyễn Văn C' }, { name: 'Nguyễn Văn D' }],
  },
  {
    site: '167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM',
    leader: 'Nguyễn Văn A',
    janitors: [{ name: 'Nguyễn Văn B' }, { name: 'Nguyễn Văn C' }, { name: 'Nguyễn Văn D' }],
  },
  {
    site: '167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM',
    leader: 'Nguyễn Văn A',
    janitors: [{ name: 'Nguyễn Văn B' }, { name: 'Nguyễn Văn C' }, { name: 'Nguyễn Văn D' }],
  },
  {
    site: '167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM',
    leader: 'Nguyễn Văn A',
    janitors: [{ name: 'Nguyễn Văn B' }, { name: 'Nguyễn Văn C' }, { name: 'Nguyễn Văn D' }],
  },
];

const TasksTable = () => {
  return (
    <Table hover borderless striped>
      <thead className="table-head-row">
        <tr>
          <th>STT</th>
          <th>Địa điểm</th>
          <th>Nhóm trưởng</th>
          <th>Thành viên</th>
        </tr>
      </thead>
      <tbody>
        {task.map((item, index) => (
          <tr className={(index + 1) % 2 == 0 ? 'even-row' : 'odd-row'} key={'task-row-' + index}>
            <td>{index+1}</td>
            <td>{item.site}</td>
            <td>{item.leader}</td>
            <td>
              {item.janitors.map((janitor) => (
                <>
                  {janitor.name}
                  <br />
                </>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TasksTable;
