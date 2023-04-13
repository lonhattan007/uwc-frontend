import Sidebar from '@components/Sidebar';
import { StaffView } from '@components/StaffView/StaffView';

const StaffPage = () => {
  return (
    <div className="container row">
      <Sidebar />
      <div className="col-9">
        <StaffView />
      </div>
    </div>
  );
};

export default StaffPage;
