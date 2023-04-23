import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import Sidebar from '@components/Sidebar/Sidebar';
import getCurrentDate from './utils/getCurrentDate';

import isValidDate from './utils/isValidDate';
import ShiftTable from './utils/tableOfContent';
import compareTwoDate from './utils/compare2Date';
import isDateInRange from './utils/rangeDateChecking';

import DateFilter from './DateFilter';
import AddShiftModal from '@components/AddShiftModal';

import styles from './ShiftView.module.scss';

import { shiftData } from '@mocks/shifts';

const cx = classNames.bind(styles);

const ShiftView = () => {
  const [selectedOption, setSelectedOption] = useState(''); // state for selected option
  const [fillShiftData, setFillShiftData] = useState(shiftData);
  const inputDateRef = useRef();
  const startDateContainerRef = useRef();
  const endDateContainerRef = useRef();
  const startDateValue = useRef('');
  const endDateValue = useRef('');
  const startDateLabelRef = useRef(null);
  const endDateLabelRef = useRef(null);
  const [showNewShiftModal, setShowNewShiftModal] = useState(false);

  const handleSelect = (event) => {
    // update selected option state
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    handleFilter();
  }, [startDateValue.current, endDateValue.current, selectedOption]);

  useEffect(() => {
    let divElement = startDateContainerRef.current;
    let inputElement = divElement.querySelector('input');
    let labelRef = startDateLabelRef.current;
    const validColor = '0 0 0 2px rgba(1, 130, 65, 1)';
    const invalidColor = '0 0 0 2px rgba(220, 20, 60, 1)';

    const handleFocus = () => {
      if (isValidDate(inputElement.value)) {
        labelRef.style.color = 'rgba(1, 130, 65, 1)';
        divElement.style.boxShadow = validColor;
      } else {
        labelRef.style.color = 'rgba(220, 20, 60, 1)';
        divElement.style.boxShadow = invalidColor;
      }
    };

    const handleFocusOut = () => {
      if (isValidDate(inputElement.value) || isValidDate(startDateValue.current)) {
        divElement.style.boxShadow = validColor;
        labelRef.style.color = 'rgba(1, 130, 65, 1)';
      } else if (inputElement.value === '') {
        divElement.style.boxShadow = '0 0 0 1px rgba(111, 105, 105, 0.5)';
        labelRef.style.color = 'rgba(111, 105, 105, 0.5)';
      } else {
        divElement.style.boxShadow = invalidColor;
        labelRef.style.color = 'rgba(220, 20, 60, 1)';
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
    let divElement1 = endDateContainerRef.current;
    let inputElement1 = divElement1.querySelector('input');
    const validColor = '0 0 0 2px rgba(1, 130, 65, 1)';
    const invalidColor = '0 0 0 2px rgba(220, 20, 60, 1)';
    const labelRef1 = endDateLabelRef.current;

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
      if (isValidDate(inputElement1.value) || isValidDate(endDateValue.current)) {
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

  const handleFilter = () => {
    const data = shiftData;

    if (startDateValue.current === '' && endDateValue.current === '' && selectedOption === '') {
      setFillShiftData(data);
    } else if (startDateValue.current === '' && endDateValue.current === '') {
      const filteredData = data.filter((shift) => shift.status === selectedOption);
      setFillShiftData(filteredData);
    } else {
      const fromDate = startDateValue.current === '' ? getCurrentDate() : startDateValue.current;
      const toDate = endDateValue.current === '' ? getCurrentDate() : endDateValue.current;

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
  };

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
              <AddShiftModal setShowNewShiftModal={setShowNewShiftModal} handleCancel={handleCancel} />
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
                  <DateFilter
                    fromDate={true}
                    containerDateRef={startDateContainerRef}
                    labelDateRef={startDateLabelRef}
                    inputDateRef={inputDateRef}
                  />
                  <DateFilter
                    fromDate={false}
                    containerDateRef={endDateContainerRef}
                    labelDateRef={endDateLabelRef}
                    inputDateRef={inputDateRef}
                  />
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
};

export default ShiftView;
