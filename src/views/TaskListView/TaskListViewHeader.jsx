import { FaPlus } from 'react-icons/fa';

const TaskListViewHeader = () => {
  const TaskListView_Header = {
    display: 'flex',
    margin: '0rem 2rem',
    width: '100%',
  };
  const h2 = {
    margin: '1rem',
  };
  const TaskListView_Header_button = {
    height: '3rem',
    margin: '1rem',
    lineHeight: '1.5rem',
    width: '20%',
    borderRadius: '30rem',
    marginLeft: '2.5rem',
    backgroundColor: '#018241',
    textDecoration: 'none',
  };
  const TaskListView_Header_button_a = {
    textDecoration: 'none',
    fontSize: '21px',
    color: '#fff',
  };
  const plus = {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#15F901',
    color: '#018241',
    borderRadius: '50%',
    marginRight: '1rem',
  };
  return (
    <div style={TaskListView_Header}>
      <h2 style={h2}>Danh sách nhiệm vụ</h2>
      <button style={TaskListView_Header_button}>
        <a href="/task-assign-1" style={TaskListView_Header_button_a}>
          <FaPlus style={plus} />
          Tạo nhiệm vụ mới
        </a>
      </button>
    </div>
  );
};

export default TaskListViewHeader;
