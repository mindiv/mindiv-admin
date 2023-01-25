import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoxShadow } from 'react-shadow-component';
import styled from 'styled-components';
import { Button, Container } from '../styles/GlobalStyle';
import Search from './Search';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <Search />
          <Button onClick={toggleVisibility}>Add New</Button>
          {visible && <AddItems close={() => setVisible(false)} />}
        </HeaderInner>
      </Container>
    </HeaderWrap>
  );
};

interface AddItemsProps {
  close: Function;
}

const AddItems = ({ close }: AddItemsProps) => {
  const actions = [
    { name: 'Category', url: '/new/category' },
    { name: 'Collection', url: '/new/collection' },
    { name: 'Question', url: '/new/question' },
    { name: 'User', url: '/new/user' },
  ];
  const handleAction = (action: string) => {
    close();
  };

  return (
    <>
      <Overlay onClick={() => close()} />
      <BoxShadow shadowStyle="shadow4_1">
        <AddList>
          {actions.map((action, index) => (
            <Link
              to={action.url}
              key={index}
              onClick={() => handleAction(action.name)}
            >
              New {action.name}
            </Link>
          ))}
        </AddList>
      </BoxShadow>
    </>
  );
};

const HeaderWrap = styled.div`
  margin-bottom: 30px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 25px;
`;

const AddList = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  top: 50px;
  background-color: ${(props) => props.theme.colors.background};
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px; */
  border-radius: 5px;
  padding: 5px 0;
  min-width: 200px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  display: flex;
  flex-direction: column;

  a {
    padding: 8px 20px;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
    :hover {
      background-color: #222;
      color: #fff;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 99;
  left: 0;
  top: 0;
`;

export default Header;
