import React from 'react';

interface Props {
  children: string;
  onClick?: React.MouseEventHandler;
  className?: string;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={
        'outline-none bg-dark-green py-[10px] px-[30px] sm:text-[20px] text-white rounded-[10px] text-sm' +
        (className ? ` ${className}` : '')
      }
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
