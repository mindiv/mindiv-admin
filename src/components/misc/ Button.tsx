import React from 'react';

interface ButtonProps {
  children: any;
  style?: any;
  type?: 'button' | 'submit' | 'reset';
  click?: (evebt: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

// style is currently for width (w-full)
// but any style(s) can bed passed as well

export const ButtonPrimary = ({
  children,
  style,
  type = 'button',
  click,
  disabled,
}: ButtonProps) => {
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

export const ButtonDanger = ({
  children,
  style,
  type = 'button',
  click,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      type={type}
      className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto ${style} px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 disabled:opacity-70`}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({
  children,
  style,
  type = 'button',
  click,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={click}
      type={type}
      disabled={disabled}
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
      className={`text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5`}
    >
      {children}
    </button>
  );
};
