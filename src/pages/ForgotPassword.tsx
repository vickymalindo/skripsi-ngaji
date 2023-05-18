// import React from 'react'

import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from '../views/atoms/Button';
import { InputDefault } from '../views/atoms/Inputs';
import Logo from './../assets/images/Logo.png';

const ForgotPassword = () => {
  return (
    <div className='lg:flex lg:justify-center'>
      <Link to='/login' className='absolute top-4 left-4'>
        <IoMdArrowBack className='text-3xl inline-block' />
      </Link>
      <div className='h-screen w-full flex justify-center items-center lg:w-2/3 transition-all duration-300 ease-in-out'>
        <div>
          <InputDefault label='Nama Pengguna' classname='mb-[47.05px]' />
          <InputDefault
            label='Kata Sandi Baru'
            password={true}
            classname='mb-[47.05px]'
          />
          <InputDefault
            label='Konfirmasi Kata Sandi'
            password={true}
            classname='mb-[47.05px]'
          />
          <Button children='Simpan' trash={false} />
        </div>
      </div>
      <div className='bg-gradient-green-no-rounded h-screen w-0 opacity-0 transition-all duration-300 ease-in-out lg:w-1/3 lg:opacity-100 flex justify-center items-center'>
        <img src={Logo} alt='Logo' className='w-[258px] h-[290px]' />
      </div>
    </div>
  );
};

export default ForgotPassword;
