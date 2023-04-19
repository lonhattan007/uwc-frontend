import React from 'react';
import classNames from 'classnames/bind';
import { Dropdown } from 'react-bootstrap';
import styles from './dropdownMenu.module.scss';

const cx = classNames.bind(styles);

const DropdownMenu = ({ onEditClick, onDeleteClick }) => {
  return (
    <Dropdown className={cx('wrapper')}>
      <div className={cx('toggle-btn')}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="fas fa-ellipsis-v"></i>
        </Dropdown.Toggle>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item onClick={onEditClick}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={onDeleteClick}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
