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
      <div>
        <Logo>
          <Link to="/">Mindiv Admin</Link>
        </Logo>
        <NavLinks>
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={link.url}
              key={index}
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-text">{link.name}</span>
            </NavLink>
          ))}
        </NavLinks>
      </div>
      <div>
        <User />
      </div>
    </SidebarWrap>
  );
};

const User = () => {
  return (
    <UserWrap>
      <div className="user-avatar"></div>
      <p className="user-name">Jerry Nwosu</p>
      <p className="user-email">jerrynwosu007@gmail.com</p>
    </UserWrap>
  );
};

const SidebarWrap = styled.div`
  min-width: 280px;
  max-width: 280px;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const UserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .user-avatar {
    width: 80px;
    height: 80px;
    background-color: #eee;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .user-name {
    font-weight: 600;
  }

  .user-email {
    color: #888;
    font-size: 14px;
  }
`;

export default Sidebar;
