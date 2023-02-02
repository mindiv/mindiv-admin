import React from 'react';
import styled from 'styled-components';

interface HeadingProps {
  title: string;
  tag: string;
}
const PageHeading = ({ title, tag }: HeadingProps) => {
  return (
    <PHWrap>
      <h1>{title}</h1>
      <p>{tag}</p>
    </PHWrap>
  );
};

const PHWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.text};
`;

export default PageHeading;
