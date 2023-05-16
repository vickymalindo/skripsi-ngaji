import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Button from '../../views/atoms/Button';
import { CardProfile } from '../../views/atoms/Cards';
import { DropdownInput } from '../../views/atoms/Dropdowns';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

// TODO: buat responsivenya
const Class = () => {
  const [kelas, setKelas] = React.useState('4IA22');
  const [open, setOpen] = React.useState(false);

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username='admin' />
      <div className='flex justify-evenly'>
        <div className='box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] w-2/3'>
          <div className='mb-40'>
            <TitlePage page='Daftar Guru 4IA22' />
            <CardProfile
              isDelete={true}
              name='Swelandiah'
              birthdate='Jakarta, 17/2/01'
            />
          </div>
          <div>
            <TitlePage page='Daftar Murid 4IA22' />
            <div className='flex flex-wrap items-center gap-3'>
              <CardProfile
                isDelete={true}
                name='Vicky Malindo'
                birthdate='Jakarta, 17/2/01'
              />
              <CardProfile
                isDelete={true}
                name='Vicky Malindo'
                birthdate='Jakarta, 17/2/01'
              />
              <CardProfile
                isDelete={true}
                name='Vicky Malindo'
                birthdate='Jakarta, 17/2/01'
              />
              <CardProfile
                isDelete={true}
                name='Vicky Malindo'
                birthdate='Jakarta, 17/2/01'
              />
            </div>
          </div>
        </div>
        <div className='w-1/4 mt-20'>
          <div
            className={
              'bg-dropdown-cream rounded-[10px] relative h-max cursor-pointer ' +
              (open ? ' rounded-tl-tr' : ' rounded-[10px]')
            }>
            <div
              className='py-[10px] px-[13px] flex justify-between items-center text-dark-green'
              onClick={() => setOpen((prev) => !prev)}>
              <span className='font-bold text-lg'>{kelas}</span>
              <FaCaretDown className='font-bold text-lg' />
            </div>
            {open && (
              <DropdownInput
                data={['4IA22', '4IA19', '4IA20', '4IA18']}
                isCream={true}
                passKelas={setKelas}
              />
            )}
          </div>
          <div className='w-full flex justify-center'>
            <Button
              children='Buat Kelas'
              className='mt-[27px] m-auto'
              trash={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;