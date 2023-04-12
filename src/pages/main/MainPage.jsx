import App from '@components/App';
import Sidebar from '@components/Sidebar';

import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <Sidebar />
      <div id="workspace">
        <App />
      </div>
    </>
  );
};

export default MainPage;
