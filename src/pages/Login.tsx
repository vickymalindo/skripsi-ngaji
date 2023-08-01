import axios from 'axios';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { encrypt } from '../fetch/storage/Gets';
import Button from '../views/atoms/Button';
import { InputDefault } from '../views/atoms/Inputs';
import Loader from '../views/atoms/Loader';
import Logo from './../assets/images/Logo.png';

const Login = () => {
  const [username, setUsername] = React.useState<string | undefined>('');
  const [password, setPassword] = React.useState<string | undefined>('');
  const [isError, setIsError] = React.useState<string | undefined>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading((prev) => !prev);
    setTimeout(async () => {
      try {
        const login = await axios.post(
          import.meta.env.VITE_BASE_URL + 'auth/login',
          {
            username,
            password,
          }
        );

        const { access_token } = login.data;
        localStorage.setItem('token', encrypt(access_token));
        const user = await axios({
          method: 'POST',
          url: import.meta.env.VITE_BASE_URL + 'auth/me',
          headers: { Authorization: `Bearer${access_token}` },
        });

        localStorage.setItem('data', encrypt(user.data));

        const { level } = user.data;
        setIsLoading((prev) => !prev);
        if (level === 'admin') {
          navigate('/admin/list/teacher');
        } else if (level === 'guru') {
          navigate('/teacher/students');
        } else {
          navigate('/parent/rote');
        }
      } catch (error) {
        setIsError('Password / username salah');
        setIsLoading((prev) => !prev);
      }
    }, 80000);
  };

  return (
    <>
      <div className='lg:flex lg:justify-center'>
        <Link to='/' className='absolute top-4 left-4'>
          <IoMdArrowBack className='text-3xl inline-block' />
        </Link>
        <div className='h-screen w-full flex justify-center items-center lg:w-2/3 transition-all duration-300 ease-in-out'>
          <div>
            {isError && (
              <div className='px-4 py-3 rounded-lg text-red-800 bg-red-400 text-base sm:text-lg xl:text-xl font-bold mb-4'>
                <p>{isError}</p>
              </div>
            )}
            <div>
              <InputDefault
                label='Username'
                classname='mb-[47.05px]'
                onChange={(e) => setUsername(e.target.value)}
              />
              <InputDefault
                label='Password'
                password={true}
                classname='mb-1'
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='text-sm sm:text-base lg:text-xl text-dark-green mb-[45px] inline-block'>
                Lupa kata sandi?
                <Link to='/forgot' className='underline'>
                  Klik di sini
                </Link>
              </span>
              <Button children='Masuk' trash={false} onClick={handleLogin} />
            </div>
          </div>
        </div>
        <div className='bg-gradient-green-no-rounded h-screen w-0 opacity-0 transition-all duration-300 ease-in-out lg:w-1/3 lg:opacity-100 flex justify-center items-center'>
          <img src={Logo} alt='Logo' className='w-[258px] h-[290px]' />
        </div>
      </div>
      {isLoading && <Loader isWhite={false} />}
    </>
  );
};

export default Login;
