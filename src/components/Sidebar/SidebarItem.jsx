import { CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ route, icon, title, active, key }) => {
  return (
    <NavLink to={'/' + route}>
      <CDBSidebarMenuItem icon={icon} active={active}>
        {title}
      </CDBSidebarMenuItem>
    </NavLink>
  );
};

export default SidebarItem;
