import React, { useState, useEffect, useRef } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './table.module.scss';
import paginationRange from './pageRange';
import DropdownMenu from './dropDownMenu';

const cx = classNames.bind(styles);

function ShiftTable({ shiftData }) {
  const itemsPerPage = 5;

  const [activePage, setActivePage] = useState(1);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const allCheckBox = useRef();

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = shiftData.slice(indexOfFirstItem, indexOfLastItem);
  const currentCount = currentItems.length;
  const pageCount = Math.ceil(shiftData.length / itemsPerPage);
  const initalCheckbox = currentItems.map((item) => ({
    id: item.id,
    checked: false,
  }));
  const [checkedItems, setCheckedItems] = useState(initalCheckbox);

  const handleActivePage = (pageNumber) => {
    setActivePage(pageNumber);
  };

  function handleCheckboxChange(event) {
    const id = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems(
      checkedItems.map((item) => {
        if (item.id == id) {
          return { ...item, checked: isChecked };
        }
        return item;
      }),
    );
  }

  const handleAllSelection = (event) => {
    setCheckedItems(checkedItems.map((item) => ({ ...item, checked: event.target.checked })));
  };

  const handleEditClick = (id) => {
    console.log('Edit clicked at id: ' + id);
  };

  const handleDeleteClick = (id) => {
    console.log('Delete clicked! at id' + id);
  };

  useEffect(() => {
    setCheckedItems(initalCheckbox);
  }, [activePage]);

  useEffect(() => {
    setCheckedItems(initalCheckbox);
    setActivePage(1);
  }, [shiftData]);

  useEffect(() => {
    const checkboxRef = allCheckBox.current;
    if (checkedItems.filter((item) => item.checked === true).length === currentCount) {
      checkboxRef.checked = true;
    } else {
      checkboxRef.checked = false;
    }
  }, [checkedItems]);

  const pageNumbers = paginationRange(activePage, pageCount, 3).map((i) => (
    <Pagination.Item
      className={i === activePage ? cx('active-page') : cx('page-item')}
      key={i}
      active={i === activePage}
      onClick={() => handleActivePage(i)}
    >
      {i}
    </Pagination.Item>
  ));

  const lastRowIndex = currentItems.length - 1;

  return (
    <div className={cx('wrapper')} style={{ overflow: 'auto' }}>
      <Table hover borderless>
        <thead className={cx('thread-row')}>
          <tr>
            <th style={{ borderTopLeftRadius: '10px' }}>
              <div className={cx('checkbox-all')}>
                <div className={cx('text-all')}>
                  <p>All</p>
                </div>
                <input type="checkbox" ref={allCheckBox} onChange={handleAllSelection} />
              </div>
            </th>
            <th>ID</th>
            <th>Ngày</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
            <th>Trạng thái</th>
            <th>Số nhiệm vụ</th>
            <th>Hoàn thành</th>
            <th></th>
            <th style={{ borderTopRightRadius: '10px' }}></th>
          </tr>
        </thead>
        <tbody className={cx('table-body')}>
          {currentCount === 0 ? (
            <tr>
              <td className={cx('not-found-result')} colSpan={9}>
                Không có kết quả trả về.<a href="#">Tạo ca ngay tại đây!</a>
              </td>
            </tr>
          ) : (
            currentItems.map((shift, index) => (
              <tr key={shift.id} className={index % 2 ? cx('even-row') : cx('odd-row')}>
                <td style={{ backgroundColor: '#ffffff' }}>
                  <div className={cx('checkbox-class')}>
                    <input
                      type="checkbox"
                      name={shift.id}
                      checked={
                        checkedItems.filter((obj) => obj.id == shift.id)[0] &&
                        checkedItems.filter((obj) => obj.id == shift.id)[0].checked
                          ? checkedItems.filter((obj) => obj.id == shift.id)[0].checked
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </td>
                <td className={index === lastRowIndex ? cx('xxxx') : ''}>{shift.id}</td>
                <td>{shift.date}</td>
                <td>{shift.startedTime}</td>
                <td>{shift.endedTime}</td>
                <td>{shift.status}</td>
                <td>{shift.taskNumber}</td>
                <td>{shift.completedTask}</td>
                <td>
                  <div className={cx('button-container')}>
                    <button className={cx('show-btn')}>Chi tiết</button>
                  </div>
                </td>
                <td
                  className={index === lastRowIndex ? cx('xxx') : ''}
                  onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                >
                  <DropdownMenu
                    onEditClick={() => handleEditClick(shift.id)}
                    onDeleteClick={() => handleDeleteClick(shift.id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <div className={cx('pagination-wrapper')}>
        <Pagination>
          <Pagination.Item
            className={cx('control-button')}
            disabled={activePage === 1}
            onClick={() => handleActivePage(activePage - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Pagination.Item>

          {pageNumbers}

          <Pagination.Item
            disabled={activePage === pageCount}
            onClick={() => handleActivePage(activePage + 1)}
            className={cx('control-button')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
}

export default ShiftTable;
