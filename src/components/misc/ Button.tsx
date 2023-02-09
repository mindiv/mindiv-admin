import React from 'react';

interface ButtonPrimaryProps {
  children: any;
  style?: any;
  type?: 'button' | 'submit' | 'reset';
  click?: (evebt: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const ButtonPrimary = ({
  children,
  style,
  type = 'button',
  click,
  disabled,
}: ButtonPrimaryProps) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      type={type}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto ${style} px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-70`}
    >
      {children}
    </button>
  );
};

export const SquareBtn = ({ children, click, title }: any) => {
  return (
    <button
      title={title}
      id="theme-toggle"
      onClick={() => click()}
      type="button"
      className={`text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5`}
    >
      {children}
    </button>
  );
};
