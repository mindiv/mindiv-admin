import styled from 'styled-components';
import { Button, Container } from '../styles/GlobalStyle';

interface HeaderProps {
  pageName: string;
}

const Header = ({ pageName }: HeaderProps) => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <h2>{pageName}</h2>
          <Button>Add New</Button>
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
};

const AddActions = () => {
  const actions = [
    { name: 'Category' },
    { name: 'Collection' },
    { name: 'Question' },
  ];
  const handleAction = (action: string) => {
    console.log(action);
  };
  return (
    <div>
      {actions.map((action, index) => (
        <button key={index} onClick={() => handleAction(action.name)}>
          Create {action.name}
        </button>
      ))}
    </div>
  );
};

const HeaderWrap = styled.div`
  margin-bottom: 30px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Header;
