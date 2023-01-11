import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarWrap>
      <div>Sidebar</div>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div`
  width: 300px;
  background-color: #eee;
`;

export default Sidebar;
