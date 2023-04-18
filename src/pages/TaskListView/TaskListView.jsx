import React from 'react';

import { FaPlus, FaArrowLeft, FaCalendar, FaClock, FaCheck,   FaEllipsisV  } from 'react-icons/fa';
function TaskListView_Header() {
  const TaskListView_Header = {
    display: 'flex',
    margin: '0rem 2rem',
    width: '100%',
  };
  const h2 = {
    margin: "1rem",
  };
  const TaskListView_Header_button = {
    height: '3rem',
    margin: "1rem",
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
        <a href="#" style={TaskListView_Header_button_a}>
          <FaPlus style={plus} />
          Tạo nhiệm vụ mới
        </a>
      </button>
    </div>
  );
}
function TaskListView_Content_Left(props) {
  const TaskListView_Content_Left = {
    width: "60%",
    backgroundColor: "#fff",
    margin: "0 2rem",
    padding: "0.5rem 1rem",
    borderRadius: "25px",

  }
  const infoShift_h5 = {
    textAlign: "start",
    marginLeft: "2.5rem"
  }
  const infoShift_a = {
    textDecoration: 'none',
    color: "#000",
    
  }
  const TaskListView_Content_Left_info = {
    display: "flex",
    justifyContent: "space-around",
    margin: "2rem",

  }
  const TLV_day = {
    width: "50%",
  }
  const marginR = {
    marginRight: "1rem"
  }
  const TLV_Time = {
    width: "50%",

  }
  const bold = {
    fontWeight: "bold",
  }
  const statusShiftStyle = {
    width: "8rem",
    height: "4rem",
    borderRadius: "30px",
    textDecoration: "none",
    backgroundColor: '#018241',
    color: "#fff",
    margin: "1rem",
    padding: "0.5rem 1rem",
  }
  
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
                      <FaCalendar style={marginR}/>
                      <span style={bold}>Ngày: </span>
                      {props.dayShift}
                  </p>
                  <a href="#" style={statusShiftStyle}>{props.statusShift}</a>
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
}
function TaskListView_Content_Right(props) {
  const TaskListView_Content_Right = {
    backgroundColor: "#fff",
    margin: "0 2rem",
    width: "40%",
    padding: "0.5rem 1rem",
    borderRadius: "25px",
  }
  const infoProgress = {
    width: "100%",
    margin: "auto",
    backgroundColor: "#EBF8F2",
    borderRadius: "30px",
    textAlign: "start",
    // marginLeft: "3rem",
    // padding: "1rem"
  }
  const progressItalic = {
    marginLeft: "3rem",
    marginTop: "1.5rem",
    fontStyle: "italic",
  }
  const progressBold = {
    marginLeft: "3rem",
    fontWeight: "600",
    marginTop: "1rem",

  }
  const progressConfirm = {
    marginLeft: "3rem",
    marginTop: "1rem",
    color: "#00AB55",
    
  }
  const progressTick = {
    width: "2rem",
    height: "2rem",
    backgroundColor: "#00AB55",
    color: "#fff",
    marginLeft: "1rem",
    borderRadius: "50%",

  }
  return (
    <div style={TaskListView_Content_Right}>
      <h5>Thông báo tiến độ</h5>
      <div style={infoProgress}>
        <p style={progressItalic}>
          {props.timeProgress}  
          <span> phút trước </span>
          {props.idProgress}
        </p>
        <p style={progressBold}>
          Cập nhật đã thu gom
        </p>
        <p style={progressConfirm}>
          Xác nhận 
          <FaCheck style={progressTick} />
        </p>
      </div>
    </div>
  );
}
function TaskListView_Content() {
  const taskListView_Content = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    margin: "auto",
    fontSize: "20px",
  }
  return (
    <div style={taskListView_Content} className='taskListView_Content'>
      <TaskListView_Content_Left
        idShift= "# 4 0 0 1"
        dayShift="12/5/2023"
        statusShift="Đang diễn ra"
        startShift="6:00"
        endShift="9:00"
      />
      <TaskListView_Content_Right 
        timeProgress="1"
        idProgress="# 1 0 0 1"
      
      />
    </div>
  );
}
function TaskListView_Table () {
  const TaskListView_Table = {
    width: "90%",
    margin: "auto",
    marginTop: "3rem",
    backgroundColor: "#fff",
    borderRadius: "30px",
    overflow: "hidden",
  }
  const rowHead = {
    height: "7rem",
    backgroundColor: '#018241',
    color: "#fff",
    width: "100%",

  }
  const row = {
    height: "7rem",

  }
  const rowOdd = {
    height: "7rem",
    backgroundColor: '#B2FFDA',


  }
  const cell = {
    width: '14%'
  }
  const buttonShow = {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: '#018241',
    padding: "1rem 2rem",
    borderRadius: "30px"
  }
  const table = {
    width: '100%'
  }
  const thead = {
    width: '100%'
  }
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
                <td><a href='#' style={buttonShow}>Show</a></td>
                <td><FaEllipsisV /></td>
            </tr>
            <tr style={row}>
                <td>#1001</td>
                <td>Đang diễn ra</td>
                <td>51-A1-45678</td>
                <td>Nguyễn Văn A</td>
                <td>#LT1003</td>
                <td><a href='#' style={buttonShow}>Show</a></td>
                <td><FaEllipsisV /></td>
            </tr>
            <tr style={rowOdd}>
                <td>#1001</td>
                <td>Đang diễn ra</td>
                <td>51-A1-45678</td>
                <td>Nguyễn Văn A</td>
                <td>#LT1003</td>
                <td><a href='#' style={buttonShow}>Show</a></td>
                <td><FaEllipsisV /></td>
            </tr>
            <tr style={row}>
                <td>#1001</td>
                <td>Đang diễn ra</td>
                <td>51-A1-45678</td>
                <td>Nguyễn Văn A</td>
                <td>#LT1003</td>
                <td><a href='#' style={buttonShow}>Show</a></td>
                <td><FaEllipsisV /></td>
            </tr>
          </tbody>
        </table>
      </div>
    
  );
}
function TaskListView() {
  const TaskListView = {
    width: "100%",
    backgroundColor: "#f2f2f2",
    height: "100vh",

  }
  return (
    <div style={TaskListView}>
      <TaskListView_Header />
      <TaskListView_Content />
      <TaskListView_Table  />
    </div>
  );
}

export default TaskListView;






