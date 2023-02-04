import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CInput } from '../components/misc/Input';
import * as yup from 'yup';
import { authenticateAdmin } from '../features/authSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toast } from 'react-toastify';
import { ButtonPrimary } from '../components/misc/ Button';

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);
  const notifySuccess = () => toast('Logged in');
  const notifyError = () => toast.error('Failed');

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

  useEffect(() => {
    if (status === 'failed') notifyError();
    if (status === 'succeeded') notifySuccess();
  }, [status]);

  return (
    <div className="dark:bg-gray-900  h-screen flex flex-col justify-center items-center">
      <h1 className="mb-2 font-bold text-5xl text-gray-900 dark:text-white">
        Admin Login
      </h1>
      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
        Welcome back! Please enter your details
      </p>
      <div className="w-full md:mt-0 sm:max-w-md bg-white dark:bg-gray-800 border shadow border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CInput name="email" label="Email" method={method} />
            <CInput
              name="password"
              label="Password"
              method={method}
              type="password"
            />
            <ButtonPrimary />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
