import React, { useState, useEffect } from 'react';
import TableFooter from './StaffTableFooter';

import './StaffInfo.scss';

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};
const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

const StaffInfo = ({ data }) => {
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data.historyWorking, page, rowsPerPage);

  const getFirstRow = (data) => [
    {
      field: 'Tên',
      content: data.name,
    },
    {
      field: 'ID',
      content: data.id,
    },
    {
      field: 'Chức vụ',
      content: data.role,
    },
  ];

  const getSecondRow = (data) => [
    {
      field: 'Giới tính',
      content: data.gender,
    },
    {
      field: 'Số điện thoại',
      content: data.phone,
    },
    {
      field: 'Email',
      content: data.email,
    },
  ];

  const getThirdRow = (data) => [
    {
      field: 'Địa chỉ',
      content: data.address,
    },
  ];

  return (
    <div>
      <div className="info">
        {[getFirstRow(data), getSecondRow(data), getThirdRow(data)].map((row) => (
          <div>
            {row.map((item) => (
              <div>
                <span>{item.field}: </span> {item.content}
              </div>
            ))}
          </div>
        ))}
        <span>Lịch sử công việc: </span>
      </div>
      <table className="table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader"> ID</th>
            <th className="tableHeader"> MCPs</th>
            <th className="tableHeader"> Thời gian bắt đầu</th>
            <th className="tableHeader"> Thời gian kết thúc</th>
            <th className="tableHeader"> Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((item) => (
            <tr className="tableRowItems">
              <td className="tableCell">{item.id}</td>
              <td className="tableCell">{item.mcp}</td>
              <td className="tableCell">{item.startTime}</td>
              <td className="tableCell">{item.endTime}</td>
              <td className="tableCell">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default StaffInfo;
