import React from 'react';
import { InputWrap } from '../../styles/GlobalStyle';
import ErrorText from './ErrorText';

interface CProps {
  method: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  rest?: any;
}

// Custom input
export const CInput = ({
  method,
  name,
  label,
  type = 'text',
  ...rest
}: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <div className="mb-6 flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        {...rest}
        {...register(`${name}`)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors[name]?.message && (
        <ErrorText text={errors[name]?.message || ''} />
      )}
    </div>
  );
};

export const CTextarea = ({ method, name, label }: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <div className="mb-6 flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        {...register(`${name}`)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ErrorText text={errors[name]?.message} />
    </div>
  );
};

// Custom select
export const CSelect = ({ method, name, label }: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <InputWrap>
      <label>{label}</label>
      <ErrorText text={errors[name]?.message} />
    </InputWrap>
  );
};
