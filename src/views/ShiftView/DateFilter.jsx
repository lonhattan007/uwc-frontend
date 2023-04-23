import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import DatePickerComponent from './utils/datePicker';

import getCurrentDate from './utils/getCurrentDate';
import isValidDate from './utils/isValidDate';

import './DateFilter.module.scss';

const DateFilter = ({ fromDate, containerDateRef, labelDateRef, inputDateRef }) => {
  const label = fromDate ? 'Từ ngày' : 'Đến ngày';
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleCalendarClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (value) => {
    if (typeof value === 'object') {
      value = value.toLocaleDateString('en-GB');
    }
    if (isValidDate(value)) {
      dateValue.current = value;
      setSelectedDate(value);
    } else {
      dateValue.current = '';
      setSelectedDate(value);
    }
    setShowDatePicker(false);
  };

  return (
    <div className="filter-input" ref={containerDateRef}>
      <div className="input-container">
        <label htmlFor={fromDate ? 'fromDate' : 'toDate'} ref={labelDateRef}>
          {label}
        </label>
        <input
          id={fromDate ? 'fromDate' : 'toDate'}
          ref={inputDateRef}
          type="text"
          placeholder={getCurrentDate()}
          className="date-input"
          value={selectedDate ? selectedDate : ''}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>
      <div className="icon-container" onClick={handleCalendarClick}>
        <FontAwesomeIcon icon={faCalendarDay} />
      </div>
      {showDatePicker && <DatePickerComponent onSelectDate={handleDateChange} />}
    </div>
  );
};

export default DateFilter;
