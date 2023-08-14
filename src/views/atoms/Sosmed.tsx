// import React from 'react'
import Whatsapp from './../../assets/images/whatsapp.png';

const Sosmed = () => {
  return (
    <a
      href='#'
      target='_blank'
      className={
        'flex items-center justify-center gap-[10px] bg-white p-[5px] w-[220px] rounded-[30px] mt-24 mb-[30px] m-auto shadow-md'
      }>
      <span className='inline-block text-dark-green text-base font-bold'>
        Tanya Admin
      </span>
      <img src={Whatsapp} alt='Whatsapp' />
    </a>
  );
};

export default Sosmed;
