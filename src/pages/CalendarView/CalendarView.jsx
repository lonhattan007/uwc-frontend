import { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useRef, useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './CalendarView.scss';
import Sidebar from '@components/Sidebar';

function ContentCalendarView() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const noteRef = useRef(null);
  const calendarRef = useRef(null);

  const handleSelect = (arg) => {
    setSelectedDate(arg.start);
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = noteRef.current.value;
    const eventObj = {
      title: note,
      start: selectedDate,
      allDay: true,
    };
    calendarRef.current.getApi().addEvent(eventObj);
    setShowForm(false);
  };
  console.log(showForm);
  return (
    <div className="calendar">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        select={handleSelect}
        dayCellContent={({ date }) => (
          <div className="day-cell">
            <div className="day-number">{date.getDate()}</div>
            {date.toDateString() === new Date().toDateString() && (
              <div className="note">
                <p>
                  <span>Số nhiệm vụ: 6</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>Hoàn thành: 0</span>
                  </div>
                </p>
              </div>
            )}
            <div className="add-icon" onClick={() => setSelectedDate(date)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        )}
      />

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="note">Note:</label>
            <textarea id="note" name="note" ref={noteRef} />
            <button type="submit">Add note</button>
          </form>
        </div>
      )}
    </div>
  );
}
function CalendarView() {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <Sidebar />
      <ContentCalendarView />
    </div>
  );
}
export default CalendarView;
