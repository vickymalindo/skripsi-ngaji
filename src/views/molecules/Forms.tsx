import Button from '../atoms/Button';
import { InputDropdown, InputFloating } from '../atoms/Inputs';
import TitlePage from '../atoms/TitlePage';
import Appbar from './Appbar';

interface Props {
  username: string;
  page: string;
  children: string;
  isClass?: boolean;
  isNotStudent?: boolean;
  isParent?: boolean;
}

export const FormQuran = ({ username, page, children }: Props) => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page={page} />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          <InputFloating classname='mb-[39px]' label='Hari' />
          <InputFloating classname='mb-[39px]' label='Tanggal' />
          <InputFloating classname='mb-[39px]' label='Bulan' />
          <InputFloating classname='mb-[39px]' label='Tahun' />
          <InputFloating classname='mb-[39px]' label='Surat' />
          <InputFloating classname='mb-[39px]' label='Ayat' />
          <InputFloating classname='mb-[39px]' label='Juz' />
          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children={children} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FormUser = ({
  username,
  page,
  children,
  isClass,
  isNotStudent,
  isParent,
}: Props) => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page={page} />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          <InputFloating classname='mb-[39px]' label='Nama Lengkap' />
          {isClass && <InputDropdown classname='mb-[39px]' label='Kelas' />}
          {isParent && <InputDropdown classname='mb-[39px]' label='Anak' />}
          <InputFloating classname='mb-[39px]' label='Jenis Kelamin' />
          <InputFloating classname='mb-[39px]' label='TTL' />
          {isNotStudent && (
            <>
              <InputFloating classname='mb-[39px]' label='Username' />
              <InputFloating
                classname='mb-[39px]'
                label='Kata Sandi'
                password={true}
              />
            </>
          )}
          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children={children} />
          </div>
        </div>
      </div>
    </div>
  );
};
