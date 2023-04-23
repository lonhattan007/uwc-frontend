import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';

import styles from './AddShiftModal.scss';

const cx = classNames.bind(styles);

const AddShiftModal = ({ setShowNewShiftModal, handleCancel }) => {
  return (
    <div className={cx('new-shift-modal')}>
      <div className={cx('modal-inner')}>
        <div className={cx('modal-header')}>
          <h2 className={cx('modal-title')}>Tạo ca mới</h2>
          <button className={cx('close-button')} onClick={() => setShowNewShiftModal(false)}>
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
          <button className={cx('confirm-button')} onClick={handleCancel}>
            Xác nhận
          </button>
          <button className={cx('cancel-button')} onClick={handleCancel}>
            Hủy bỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddShiftModal;
