import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import {TableFooters} from './TableFooters';

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

export const StaffInfo = ({data}) => {
    const rowsPerPage = 5
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data.historyWorking, page, rowsPerPage);

    const getFirstRow = (data) => [
        {
            field: "Tên",
            content: data.name
        },
        {
            field: "ID",
            content: data.id
        },
        {
            field: "Chức vụ",
            content: data.role
        }
    ]
    
    const getSecondRow = (data) => [
        {
            field: "Giới tính",
            content: data.gender
        },
        {
            field: "Số điện thoại",
            content: data.phone
        },
        {
            field: "Email",
            content: data.email
        },
    ]
    
    const getThirdRow = (data) => [
        {
            field: "Địa chỉ",
            content: data.address
        },
    ]

    return (
        <div 			
            style={{
				//backgroundColor: "green",
				boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
				borderRadius: "1rem",
				padding: "1.5rem 1.5rem 1.5rem 1.5rem",
        }}>
            <h3 style={{
                height: "7%",
                fontWeight: "700",
                backgroundImage: "linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(0,128,0,1) 100%)",
                color: "transparent",
                WebkitBackgroundClip: "text"
            }}>Thông tin của {data.name}</h3>
			<div style={{ height: "20%", display: "grid", fontSize: "0.9rem" }}>
				{[getFirstRow(data), getSecondRow(data), getThirdRow(data)].map((row) =>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						{row.map((item) =>
							<div>
								<span style={{ fontWeight: "bold" }}>{item.field}: </span>{item.content}
							</div>
						)}
					</div>
				)}
			</div>            
			<span style={{ fontWeight: "bold", fontSize: "1rem",}}>Lịch sử công việc: </span>
            <TableContainer component={Paper}>
                <Table style={{ margin: "0.5rem 0 0 0" }}>
                    <TableHead >
                        <TableRow style = {{
                            backgroundColor: "green",
                        }}>
                            <TableCell align="center" style={{color:"white", fontSize: "0.9rem" }} >ID</TableCell>
                            <TableCell align="center" style={{color:"white", fontSize: "0.9rem" }} >MCPs</TableCell>
                            <TableCell align="center" style={{color:"white", fontSize: "0.9rem" }} >Thời gian bắt đầu</TableCell>
                            <TableCell align="center" style={{color:"white", fontSize: "0.9rem" }} >Thời gian kết thúc</TableCell>
                            <TableCell align="center" style={{color:"white", fontSize: "0.9rem" }} >Tình trạng</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {slice.map(item =>
                            <TableRow>
                                {[item.id, item.mcp, item.startTime, item.endTime, item.status].map((cell) =>
                                    <TableCell align="center" style={{  fontSize: "0.8rem" }}>{cell}</TableCell>
                                )}                                
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableFooters range={range} slice={slice} setPage={setPage} page={page} />
        </div>
    )
}