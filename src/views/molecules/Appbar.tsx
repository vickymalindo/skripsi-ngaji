import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { hamburgerClicked } from '../../redux/features/toggleSlice';
import { useAppDispatch } from '../../redux/store';
import { CardProfile } from '../atoms/Cards';

interface Props {
  username: string;
}

const Appbar = ({ username }: Props) => {
  const [logout, setLogout] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const dispatch = useAppDispatch();
  return (
    <div className='flex justify-between items-center'>
      <FaBars
        className='text-xl md:text-2xl ml-8 cursor-pointer opacity-100 lg:opacity-0 transition-all duration-300 ease-in-out'
        onClick={() => dispatch(hamburgerClicked())}
      />
      <div className='relative'>
        <CardProfile
          username={username}
          isDelete={false}
          onClick={() => setLogout((prev) => !prev)}
          isOpen={logout}
        />
        {logout ? (
          <div
            className={
              'absolute z-40 sm:top-[49.98px] md:top-[67.97px] lg:top-[79.98px] px-3 py-1.5 bg-red-400 text-red-700 w-full card-shadow text-center cursor-pointer' +
              (logout ? ' rounded-bl-[8px]' : '')
            }
            onClick={handleLogout}>
            <button className='inline-block text-sm sm:text-base font-bold rounded'>
              LogOut
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Appbar;
