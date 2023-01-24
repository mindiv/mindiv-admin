import React from 'react';
import styled from 'styled-components';

interface ErrorTextProps {
  text: string;
}
const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <ErrorTextWrap>
      <span>{text}</span>
    </ErrorTextWrap>
  );
};

const ErrorTextWrap = styled.div`
  display: flex;
  font-size: 12px;
  color: #ff0000;
  padding: 3px;
`;

export default ErrorText;
