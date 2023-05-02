// import React from 'react'

import { useLocation } from 'react-router-dom';

interface Props {
  href: string | undefined;
  text: string | undefined;
}

const Link = ({ href, text }: Props) => {
  const { pathname } = useLocation();
  return (
    <li className='px-8 py-1 relative mb-6 last:mb-0'>
      <a
        // TODO: benerin link active, dan masih ada bug jg di sidebarnya
        href={href}
        className={
          'inline-block w-full text-xl line-before-after ' +
          (pathname.includes('murojaah') ? 'active' : '')
        }>
        {text}
      </a>
    </li>
  );
};

export default Link;
