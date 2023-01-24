import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CInput } from '../components/misc/Input';
import * as yup from 'yup';
import { Button, InputGroup } from '../styles/GlobalStyle';
import { BoxShadow } from 'react-shadow-component';
import { authenticateAdmin } from '../features/authSlice';
import { useAppDispatch } from '../app/hooks';

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const method = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = method;

  const onSubmit = (data: any) => {
    dispatch(authenticateAdmin(data));
  };

  return (
    <AuthWrap>
      <Backdrop />
      <Hello>
        <h1>Admin Login</h1>
        <p>Welcome back! Please enter your details</p>
      </Hello>
      <BoxShadow shadowStyle="shadow4_1">
        <LoginCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <CInput name="email" label="Email" method={method} />
              <CInput name="password" label="Password" method={method} />
            </InputGroup>
            <ButtonWrap>
              <Button>Login</Button>
            </ButtonWrap>
          </form>
        </LoginCard>
      </BoxShadow>
    </AuthWrap>
  );
};

const AuthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Backdrop = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 50vh;
  background-color: #eee;
  top: 0;
  left: 0;
`;
const LoginCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  width: 350px;
  border: 1px solid #eee;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;

  button {
    width: 100%;
  }
`;

const Hello = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;

  h1 {
    font-size: 50px;
  }
`;
export default Auth;
