import App from '@components/App';
import Sidebar from '@components/Sidebar';

const MainPage = () => {
  return (
    <div className="container row">
      <Sidebar />
      <div className="col-9" id="workspace">
        <App />
      </div>
    </div>
  );
};

export default MainPage;
