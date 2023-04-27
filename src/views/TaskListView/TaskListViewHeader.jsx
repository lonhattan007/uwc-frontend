import { FaPlus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './TaskListViewHeader.scss';

const TaskListViewHeader = () => {
  const TaskListView_Header = {
    display: 'flex',
    margin: '0rem 2rem',
    width: '100%',
  };
  
  const h2 = {
    margin: '1rem',
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
    <div className='task-list-view-header'>
      <h2 style={h2}>Danh sách nhiệm vụ</h2>
      <div className="btn-container">
        <NavLink to="/task-assign-1">
          <Button className='add-task-btn'>
            <FaPlus style={plus} />
            Tạo nhiệm vụ mới
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default TaskListViewHeader;
