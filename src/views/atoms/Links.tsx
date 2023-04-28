// import React from 'react'

interface Props {
  href: string | undefined;
  text: string | undefined;
}

const Links = ({ href, text }: Props) => {
  return (
    <li className='px-8 py-1 relative mb-6 last:mb-0'>
      <a href={href} className='inline-block w-full text-xl line-before-after'>
        {text}
      </a>
    </li>
  );
};

export default Links;
