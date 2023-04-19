import { CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ route, icon, title, active, onClick, key }) => {
  return (
    <NavLink to={'/' + route} onClick={onClick}>
      <CDBSidebarMenuItem icon={icon} active={active}>
        {title}
      </CDBSidebarMenuItem>
    </NavLink>
  );
};

export default SidebarItem;
