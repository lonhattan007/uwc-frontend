import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';



export const TableFooters = ({ range, setPage, page, slice }) => {

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div 
      style={{
        padding: '8px 0px',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {range.map((el, index) => (
        <Button
          
          key={index}
          style={{
            textTransform: 'none',
            color: index === page - 1? 'white' : 'black',
            borderBottom: index === page - 1  ? '' : 'solid 1px #B5D2E8',
          }}
          onClick={() => setPage(el)}
          variant={index === page - 1? 'contained' : 'text'}
          color="success"
        >
          {el}
        </Button>
      ))}
    </div>
  );
};
