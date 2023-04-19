import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import { faCalendarDay, faCirclePlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@components/Sidebar/Sidebar';
import styles from './shiftPage.module.scss';
import DatePickerComponent from './utils/datePicker';
import isValidDate from './utils/isValidDate';
import ShiftTable from './utils/tableOfContent';
import { shiftData } from '@mocks/shifts';
import compareTwoDate from './utils/compare2Date';
import isDateInRange from './utils/rangeDateChecking';
import getCurrentDate from './utils/getCurrentDate';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ShiftPage() {
  const [selectedOption, setSelectedOption] = useState(''); // state for selected option
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePicker1, setShowDatePicker1] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDate1, setSelectedDate1] = useState('');
  const [fillShiftData, setFillShiftData] = useState(shiftData);
  const inputDateRef = useRef();
  const containerDateRef = useRef();
  const containerDateRef1 = useRef();
  const dateValue = useRef('');
  const dateValue1 = useRef('');
  const lableFromDateRef = useRef(null);
  const lableToDateRef = useRef(null);
  const [showNewShiftModal, setShowNewShiftModal] = useState(false);


  const handleSelect = (event) => {
    // update selected option state
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    handleFilter();
  }, [dateValue.current, dateValue1.current, selectedOption]);

  useEffect(() => {
    let divElement = containerDateRef.current;
    let inputElement = divElement.querySelector('input');
    let lableRef = lableFromDateRef.current;
    const validColor = '0 0 0 2px rgba(1, 130, 65, 1)';
    const invalidColor = '0 0 0 2px rgba(220, 20, 60, 1)';

    const handleFocus = () => {
      if (isValidDate(inputElement.value)) {
        lableRef.style.color = 'rgba(1, 130, 65, 1)';
        divElement.style.boxShadow = validColor;
      } else {
        lableRef.style.color = 'rgba(220, 20, 60, 1)';
        divElement.style.boxShadow = invalidColor;
      }
    };

    const handleFocusOut = () => {
      if (isValidDate(inputElement.value) || isValidDate(dateValue.current)) {
        divElement.style.boxShadow = validColor;
        lableRef.style.color = 'rgba(1, 130, 65, 1)';
      } else if (inputElement.value === '') {
        divElement.style.boxShadow = '0 0 0 1px rgba(111, 105, 105, 0.5)';
        lableRef.style.color = 'rgba(111, 105, 105, 0.5)';
      } else {
        divElement.style.boxShadow = invalidColor;
        lableRef.style.color = 'rgba(220, 20, 60, 1)';
      }
    };

    divElement.addEventListener('focusin', handleFocus);
    divElement.addEventListener('focusout', handleFocusOut);
    inputElement.addEventListener('input', handleFocus);

    return () => {
      divElement.removeEventListener('focusin', handleFocus);
      divElement.removeEventListener('focusout', handleFocus);
      inputElement.addEventListener('input', handleFocus);
    };
  }, []);

  useEffect(() => {
    let divElement1 = containerDateRef1.current;
    let inputElement1 = divElement1.querySelector('input');
    const validColor = '0 0 0 2px rgba(1, 130, 65, 1)';
    const invalidColor = '0 0 0 2px rgba(220, 20, 60, 1)';
    const labelRef1 = lableToDateRef.current;

    const handleFocus1 = () => {
      if (isValidDate(inputElement1.value)) {
        divElement1.style.boxShadow = validColor;
        labelRef1.style.color = 'rgba(1, 130, 65, 1)';
      } else {
        divElement1.style.boxShadow = invalidColor;
        labelRef1.style.color = 'rgba(220, 20, 60, 1';
      }
    };

    const handleFocusOut1 = () => {
      if (isValidDate(inputElement1.value) || isValidDate(dateValue1.current)) {
        divElement1.style.boxShadow = validColor;
        labelRef1.style.color = 'rgba(1, 130, 65, 1)';
      } else if (inputElement1.value === '') {
        divElement1.style.boxShadow = '0 0 0 1px rgba(111, 105, 105, 0.5)';
        labelRef1.style.color = 'rgba(111, 105, 105, 0.5)';
      } else {
        divElement1.style.boxShadow = invalidColor;
        labelRef1.style.color = 'rgba(220, 20, 60, 1';
      }
    };

    divElement1.addEventListener('focusin', handleFocus1);
    divElement1.addEventListener('focusout', handleFocusOut1);
    inputElement1.addEventListener('input', handleFocus1);

    return () => {
      divElement1.removeEventListener('focusin', handleFocus1);
      divElement1.removeEventListener('focusout', handleFocus1);
      inputElement1.addEventListener('input', handleFocus1);
    };
  }, []);

  const options = [
    { value: 'Chưa diễn ra', label: 'Chưa diễn ra' },
    { value: 'Đang diễn ra', label: 'Đang diễn ra' },
    { value: 'Đã kết thúc', label: 'Đã kết thúc' },
  ];

  const handleCalendarClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleCalendarClick1 = () => {
    setShowDatePicker1(!showDatePicker1);
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

  const handleDateChange1 = (value) => {
    if (typeof value === 'object') {
      value = value.toLocaleDateString('en-GB');
    }
    if (isValidDate(value)) {
      dateValue1.current = value;
      setSelectedDate1(value);
    } else {
      dateValue1.current = '';
      setSelectedDate1(value);
    }
    setShowDatePicker1(false);
  };

  const handleFilter = () => {
    const data = shiftData;

    if (dateValue.current === '' && dateValue1.current === '' && selectedOption === '') {
      setFillShiftData(data);
    } else if (dateValue.current === '' && dateValue1.current === '') {
      const filteredData = data.filter((shift) => shift.status === selectedOption);
      setFillShiftData(filteredData);
    } else {
      const fromDate = dateValue.current === '' ? getCurrentDate() : dateValue.current;
      const toDate = dateValue1.current === '' ? getCurrentDate() : dateValue1.current;

      if (selectedOption === '') {
        const filteredData = data.filter((shift) => isDateInRange(shift.date, fromDate, toDate));
        setFillShiftData(filteredData);
      } else {
        const filteredData = data.filter(
          (shift) => isDateInRange(shift.date, fromDate, toDate) && shift.status === selectedOption,
        );
        setFillShiftData(filteredData);
      }
    }
  };

  const handleNewShiftClick = () => {
    setShowNewShiftModal(true);
  };
  const handleCancel = () => {
    setShowNewShiftModal(false);
  }


  return (
    <>
      <Sidebar />
      <div className={cx('container')}>
        <div className={cx('header')}>
          <div className={cx('inner')}>
            <h1 className={cx('title')}>Danh sách ca</h1>
            <button className={cx('new-shift-button')} onClick={handleNewShiftClick}>
              <FontAwesomeIcon icon={faCirclePlus} />
              Tạo ca mới
            </button>
            {showNewShiftModal && (
              <div className={cx('new-shift-modal')} >
                <div className={cx('modal-inner')}>
                  <div className={cx('modal-header')}>
                    <h2 className={cx('modal-title')}>Tạo ca mới</h2>
                    <button
                      className={cx('close-button')}
                      onClick={() => setShowNewShiftModal(false)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  <div className={cx('modal-body')}>
                    <div className={cx('input-group')}>
                      <label htmlFor="start-time-input">Giờ bắt đầu:</label>
                      <input type="time" id="start-time-input" />
                    </div>
                    <div className={cx('input-group')}>
                      <label htmlFor="end-time-input">Giờ kết thúc:</label>
                      <input type="time" id="end-time-input" />
                    </div>
                    <div className={cx('input-group')}>
                      <label htmlFor="status-input">Trạng thái:</label>
                      <select id="status-input">
                        <option value="available">Chưa diễn ra</option>
                        <option value="unavailable">Đã diễn ra</option>
                        <option value="unavailable">Kết thúc</option>
                      </select>
                    </div>
                    <div className={cx('input-group')}>
                      <label htmlFor="date-input">Ngày:</label>
                      <input type="date" id="date-input" />
                    </div>
                  </div>
                  <div className={cx('modal-footer')}>
                    <button className={cx('cancel-button')} onClick={handleCancel}>Hủy bỏ</button>

                    <button className={cx('confirm-button')} onClick={handleCancel}>Xác nhận</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('inner-content')}>
            <div className={cx('filter-section')}>
              <div className={cx('filter-header')}>
                <h6 className={cx('filter-title')}>Bộ lọc</h6>
                <div className={cx('filter-icon')}>
                  <FontAwesomeIcon icon={faFilter} />
                </div>
              </div>
              <div className={cx('filter')}>
                <div className={cx('filter-option')}>
                  <div className={cx('filter-input')} ref={containerDateRef}>
                    <div className={cx('input-container')}>
                      <label htmlFor="fromDate" ref={lableFromDateRef}>
                        Từ ngày
                      </label>
                      <input
                        id="fromDate"
                        ref={inputDateRef}
                        type="text"
                        placeholder={getCurrentDate()}
                        className={cx('date-input')}
                        value={selectedDate ? selectedDate : ''}
                        onChange={(e) => handleDateChange(e.target.value)}
                      />
                    </div>
                    <div className={cx('icon-container')} onClick={handleCalendarClick}>
                      <FontAwesomeIcon icon={faCalendarDay} />
                    </div>
                    {showDatePicker && <DatePickerComponent onSelectDate={handleDateChange} />}
                  </div>
                  <div className={cx('filter-input')} ref={containerDateRef1}>
                    <div className={cx('input-container')}>
                      <label htmlFor="toDate" ref={lableToDateRef}>
                        Đến ngày
                      </label>
                      <input
                        id="toDate"
                        ref={inputDateRef}
                        type="text"
                        placeholder={getCurrentDate()}
                        className={cx('date-input')}
                        value={selectedDate1 ? selectedDate1 : ''}
                        onChange={(e) => handleDateChange1(e.target.value)}
                      />
                    </div>
                    <div className={cx('icon-container')} onClick={handleCalendarClick1}>
                      <FontAwesomeIcon icon={faCalendarDay} />
                    </div>
                    {showDatePicker1 && <DatePickerComponent onSelectDate={handleDateChange1} />}
                  </div>
                </div>
                <div className={cx('filter-second-date')}>
                  <div className={cx('filter-input')}>
                    <Form className={cx('status-input')}>
                      <Form.Select
                        onChange={(e) => handleSelect(e)}
                        className={cx('selected-status')}
                        value={selectedOption}
                      >
                        <option value="">Trạng thái</option>
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('table-section')}>
              <ShiftTable shiftData={fillShiftData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShiftPage;
