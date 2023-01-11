import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Layout from '../components/Layout';

const Dasboard = () => {
  return (
    <Layout>
      <Wrap>
        <Header />
        <Outlet />
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  border: 1px solid red;
`;

export default Dasboard;
