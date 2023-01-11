import React from 'react';
import styled from 'styled-components';

const Modal = ({ children, close }: any) => {
  return (
    <ModalWrap>
      <Overlay onClick={close} />
      <MainModal>{children}</MainModal>
    </ModalWrap>
  );
};

const ModalWrap = styled.div``;
const MainModal = styled.div``;
const Overlay = styled.div``;

export default Modal;
