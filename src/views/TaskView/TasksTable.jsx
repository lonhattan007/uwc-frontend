const TasksTable = () => {
  const TaskView_Table = {
    width: '90%',
    margin: '2rem auto',
    backgroundColor: '#fff',
    borderRadius: '30px',
    overflow: 'hidden',
    fontWeight: '700',
  };
  const tb_col1 = {
    width: '70%',
  };
  const tb_col2 = {
    width: '15%',
  };
  const tb_col3 = {
    width: '15%',
  };
  const rowHead = {
    height: '8rem',
    backgroundColor: '#018241',
    color: '#fff',
    width: '100%',
  };
  const row = {
    height: '8rem',
  };
  const rowOdd = {
    height: '8rem',
    backgroundColor: '#B2FFDA',
  };
  const table = {
    width: '100%',
  };
  const thead = {
    width: '100%',
  };
  return (
    <div style={TaskView_Table}>
      <table style={table}>
        <thead style={thead}>
          <tr style={rowHead}>
            <th style={tb_col1}>Địa điểm</th>
            <th style={tb_col2}>Nhóm trưởng</th>
            <th style={tb_col3}>Thành viên</th>
          </tr>
        </thead>
        <tbody>
          <tr style={row}>
            <td>167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM</td>
            <td>Nguyễn Văn A</td>
            <td>
              Nguyễn Văn D<br />
              Nguyễn Văn B<br />
              Nguyễn Văn C
            </td>
          </tr>
          <tr style={rowOdd}>
            <td>167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM</td>
            <td>Nguyễn Văn A</td>
            <td>
              Nguyễn Văn D<br />
              Nguyễn Văn B<br />
              Nguyễn Văn C
            </td>
          </tr>
          <tr style={row}>
            <td>167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM</td>
            <td>Nguyễn Văn A</td>
            <td>
              Nguyễn Văn D<br />
              Nguyễn Văn B<br />
              Nguyễn Văn C
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
