// import React from 'react'
import { FaBars } from 'react-icons/fa';
import { hamburgerClicked } from '../../redux/features/toggleSlice';
import { useAppDispatch } from '../../redux/store';
import { CardProfile } from '../atoms/Cards';

interface Props {
  username: string;
}

const Appbar = ({ username }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className='flex justify-between items-center'>
      <FaBars
        className='text-xl md:text-2xl ml-8 cursor-pointer opacity-100 lg:opacity-0 transition-all duration-300 ease-in-out'
        onClick={() => dispatch(hamburgerClicked())}
      />
      <CardProfile username={username} isDelete={false} />
    </div>
  );
};

export default Appbar;
