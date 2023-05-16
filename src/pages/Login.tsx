import { Link } from 'react-router-dom';
import Button from '../views/atoms/Button';
import { InputDefault } from '../views/atoms/Inputs';
import Logo from './../assets/images/Logo.png';

const Login = () => {
  return (
    <div className='lg:flex lg:justify-center'>
      <div className='h-screen w-full flex justify-center items-center lg:w-2/3 transition-all duration-300 ease-in-out'>
        <div>
          <InputDefault label='Username' classname='mb-[47.05px]' />
          <InputDefault label='Password' password={true} />
          <span className='text-sm sm:text-base lg:text-xl text-dark-green mb-[45px] inline-block'>
            Lupa kata sandi?{' '}
            <Link to={'/'} className='underline'>
              Klik di sini
            </Link>
          </span>
          <Button children='Masuk' trash={false} />
        </div>
      </div>
      <div className='bg-gradient-green-no-rounded h-screen w-0 opacity-0 transition-all duration-300 ease-in-out lg:w-1/3 lg:opacity-100 flex justify-center items-center'>
        <img src={Logo} alt='Logo' className='w-[258px] h-[290px]' />
      </div>
    </div>
  );
};

export default Login;
