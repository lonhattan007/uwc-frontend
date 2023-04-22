import { FaArrowLeft, FaCalendar, FaClock } from 'react-icons/fa';

const TaskListViewContentLeft = (props) => {
  const TaskListView_Content_Left = {
    width: '60%',
    backgroundColor: '#fff',
    margin: '0 2rem',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
  };
  const infoShift_h5 = {
    textAlign: 'start',
    marginLeft: '2.5rem',
  };
  const infoShift_a = {
    textDecoration: 'none',
    color: '#000',
  };
  const TaskListView_Content_Left_info = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2rem',
  };
  const TLV_day = {
    width: '50%',
  };
  const marginR = {
    marginRight: '1rem',
  };
  const TLV_Time = {
    width: '50%',
  };
  const bold = {
    fontWeight: 'bold',
  };
  const statusShiftStyle = {
    width: '8rem',
    height: '4rem',
    borderRadius: '30px',
    textDecoration: 'none',
    backgroundColor: '#018241',
    color: '#fff',
    margin: '1rem',
    padding: '0.5rem 1rem',
  };

  return (
    <div style={TaskListView_Content_Left}>
      <h5 style={infoShift_h5}>
        <a href="#" style={infoShift_a}>
          <FaArrowLeft />
          Thông tin ca {props.idShift}
        </a>
      </h5>
      <div style={TaskListView_Content_Left_info}>
        <div style={TLV_day}>
          <p>
            <FaCalendar style={marginR} />
            <span style={bold}>Ngày: </span>
            {props.dayShift}
          </p>
          <a href="#" style={statusShiftStyle}>
            {props.statusShift}
          </a>
        </div>
        <div style={TLV_Time}>
          <p>
            <FaClock style={marginR} />
            <span style={bold}>Giờ bắt đầu: </span>
            {props.startShift}
          </p>
          <p>
            <FaClock style={marginR} />
            <span style={bold}>Giờ kết thúc: </span>
            {props.endShift}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskListViewContentLeft;
