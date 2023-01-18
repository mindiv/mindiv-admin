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

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #333;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #888;
    outline: none;
    padding: 0 10px;
  }
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
