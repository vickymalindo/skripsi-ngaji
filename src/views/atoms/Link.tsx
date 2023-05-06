// import React from 'react'

import { Link, useLocation } from 'react-router-dom';

interface Props {
  href: string | undefined;
  text: string | undefined;
}

const Links = ({ href, text }: Props) => {
  const { pathname } = useLocation();

  return (
    <li className='px-8 py-1 relative mb-6 last:mb-0'>
      <Link
        // TODO: benerin link active, dan masih ada bug jg di sidebarnya
        to={`${href}`}
        className={
          'inline-block w-full text-xl line-before-after ' +
          (pathname === href ? 'active' : '')
        }>
        {text}
      </Link>
    </li>
  );
};

export default Links;
