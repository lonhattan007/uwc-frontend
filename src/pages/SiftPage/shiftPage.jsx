import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { faCalendarDay, faCirclePlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@components/Sidebar/Sidebar';
import styles from './shiftPage.module.scss';
import DatePickerComponent from './datePicker';
import isValidDate from './utils/isValidDate';

const cx = classNames.bind(styles);

function ShiftPage() {
    const [selectedOption, setSelectedOption] = useState(''); // state for selected option
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isValidDateFlag, setIsValidDateFlag] = useState(false);

    const handleSelect = (event) => {
        // update selected option state
        setSelectedOption(event.target.value);
    };

    const options = [
        { value: 'option1', label: 'Chưa diễn ra' },
        { value: 'option2', label: 'Đang diễn ra' },
        { value: 'option3', label: 'Đã kết thúc' },
    ];

    const handleCalendarClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateChange = (value) => {
        if (typeof value === 'object') {
            value = value.toLocaleDateString('en-GB');
        }
        if (isValidDate(value)) {
            setSelectedDate(value);
            console.log('valid date');
            setIsValidDateFlag(true);
        } else {
            setSelectedDate(value);
            console.log('Invalid date');
        }
        setShowDatePicker(false);
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
                                    <div
                                        className={cx('filter-input')}
                                        style={{
                                            boxShadow:
                                                isValidDateFlag === true
                                                    ? '0 0 0 2px #018241 !important'
                                                    : '0 0 0 2px #FF0000 !important',
                                        }}
                                    >
                                        <div className={cx('input-container')}>
                                            <input
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
                                    <button className={cx('filter-btn')}>Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShiftPage;
