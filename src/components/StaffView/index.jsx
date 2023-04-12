import React, { useState } from 'react';
import { Button } from '@mui/material';
import { staffData } from './staffdata';
import Sidebar from '@components/Sidebar';
import PersonIcon from '@mui/icons-material/Person';
 import { StaffInfo } from './InfoStaff';

export const StaffView = () =>{
    const [chosen, setChosen] = useState(0);
    return (
        <div className="container row">
            <Sidebar />
            <div 			
                style={{
                    position: "fixed",
                    top: "15%",
                    left: "20%",
                    width: "80%",
                    height: "75%",
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    columnGap: "2%",
            }}>
               <div
                style={{
                    boxShadow: "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)",
                    borderRadius: "1rem",
                    padding: "1.5rem 1.5rem 1.5rem 1.5rem"
                }}>
                    <h3 style={{
                        height: "7%",
                        fontWeight: "700",
                        backgroundImage: "linear-gradient(90deg, rgba(0,255,0,1), rgba(0,128,0,1))",
                        color: "transparent",
                        WebkitBackgroundClip: "text"
                    }}  >Nhân viên</h3>
                    {staffData.map((item,index) =>
                        <Button fullWidth
                        startIcon={ <PersonIcon /> }
                        style={{
                            textTransform: "none",
                            color: index === chosen ? "white" : "black",
                            display: "flex",
                            justifyContent: "flex-start",
                            borderBottom: index === chosen ? "" : "solid 1px #B5D2E8",
                        }}
                        size="large"
                        onClick={() => setChosen(index)}
                        variant={index === chosen ? "contained" : "text"}
                        color = "success"
                        >
                            {item.name}
                        </Button>
                    )}
                </div>
                <StaffInfo data = {staffData[chosen]}/>
            </div>
        </div>
    )
}