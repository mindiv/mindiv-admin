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

export const InputGroup = styled.div`
  margin-bottom: 30px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    color: #333;
    font-size: 16px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    padding: 10px;
  }

  textarea {
    height: 80px;
    max-height: 200px;
    resize: vertical;
  }
`;

export const Heading1 = styled.h1``;

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

export const PageWrap = styled.div`
  width: 100%;
  max-width: 600px;
`;
