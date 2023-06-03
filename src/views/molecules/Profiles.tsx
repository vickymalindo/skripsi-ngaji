import { UserData } from '../../types/UserData';
import Button from '../atoms/Button';
import { InputFloating } from '../atoms/Inputs';
import TitlePage from '../atoms/TitlePage';
import Appbar from './Appbar';

interface Props {
  data: UserData;
  onChangeFullName: string;
  onChangeUsername: string;
  onChangeTtl: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: string;
}

const Profiles = ({
  data,
  onChangeFullName,
  onChangeUsername,
  onChangeEmail,
  onChangeTtl,
}: Props) => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username='vickymalindo' />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Profile' />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          <InputFloating
            classname='mb-[39px]'
            label='Email'
            value={data.email}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Username'
            value={data.username}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Nama Lengkap'
            value={data.nama_lengkap}
          />
          <InputFloating
            classname='mb-[39px]'
            label='TTL'
            value={data.ttl}
            // onChange={(e) => onChangeTtl(e.target.value)}
          />
          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Simpan' trash={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
