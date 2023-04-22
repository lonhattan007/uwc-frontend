import CalendarViewContent from './CalendarViewContent';
import Sidebar from '@components/Sidebar';

import './CalendarView.scss';

const CalendarView = () => {
  return (
    <>
      <Sidebar />
      <div id="workspace">
        <CalendarViewContent />
      </div>
    </>
  );
};

export default CalendarView;
