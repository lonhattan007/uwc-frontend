import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from 'cdbreact';
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
  {
    route: 'settings',
    icon: 'cog',
    title: 'Cài đặt',
  },
];

const Sidebar = () => {
  const compareRoute = (route) => {
    return document.URL.split('/')[3] === route;
  };

  return (
    <>
      <CDBSidebar
        id="sidebar-container"
        className="sidebar"
        textColor="#fff"
        backgroundColor="#1e1e2e"
        breakpoint={960}
      >
        <CDBSidebarHeader
          className="sidebar-header"
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a href="/user-info" className="text-decoration-none">
            Back Officer #1
          </a>
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
          {/*<a href="/logout" className="logout activeClicked">
            Đăng xuất
          </a>*/}
          <SidebarItem
            route="logout"
            icon="sign-out-alt"
            title="Đăng xuất"
            active={false}
          />
        </CDBSidebarFooter>
      </CDBSidebar>
    </>
  );
};

export default Sidebar;
