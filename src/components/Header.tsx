import { MouseEventHandler, useState } from 'react';
import styled, { IntrinsicElementsKeys } from 'styled-components';
import { Button, Container } from '../styles/GlobalStyle';

interface HeaderProps {
  pageName: string;
}

const Header = ({ pageName }: HeaderProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <HeaderWrap>
      <Container>
        <HeaderInner>
          <Heading>
            <h2>{pageName}</h2>
          </Heading>
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
    { name: 'Category' },
    { name: 'Collection' },
    { name: 'Question' },
    { name: 'User' },
  ];
  const handleAction = (action: string) => {
    console.log(action);
    close();
  };

  return (
    <>
      <Overlay onClick={() => close()} />
      <AddList>
        {actions.map((action, index) => (
          <p key={index} onClick={() => handleAction(action.name)}>
            New {action.name}
          </p>
        ))}
      </AddList>
    </>
  );
};

const HeaderWrap = styled.div`
  margin-bottom: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  /* background-color: #fff;
  border-bottom: 1px solid #eee; */
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
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 5px;
  padding: 5px 0;
  min-width: 200px;
  border: 1px solid #eee;

  p {
    padding: 8px 20px;
    cursor: pointer;
    font-size: 14px;
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
