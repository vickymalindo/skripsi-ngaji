import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface Props<T> {
  parent?: string;
  onClick?: React.MouseEventHandler;
  isOpen?: boolean;
  passKelas?: (e: string) => void;
  data?: T[];
}

export const DropdownSidebar = <T extends {}>({ parent }: Props<T>) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={
        'bg-dropdwon-cream rounded-[27.34px] pt-[25.65px] px-7 cursor-pointer' +
        (open ? ' pb-[39.3px]' : ' pb-[25.65px]')
      }
      onClick={handleOpen}>
      <div className='flex justify-between items-center'>
        <h3 className='capitalize text-lg font-bold gradient-green'>
          {parent}
        </h3>
        {open ? (
          <AiFillCaretDown className='text-dark-green text-lg' />
        ) : (
          <AiFillCaretUp className='text-dark-green text-lg' />
        )}
      </div>
      {open && (
        <div className='pl-[10px] mt-[11px]'>
          <a href='/' className='block py-0.5 hover:text-dark-green'>
            Guru
          </a>
          <a href='admin' className='block py-0.5 hover:text-dark-green'>
            Admin
          </a>
          <a href='user' className='block py-0.5 hover:text-dark-green'>
            User
          </a>
        </div>
      )}
    </div>
  );
};

export const DropdownInput = <T extends string>({
  data,
  isOpen,
  passKelas,
}: Props<T>) => {
  return (
    <div
      className={
        'bg-dark-green text-white p-3 absolute top-[45px] w-full' +
        (isOpen && ' rounded-bl-br')
      }>
      {data?.map((value, index) => {
        return (
          <button
            key={index}
            className='block m-auto p-1 w-full'
            onClick={() => passKelas?.(value)}>
            {value}
          </button>
        );
      })}
    </div>
  );
};
