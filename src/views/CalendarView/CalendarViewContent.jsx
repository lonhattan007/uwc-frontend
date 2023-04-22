import { useRef, useState, forwardRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import viLocale from '@fullcalendar/core/locales/vi';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DateCell = ({ date, setSelectedDate }) => {
  return (
    <div className="day-cell">
      <div className="day-number">{date.getDate()}</div>
      {date.toDateString() === new Date().toDateString() && (
        <div className="note">
          <>
            <span>Số nhiệm vụ: 6</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Hoàn thành: 0</span>
            </div>
          </>
        </div>
      )}
      <div className="add-icon" onClick={() => setSelectedDate(date)}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

const CalendarForm = () => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="note">Ghi chú:</label>
        <textarea id="note" name="note" ref={noteRef} />
        <button type="submit">Thêm ghi chú</button>
      </form>
    </div>
  );
};

const CalendarViewContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const noteRef = useRef(null);
  const calendarRef = useRef(null);

  const handleSelect = (arg) => {
    setSelectedDate(arg.start);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = noteRef.current.value;
    const eventObj = {
      title: note,
      start: selectedDate,
      allDay: true,
    };
    calendarRef.current.getApi().addEvent(eventObj);
    setShowForm(false);
  };

  return (
    <div className="calendar">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        select={handleSelect}
        locale={viLocale}
        showNonCurrentDates={false}
        dayCellContent={({ date }) => <DateCell date={date} setSelectedDate={setSelectedDate} />}
      />

      {showForm && <CalendarForm />}
    </div>
  );
};

export default CalendarViewContent;
