// import React from 'react'
import { BsEye } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';

interface Props {
  type?: string;
  label: string;
  password?: boolean;
}

export const InputDefault = ({ label, password }: Props) => {
  return (
    <div className='px-4 py-3 h-[45px] border border-dark-green rounded-[10px] text-dark-green w-[360px] flex justify-between items-center'>
      <input
        type='text'
        className={
          'outline-none border-none placeholder-dark-green' +
          (password ? ' w-[92%]' : ' w-full')
        }
        placeholder={label}
      />
      {password && <BsEye className='cursor-pointer' />}
    </div>
  );
};

export const InputFloating = ({ type, label }: Props) => {
  return (
    <div className='relative mt-2 w-max'>
      <input
        type={type}
        className='w-[360px] px-4 py-3 h-[45px] outline-none border-dark-green border rounded-[10px] text-dark-green'
      />
      <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
        <span>{label}</span>
      </span>
    </div>
  );
};

export const InputDropdown = ({ label }: Props) => {
  return (
    <div className='relative cursor-pointer mt-2 w-max'>
      <div className='w-[360px] px-4 py-3 h-[45px] border-dark-green border rounded-[10px] text-dark-green'></div>
      <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
        <span>{label}</span>
        <FaCaretDown />
      </span>
    </div>
  );
};
