import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="Navbar col-4">
      <Nav vertical>
        <NavItem className='NavItem'>
          <NavLink href="/info">Thông tin cá nhân</NavLink>
        </NavItem>
        <NavItem className='NavItem'>
          <NavLink href="/dashboard">Lịch biểu</NavLink>
        </NavItem>
        <NavItem className='NavItem'>
          <NavLink href="/tasks">Ca và nhiệm vụ</NavLink>
        </NavItem>
        <NavItem className='NavItem'>
          <NavLink href="/collecting-points">Điểm thu gom</NavLink>
        </NavItem>
        <NavItem className='NavItem'>
          <NavLink href="/staffs">Nhân viên</NavLink>
        </NavItem>
        <NavItem className='NavItem'>
          <NavLink href="/settings">Cài đặt</NavLink>
        </NavItem>
        <NavItem className='NavItem'>
          <NavLink href="/logout">Đăng xuất</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default App;
