// import React from 'react'
import {
  default as Website,
  default as Whatsapp,
} from './../../assets/images/website.png';

interface Props {
  height: string;
}

const Sosmed = ({ height }: Props) => {
  return (
    <div className={'flex items-end justify-center gap-6 pb-7 ' + height}>
      <a href='#' className='inline-block'>
        <img src={Website} alt='Website' />
      </a>
      <a href='#' className='inline-block'>
        <img src={Whatsapp} alt='Whatsapp' />
      </a>
    </div>
  );
};

export default Sosmed;
