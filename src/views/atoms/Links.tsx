// import React from 'react'

import { Link, useLocation } from 'react-router-dom';

interface Props {
  href: string | undefined;
  text: string | undefined;
  isSidebar: boolean;
  className?: string;
}

const Links = ({ href, text, isSidebar, className }: Props) => {
  const { pathname } = useLocation();

  return (
    <>
      {isSidebar ? (
        <li className='px-8 py-2 relative mb-6 last:mb-0 list-none'>
          <Link
            to={`${href}`}
            className={
              'inline-block w-full text-xl line-before-after ' +
              (pathname === href ? 'active' : '')
            }>
            {text}
          </Link>
        </li>
      ) : (
        <Link
          className={
            'outline-none bg-dark-green py-[10px] px-[30px] sm:text-[20px] text-white rounded-[10px] text-sm' +
            (className ? ` ${className}` : '')
          }
          to={`${href}`}>
          {text}
        </Link>
      )}
    </>
  );
};

export default Links;
