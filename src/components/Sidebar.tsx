import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  IoLibrary,
  IoStatsChart,
  IoSettings,
  IoLogOut,
  IoMoon,
} from 'react-icons/io5';
import { useAppDispatch } from '../app/hooks';
import { clearAuthTokenFromStorage } from '../features/authSlice';

const links = [
  { name: 'Dasboard', url: '/', icon: <IoStatsChart /> },
  { name: 'Resources', url: '/resources', icon: <IoLibrary /> },
  { name: 'Settings', url: '/settings', icon: <IoSettings /> },
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
  const dispatch = useAppDispatch();
  const handleTheme = () => {};
  const onLogout = () => {
    dispatch(clearAuthTokenFromStorage());
  };
  return (
    <UserWrap>
      <div className="user-avatar"></div>
      <p className="user-name">Jerry Nwosu</p>
      <p className="user-email">jerrynwosu007@gmail.com</p>
      <Actions>
        <button title="Toggle Theme" onClick={handleTheme}>
          <IoMoon />
        </button>
        <button title="Logout" onClick={onLogout}>
          <IoLogOut />
        </button>
      </Actions>
    </UserWrap>
  );
};

const SidebarWrap = styled.div`
  min-width: 250px;
  max-width: 250px;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #eee;
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
    font-weight: 600;

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
    width: 60px;
    height: 60px;
    background-color: #888;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .user-name {
    font-weight: 600;
  }

  .user-email {
    color: #555;
    font-size: 14px;
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;

  button {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background-color: #fff;
    border: 1px solid #eee;
    outline: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    cursor: pointer;
  }
`;

export default Sidebar;
