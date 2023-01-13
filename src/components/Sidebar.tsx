import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const links = [
  { name: 'Dasboard', url: '/' },
  { name: 'Settings', url: '/settings' },
];

const Sidebar = () => {
  return (
    <SidebarWrap>
      <Logo>
        <Link to="/">
          <h2>Mindiv Admin</h2>
        </Link>
      </Logo>
      <NavLinks>
        {links.map((link, index) => (
          <NavLink to={link.url}>
            <div key={index}>{link.name}</div>
          </NavLink>
        ))}
      </NavLinks>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  min-width: 300px;
  background-color: #eee;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  margin-bottom: 50px;
`;

export default Sidebar;
