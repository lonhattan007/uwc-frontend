import { FaCheck } from 'react-icons/fa';

const TaskListViewContentRight = (props) => {
  const TaskListView_Content_Right = {
    backgroundColor: '#fff',
    margin: '0 2rem',
    width: '40%',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
  };
  const infoProgress = {
    width: '100%',
    margin: 'auto',
    backgroundColor: '#EBF8F2',
    borderRadius: '30px',
    textAlign: 'start',
    // marginLeft: "3rem",
    // padding: "1rem"
  };
  const progressItalic = {
    marginLeft: '3rem',
    marginTop: '1.5rem',
    fontStyle: 'italic',
  };
  const progressBold = {
    marginLeft: '3rem',
    fontWeight: '600',
    marginTop: '1rem',
  };
  const progressConfirm = {
    marginLeft: '3rem',
    marginTop: '1rem',
    color: '#00AB55',
  };
  const progressTick = {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#00AB55',
    color: '#fff',
    marginLeft: '1rem',
    borderRadius: '50%',
  };
  return (
    <div style={TaskListView_Content_Right}>
      <h5>Thông báo tiến độ</h5>
      <div style={infoProgress}>
        <p style={progressItalic}>
          {props.timeProgress}
          <span> phút trước </span>
          {props.idProgress}
        </p>
        <p style={progressBold}>Cập nhật đã thu gom</p>
        <p style={progressConfirm}>
          Xác nhận
          <FaCheck style={progressTick} />
        </p>
      </div>
    </div>
  );
};

export default TaskListViewContentRight;
