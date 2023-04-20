import App from '@components/App';
import Sidebar from '@components/Sidebar';

import './MainPage.scss';
// import TaskListView from '@components/TaskListView/TaskListView';

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
