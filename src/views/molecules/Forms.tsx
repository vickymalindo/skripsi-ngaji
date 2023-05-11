import Button from '../atoms/Button';
import { InputFloating } from '../atoms/Inputs';
import TitlePage from '../atoms/TitlePage';
import Appbar from './Appbar';

interface Props {
  username: string;
  page: string;
  children: string;
}

const Forms = ({ username, page, children }: Props) => {
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

export default Forms;
