const TaskViewInfoRight = () => {
  const TaskView_Info_Right = {
    width: '20%',
    backgroundColor: '#fff',
    borderRadius: '30px',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  };
  const image = {
    width: '50%',
    margin: '2rem auto',
  };
  const btn = {
    backgroundColor: '#018241',
    color: '#fff',
    borderRadius: '30px',
    padding: '0.25rem 2rem',
    textDecoration: 'none',
    // marginBottom: "2rem"
  };
  return (
    <div style={TaskView_Info_Right}>
      {/* <img src="../../assets/MapRoute.jpg" style={img}/> */}
      <img
        src="https://cdn.tgdd.vn/GameApp/3/222424/Screentshots/google-maps-go-ban-do-tim-duong-cho-may-cau-hinh-yeu-222424-logo-13-05-2020.png"
        alt="Map Route"
        style={image}
      />
      <div>
        <a href="#" style={btn}>
          Tuyến đường
        </a>
      </div>
    </div>
  );
};

export default TaskViewInfoRight;
