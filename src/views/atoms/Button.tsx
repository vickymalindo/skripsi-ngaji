import React from 'react';

interface Props {
  children: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className='outline-none bg-dark-green py-[10px] px-[30px] text-[20px] text-white rounded-[10px]'
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
