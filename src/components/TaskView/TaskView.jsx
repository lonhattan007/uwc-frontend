import React from "react";
import { FaArrowLeft, FaUser, FaTelegram, FaClock, FaCar  } from "react-icons/fa";
function TaskView_Info_Left(props) {
    const TaskView_Info_Left = {
        width: "60%",
        backgroundColor: "#fff",
        borderRadius: "30px",
        marginTop: "2rem",
    }
    const TaskView_Info_Left_main = {
        display: "flex",
    }
    const TaskView_Info_Left_h5 = {
        textAlign: "start",
        marginLeft: "2rem",
        fontSize: "30px"

    }
    const TaskView_Info_Left_a = {
        textDecoration: "none",
        color: "#000",
        
    }
    const TaskView_Info_Left_main_left = {
        width: "40%",
        margin: 'auto',
    }
    const TaskView_Info_Left_main_right = {
        width: "40%",
        margin: 'auto'
    }
    const bold = {
        fontWeight: "600",
        marginLeft: '1.5rem',


    }
    const align = {
        textAlign: "start",
        marginLeft: "4.5rem",
        marginTop: "1.25rem",
    }
    const btn = {
        backgroundColor: "#018241",
        color: '#fff',
        borderRadius: "30px",
        padding: "0.25rem 2rem"
    }
    return (
        <div style={TaskView_Info_Left}>
            <h5 style={TaskView_Info_Left_h5}>
                <a href="#" style={TaskView_Info_Left_a}>
                    <FaArrowLeft />
                    Thông tin ca {props.idTask}
                </a>
            </h5>
            <div style={TaskView_Info_Left_main}>
                
                    <div style={TaskView_Info_Left_main_left}>
                        <p style={align}>
                            <FaUser />
                            <span style={bold}>Tài xế: </span>
                            <span>{props.driver}</span>
                        </p>
                        <p style={align}>
                            <FaTelegram  />
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
                            <FaCar  />
                            <span style={bold}>Biển số xe: </span>
                            <span>{props.idCar}</span>
                        </p>
                        <p style={align}>
                            <FaClock />
                            <span style={bold}>Giờ kết thúc: </span>
                            <span>{props.idEndShift}</span>
                        </p>
                        <button href="#" style={btn}>Đang diễn ra</button>
                    </div>
                
            </div>
        </div>
    );
}
function TaskView_Info_Right() {
    const TaskView_Info_Right = {
        width: "20%",
        backgroundColor: "#fff",
        borderRadius: "30px",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        padding: "1rem"
    }
    const img = {
        width: "50%",
        margin: "2rem auto"
    }
    const btn = {
        backgroundColor: "#018241",
        color: '#fff',
        borderRadius: "30px",
        padding: "0.25rem 2rem",
        textDecoration: "none",
        // marginBottom: "2rem"
    }
    return (
        <div style={TaskView_Info_Right}>
            <img src="https://images.sftcdn.net/images/t_app-icon-s/p/9d68dc94-f2f0-4ed8-9997-feb4813a38b2/4289966562/google-maps-go-logo" style={img}/>
            
            <div><a href="#" style={btn}>Tuyến đường</a></div>
        </div>
    );
}
function TaskView_Info() {
    const TaskView_Info = {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        fontSize: "20px",
    }
    return (
        <div style={TaskView_Info}>
            <TaskView_Info_Left 
                idTask="# 1 0 0 1"
                driver="Nguyen Van A"
                idRoute="LT1003"
                idShift="2001"
                idCar="51-A1-45678"
                idEndShift="9:00"
            />
            <TaskView_Info_Right />
        </div>
    ); 
}
function TaskView_Table () {
    const TaskView_Table = {
        width: "90%",
        margin: '2rem auto',
        backgroundColor: "#fff",
        borderRadius: "30px",
        overflow: "hidden",
        fontWeight: "700"
    }
    const tb_col1 = {
        width: "70%",
    }
    const tb_col2 = {
        width: "15%",
    }
    const tb_col3 = {
        width: "15%",
        
    }
    const rowHead = {
        height: "8rem",
        backgroundColor: '#018241',
        color: "#fff",
        width: "100%",
    
    }
    const row = {
        height: "8rem",
    
    }
    const rowOdd = {
        height: "8rem",
        backgroundColor: '#B2FFDA',
    }
    const table = {
        width: '100%'
    }
    const thead = {
        width: '100%'
    }
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
                            Nguyễn Văn D<br/>
                            Nguyễn Văn B<br/>
                            Nguyễn Văn C
                        </td>
                    </tr>
                    <tr style={rowOdd}>
                        <td>167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM</td>
                        <td>Nguyễn Văn A</td>
                        <td>
                            Nguyễn Văn D<br/>
                            Nguyễn Văn B<br/>
                            Nguyễn Văn C
                        </td>
                    </tr>
                    <tr style={row}>
                        <td>167, Phạm Hữu Lầu, Phường Mỹ Phước, Quận 7, HCM</td>
                        <td>Nguyễn Văn A</td>
                        <td>
                            Nguyễn Văn D<br/>
                            Nguyễn Văn B<br/>
                            Nguyễn Văn C
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
function TaskView() {
    const TaskView = {
        width: "100%",
        backgroundColor: "#f2f2f2",
        height: "100vh"
    }
    return (
        <div style={TaskView}>
            <TaskView_Info />
            <TaskView_Table />
        </div>
    );
}
export default TaskView;