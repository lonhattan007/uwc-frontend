import Sidebar from '@components/Sidebar';
import StaffViewContent from './StaffViewContent';

const StaffView = () => {
  return (
    <div className="container row">
      <Sidebar />
      <div>
        <StaffViewContent />
      </div>
    </div>
  );
};

export default StaffView;
