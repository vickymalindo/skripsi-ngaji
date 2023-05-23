import axios from 'axios';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Button from '../views/atoms/Button';
import { InputDefault } from '../views/atoms/Inputs';
import Loader from '../views/atoms/Loader';
import Logo from './../assets/images/Logo.png';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState<string | undefined>('');
  const [newPassword, setNewPassword] = React.useState<string | undefined>('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState<
    string | undefined
  >('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined>('');

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setMessage('Password / konfirmasi password tidak sesuai');
      setIsError((prev) => (prev === false ? prev : !prev));
      return;
    }

    setIsLoading((prev) => !prev);
    const changePassword = await axios.post(
      `${import.meta.env.VITE_BASE_URL}auth/forgot/${email}`,
      {
        email,
        newPassword,
      }
    );
    if (changePassword.data.status === 200) {
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Selamat, password berhasil di ubah');
      setIsLoading((prev) => !prev);
    } else {
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Email tidak ditemukan');
      setIsLoading((prev) => !prev);
    }
  };

  return (
    <>
      <div className='lg:flex lg:justify-center'>
        <Link to='/login' className='absolute top-4 left-4'>
          <IoMdArrowBack className='text-3xl inline-block' />
        </Link>
        <div className='h-screen w-full flex justify-center items-center lg:w-2/3 transition-all duration-300 ease-in-out'>
          <div>
            {message && (
              <div
                className={
                  'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
                  (isError
                    ? ' text-green-800 bg-green-400'
                    : ' text-red-800 bg-red-400')
                }>
                <p>{message}</p>
              </div>
            )}
            <div>
              <InputDefault
                label='Email'
                classname='mb-[47.05px]'
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputDefault
                label='Kata Sandi Baru'
                password={true}
                classname='mb-[47.05px]'
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <InputDefault
                label='Konfirmasi Kata Sandi'
                password={true}
                classname='mb-[47.05px]'
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <Button
                children='Simpan'
                trash={false}
                onClick={handleChangePassword}
              />
            </div>
          </div>
        </div>
        <div className='bg-gradient-green-no-rounded h-screen w-0 opacity-0 transition-all duration-300 ease-in-out lg:w-1/3 lg:opacity-100 flex justify-center items-center'>
          <img src={Logo} alt='Logo' className='w-[258px] h-[290px]' />
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default ForgotPassword;
