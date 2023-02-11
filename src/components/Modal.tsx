import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  close: Function;
  title: string;
}

const Modal = ({ children, close, title }: ModalProps) => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Modal;
