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
						<NavLink to="/calendar" className="activeClicked">
							<CDBSidebarMenuItem icon="calendar-alt">
								Lịch biểu
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink to="/shifts" className="active">
							<CDBSidebarMenuItem icon="tasks">
								Ca và nhiệm vụ
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink to="/collecting-sites" className="pending">
							<CDBSidebarMenuItem icon="map-marked-alt">
								Điểm thu gom
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink to="/staffs" className="pending">
							<CDBSidebarMenuItem icon="users">Nhân viên</CDBSidebarMenuItem>
						</NavLink>
						<NavLink to="/settings" className="pending">
							<CDBSidebarMenuItem icon="cog">Cài đặt</CDBSidebarMenuItem>
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
