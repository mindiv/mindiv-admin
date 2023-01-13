import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Sofia Sans', sans-serif;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
  cursor: pointer;
`;
