import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Container } from '../styles/GlobalStyle';

const Dasboard = () => {
  const location = useLocation();

  const renderPageName = () => {
    console.log(location);
    switch (location.pathname.toLowerCase()) {
      case '/':
        return 'Dashboard';
      case '/settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <Wrap>
      <Sidebar />
      <Main>
        <Header pageName={renderPageName()} />
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export default Dasboard;
