// import React from 'react'
import { FaBars } from 'react-icons/fa';
import { CardProfile } from '../atoms/Cards';

const Appbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <FaBars className='text-2xl ml-8 cursor-pointer' />
      <CardProfile username='vickymalindo' />
    </div>
  );
};

export default Appbar;
