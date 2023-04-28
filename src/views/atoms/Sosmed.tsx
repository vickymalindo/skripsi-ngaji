// import React from 'react'
import Website from './../../assets/images/website.png';
import Whatsapp from './../../assets/images/whatsapp.png';

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
