import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  children: JSX.Element;
  close: Function;
  title: string;
}

const Modal = ({ children, close, title }: ModalProps) => {
  return (
    <ModalWrap>
      <Overlay onClick={() => close()} />
      <MainModal>
        <ModalHead>
          <h3>{title || 'Modal Title'}</h3>
        </ModalHead>
        <ModalContent>{children}</ModalContent>
      </MainModal>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  padding: 0 20px;
`;
const MainModal = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  min-width: 400px;
  max-width: 500px;
  width: 100%;
`;

const ModalHead = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
`;
const ModalContent = styled.div`
  padding: 30px;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;
