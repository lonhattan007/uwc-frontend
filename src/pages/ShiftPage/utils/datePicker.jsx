import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent({ onSelectDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <div className="position-absolute" style={{ zIndex: 999 }}>
      <DatePicker
        calendarClassName="custom-calendar"
        inline
        selected={null}
        onChange={handleSelect}
        dateFormat="dd/MM/yyyy"
        className="shadow rounded p-3"
      />
    </div>
  );
}

export default DatePickerComponent;
