// import React from 'react'
import { FaBars } from 'react-icons/fa';
import { CardProfile } from '../atoms/Cards';

interface Props {
  username: string;
}

const Appbar = ({ username }: Props) => {
  return (
    <div className='flex justify-between items-center'>
      <FaBars className='text-2xl ml-8 cursor-pointer' />
      <CardProfile username={username} />
    </div>
  );
};

export default Appbar;
