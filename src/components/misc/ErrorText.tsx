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
`;

export default ErrorText;
