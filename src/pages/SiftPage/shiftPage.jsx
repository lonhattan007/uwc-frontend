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

const cx = classNames.bind(styles);

function ShiftPage() {
    const [selectedOption, setSelectedOption] = useState(''); // state for selected option
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isValidDateFlag, setIsValidDateFlag] = useState(false);
    const [fillShiftData, setFillShiftData] = useState(shiftData);
    const inputDateRef = useRef();
    const containerDateRef = useRef();
    const dateValue = useRef();

    const handleSelect = (event) => {
        // update selected option state
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        handleFilter();
    }, [selectedDate, selectedOption]);

    useEffect(() => {
        let divElement = containerDateRef.current;
        let inputElement = divElement.querySelector('input');

        const handleFocus = () => {
            console.log('focus in called');
            if (isValidDate(inputElement.value) || isValidDate(dateValue.current)) {
                divElement.style.boxShadow = '0 0 0 2px rgba(1, 130, 65, 1)';
            } else {
                divElement.style.boxShadow = '0 0 0 2px rgba(220, 20, 60, 1)';
            }
        };

        const handleFocusOut = () => {
            console.log('focus out called');
            if (inputElement.value === '') {
                divElement.style.boxShadow = '0 0 0 1px rgba(111, 105, 105, 0.5)';
            } else if (isValidDate(inputElement.value) || isValidDate(dateValue.current)) {
                divElement.style.boxShadow = '0 0 0 2px rgba(1, 130, 65, 1)';
            } else {
                divElement.style.boxShadow = '0 0 0 2px rgba(220, 20, 60, 1)';
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

    const options = [
        { value: 'Chưa diễn ra', label: 'Chưa diễn ra' },
        { value: 'Đang diễn ra', label: 'Đang diễn ra' },
        { value: 'Đã kết thúc', label: 'Đã kết thúc' },
    ];

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
            setIsValidDateFlag(true);
        } else {
            dateValue.current = value;
            setSelectedDate(value);
        }
        setShowDatePicker(false);
    };

    const handleFilter = () => {
        const data = shiftData;
        if ((selectedDate === null || selectedDate === '') && selectedOption === '') {
            setFillShiftData(shiftData);
        } else {
            if (selectedDate === null || selectedDate === '') {
                const filledData = data.filter((shift) => shift.status === selectedOption);
                setFillShiftData(filledData);
            } else if (selectedOption === '') {
                const filledData = data.filter((shift) => compareTwoDate(selectedDate, shift.date));
                setFillShiftData(filledData);
            } else {
                const filledData = data.filter(
                    (shift) => compareTwoDate(selectedDate, shift.date) && shift.status === selectedOption,
                );
                setFillShiftData(filledData);
            }
        }
    };

    return (
        <>
            <Sidebar />
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('inner')}>
                        <h1 className={cx('title')}>Danh sách ca</h1>
                        <button className={cx('new-shift-button')}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                            Tạo ca mới
                        </button>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('inner-content')}>
                        <div className={cx('filter-section')}>
                            <div className={cx('filter-header')}>
                                <h6 className={cx('filter-title')}>Filter</h6>
                                <div className={cx('filter-icon')}>
                                    <FontAwesomeIcon icon={faFilter} />
                                </div>
                            </div>
                            <div className={cx('filter')}>
                                <div className={cx('filter-option')}>
                                    <div className={cx('filter-input')} ref={containerDateRef}>
                                        <div className={cx('input-container')}>
                                            <input
                                                ref={inputDateRef}
                                                type="text"
                                                placeholder="dd/mm/yyyy"
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
                                <div className={cx('filter-button')}>
                                    {/* <button className={cx('filter-btn')} onClick={handleFilter}>
                                        Filter
                                    </button> */}
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
