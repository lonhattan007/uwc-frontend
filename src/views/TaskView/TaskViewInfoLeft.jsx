import { FaArrowLeft, FaUser, FaTelegram, FaClock, FaCar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TaskViewInfoLeft = (props) => {
  const TaskView_Info_Left = {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: '30px',
    marginTop: '2rem',
  };

  const TaskView_Info_Left_main = {
    display: 'flex',
  };

  const TaskView_Info_Left_h5 = {
    textAlign: 'start',
    marginLeft: '2rem',
    fontSize: '30px',
  };

  const TaskView_Info_Left_a = {
    textDecoration: 'none',
    color: '#000',
  };

  const TaskView_Info_Left_main_left = {
    width: '40%',
    margin: 'auto',
  };

  const TaskView_Info_Left_main_right = {
    width: '40%',
    margin: 'auto',
  };

  const bold = {
    fontWeight: '600',
    marginLeft: '1.5rem',
  };

  const align = {
    textAlign: 'start',
    marginLeft: '4.5rem',
    marginTop: '1.25rem',
  };

  const btn = {
    backgroundColor: '#018241',
    color: '#fff',
    borderRadius: '30px',
    padding: '0.25rem 2rem',
  };

  return (
    <div style={TaskView_Info_Left}>
      <h5 style={TaskView_Info_Left_h5}>
        <NavLink to="/tasks" style={TaskView_Info_Left_a}>
          <FaArrowLeft />
          Thông tin ca {props.idTask}
        </NavLink>
      </h5>
      <div style={TaskView_Info_Left_main}>
        <div style={TaskView_Info_Left_main_left}>
          <p style={align}>
            <FaUser />
            <span style={bold}>Tài xế: </span>
            <span>{props.driver}</span>
          </p>
          <p style={align}>
            <FaTelegram />
            <span style={bold}>Mã lộ trình: </span>
            <span>{props.idRoute}</span>
          </p>
          <p style={align}>
            <FaClock />
            <span style={bold}>Mã ca làm việc: </span>
            <span>{props.idShift}</span>
          </p>
        </div>
        <div style={TaskView_Info_Left_main_right}>
          <p style={align}>
            <FaCar />
            <span style={bold}>Biển số xe: </span>
            <span>{props.idCar}</span>
          </p>
          <p style={align}>
            <FaClock />
            <span style={bold}>Giờ kết thúc: </span>
            <span>{props.idEndShift}</span>
          </p>
          <button style={btn}>
            Đang diễn ra
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskViewInfoLeft;
