import React, { useEffect, useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
  const getRoute = () => {
    return document.URL.split('/')[3];
  };

  return (
    <div id="sidebar-container">
      <CDBSidebar
        className="sidebar"
        textColor="#fff"
        backgroundColor="#1e1e2e"
      >
        <CDBSidebarHeader
          className="sidebar-header"
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a href="/user-info" className="text-decoration-none">
            Thông tin cá nhân
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/calendar">
              <CDBSidebarMenuItem
                icon="calendar-alt"
                active={getRoute() === 'calendar'}
              >
                Lịch biểu
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/shifts">
              <CDBSidebarMenuItem icon="tasks" active={getRoute() === 'shifts'}>
                Ca và nhiệm vụ
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/collecting-sites">
              <CDBSidebarMenuItem
                icon="map-marked-alt"
                active={getRoute() === 'collecting-sites'}
              >
                Điểm thu gom
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/staffs">
              <CDBSidebarMenuItem icon="users" active={getRoute() === 'staffs'}>
                Nhân viên
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/settings">
              <CDBSidebarMenuItem icon="cog" active={getRoute() === 'settings'}>
                Cài đặt
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          <a href="/logout" className="logout activeClicked">
            Đăng xuất
          </a>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
