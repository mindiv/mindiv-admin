import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrap>
      <Sidebar />
      <Main>{children}</Main>
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Main = styled.div`
  width: 100%;
  padding: 20px;
`;

export default Layout;
