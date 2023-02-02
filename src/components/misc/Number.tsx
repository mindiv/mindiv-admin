import React from 'react';

interface NumberProps {
  number: number;
}

const Number: React.FC<NumberProps> = ({ number }) => {
  return <span>{new Intl.NumberFormat().format(number)}</span>;
};

export default Number;
