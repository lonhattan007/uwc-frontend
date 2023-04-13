import React from 'react';
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
  return (
    <div id="sidebar-container">
      <CDBSidebar
        className="sidebar"
        textColor="#fff"
        backgroundColor="#1e1e2e"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/user-info"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Thông tin cá nhân
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/calendar" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar-alt">
                Lịch biểu
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/shifts" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks">
                Ca và nhiệm vụ
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/collecting-sites"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="map-marked-alt">
                Điểm thu gom
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/staffs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Nhân viên</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cog">Cài đặt</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          <a href="/logout" className="logOut">
            Đăng xuất
          </a>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
