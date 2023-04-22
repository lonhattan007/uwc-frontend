import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu } from 'cdbreact';
import SidebarItem from './SidebarItem';

import './Sidebar.scss';

const SIDEBAR_ITEMS = [
  {
    route: 'calendar',
    icon: 'calendar-alt',
    title: 'Lịch biểu',
  },
  {
    route: 'shifts',
    icon: 'tasks',
    title: 'Ca và nhiệm vụ',
  },
  {
    route: 'collecting-sites',
    icon: 'map-marked-alt',
    title: 'Điểm thu gom',
  },
  {
    route: 'staffs',
    icon: 'users',
    title: 'Nhân viên',
  },
];

const Sidebar = () => {
  const toggleBreakpoint = 960;

  const compareRoute = (route) => {
    return document.URL.split('/')[3] === route;
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.setItem('userLoggedIn', 'false');
    window.location.assign('logout');
  };

  return (
    <>
      <CDBSidebar
        id="sidebar-container"
        className="sidebar"
        textColor="#fff"
        toggled={window.innerWidth <= toggleBreakpoint}
        breakpoint={toggleBreakpoint}
      >
        <CDBSidebarHeader className="sidebar-header" prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none">Back Officer #1</a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {SIDEBAR_ITEMS.map((item) => (
              <SidebarItem
                route={item.route}
                icon={item.icon}
                title={item.title}
                active={compareRoute(item.route)}
                key={item.route + 'option'}
              />
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter className="sidebar-footer">
          <SidebarItem icon="sign-out-alt" title="Đăng xuất" active={false} onClick={handleLogOut} />
        </CDBSidebarFooter>
      </CDBSidebar>
    </>
  );
};

export default Sidebar;
