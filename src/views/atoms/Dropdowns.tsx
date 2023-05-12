import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { SidebarChild } from '../../utils/SidebarProps';

interface Props<T> {
  parent?: string;
  onClick?: React.MouseEventHandler;
  isOpen?: boolean;
  passKelas?: (e: string) => void;
  data?: T[];
}

export const DropdownSidebar = <T extends SidebarChild>({
  parent,
  data,
}: Props<T>) => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={
        'bg-dropdwon-cream mb-[29px] rounded-[27.34px] pt-[25.65px] px-7 cursor-pointer last:mb-0' +
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
        <ul className='pl-[10px] mt-[11px] list-none'>
          {data?.map((val, index) => {
            return (
              <li className='mb-3' key={index}>
                <Link
                  className={
                    'inline-block w-full hover:text-dark-green' +
                    (pathname === val.href ? ' text-dark-green' : '')
                  }
                  to={val.href}>
                  {val.text}
                </Link>
              </li>
            );
          })}
        </ul>
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
        'bg-dark-green text-white p-3 absolute z-10 top-[45px] w-full' +
        (isOpen && ' rounded-bl-br')
      }>
      {data?.map((value, index) => {
        return (
          <button
            key={index}
            className='block m-auto p-1 w-full hover:bg-green-400'
            onClick={() => passKelas?.(value)}>
            {value}
          </button>
        );
      })}
    </div>
  );
};
