import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { faCalendarDay, faCirclePlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@components/Sidebar/Sidebar';
import styles from './shiftPage.module.scss';

const cx = classNames.bind(styles);

function ShiftPage() {
    const [selectedOption, setSelectedOption] = useState(''); // state for selected option
    const handleSelect = (event) => {
        // update selected option state
        setSelectedOption(event.target.value);
    };

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

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
                                <FontAwesomeIcon icon={faFilter} className={cx('filter-icon')} />
                            </div>
                            <div className={cx('filter-option')}>
                                <div className={cx('filter-input')}>
                                    <div className={cx('input-container')}>
                                        <input type="text" placeholder="Ngày" className={cx('date-input')} />
                                    </div>
                                    <div className={cx('icon-container')}>
                                        <FontAwesomeIcon icon={faCalendarDay} />
                                    </div>
                                </div>
                                <div className={cx('filter-input')}>
                                    <Form className={cx('status-input')}>
                                        <Form.Select onChange={() => handleSelect()} className={cx('selected-status')}>
                                            <option value="">Select an option</option>
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
                </div>
            </div>
        </>
    );
}

export default ShiftPage;
