import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Container } from '../styles/GlobalStyle';

const Dasboard = () => {
  return (
    <Wrap>
      <Sidebar />
      <Main>
        <Header />
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
  background-color: ${(props) => props.theme.colors.background};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export default Dasboard;
