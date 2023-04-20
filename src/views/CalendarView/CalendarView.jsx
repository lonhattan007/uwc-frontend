import CalendarViewContent from './CalendarViewContent';
import Sidebar from '@components/Sidebar';

import './CalendarView.scss';

const CalendarView = () => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <CalendarViewContent />
      </div>
    </div>
  );
};
export default CalendarView;
