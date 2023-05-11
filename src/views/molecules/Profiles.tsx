import Button from '../atoms/Button';
import { InputFloating } from '../atoms/Inputs';
import TitlePage from '../atoms/TitlePage';
import Appbar from './Appbar';

const Profiles = () => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username='vickymalindo' />
      {/* <Loader /> */}
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Profile' />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          <InputFloating classname='mb-[39px]' label='Nama Lengkap' />
          <InputFloating classname='mb-[39px]' label='Kelas' />
          <InputFloating classname='mb-[39px]' label='Jenis Kelamin' />
          <InputFloating classname='mb-[39px]' label='TTL' />
          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Simpan' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;