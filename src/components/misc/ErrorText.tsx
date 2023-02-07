import React from 'react';

interface ErrorTextProps {
  text: string | any;
}
const ErrorText = ({ text }: ErrorTextProps) => {
  return (
    <div className="text-red-400 ml-3 text-sm">
      <span>{text}</span>
    </div>
  );
};

export default ErrorText;
