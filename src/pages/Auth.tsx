import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CInput } from '../components/misc/Input';
import * as yup from 'yup';
import { Button } from '../styles/GlobalStyle';
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
      <Pane1>
        <p>Pane 1</p>
      </Pane1>
      <Pane2>
        <BoxShadow shadowStyle="shadow4_1">
          <LoginCard>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CInput name="email" label="Admin Email" method={method} />
              <CInput name="password" label="Password" method={method} />

              <Button>Login</Button>
            </form>
          </LoginCard>
        </BoxShadow>
      </Pane2>
    </AuthWrap>
  );
};

const AuthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;
const Pane1 = styled.div`
  background-color: deepskyblue;
  width: 50%;
`;
const Pane2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  border-radius: 5px;
  padding: 30px;
  width: 350px;
  border: 1px solid #eee;
`;
export default Auth;
