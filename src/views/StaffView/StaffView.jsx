import Sidebar from '@components/Sidebar';
import StaffViewContent from './StaffViewContent';

const StaffView = () => {
  return (
    <>
      <Sidebar />
      <div id="workspace">
        <StaffViewContent />
      </div>
    </>
  );
};

export default StaffView;
