import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  IoLibraryOutline,
  IoStatsChartOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const links = [
  { name: 'Dasboard', url: '/', icon: <IoStatsChartOutline /> },
  { name: 'Resources', url: '/resources', icon: <IoLibraryOutline /> },
  { name: 'Settings', url: '/settings', icon: <IoSettingsOutline /> },
];

const Sidebar = () => {
  return (
    <SidebarWrap>
      <Logo>
        <Link to="/">Mindiv Admin</Link>
      </Logo>
      <NavLinks>
        {links.map((link, index) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={link.url}
          >
            <span className="link-icon">{link.icon}</span>
            <span className="link-text" key={index}>
              {link.name}
            </span>
          </NavLink>
        ))}
      </NavLinks>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  min-width: 280px;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    padding: 12px 15px;
    border-radius: 6px;
    text-decoration: none;
    color: #222;
    display: flex;
    align-items: center;
    align-items: center;
    font-size: 14px;

    span {
      display: flex;
      align-items: center;
    }

    span.link-icon {
      margin-right: 10px;
      font-size: 20px;
    }
  }
  .active {
    background-color: #222;
    color: #ccc;
  }
`;

const Logo = styled.div`
  margin-bottom: 50px;
  a {
    margin-bottom: 50px;
    text-decoration: none;
    color: #222;
    font-size: 30px;
    font-weight: 900;
  }
`;

export default Sidebar;
