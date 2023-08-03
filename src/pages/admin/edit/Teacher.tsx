import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {
  fetchAllKelas,
  fetchKelas,
  fetchUser,
  updateTeacher,
} from '../../../fetch/api/Admin';
import { getUser } from '../../../fetch/storage/Gets';
import { AllKelas } from '../../../types/ApiAdmin';
import Button from '../../../views/atoms/Button';
import { InputFloating } from '../../../views/atoms/Inputs';
import Loader from '../../../views/atoms/Loader';
import TitlePage from '../../../views/atoms/TitlePage';
import Appbar from '../../../views/molecules/Appbar';

export const Teacher = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [allKelas, setAllKelas] = React.useState<AllKelas[]>([]);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const [ttl, setTtl] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [kelas, setKelas] = React.useState('');
  const [idKelas, setIdKelas] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const resUpdateTeacher = await updateTeacher(
      email,
      username,
      fullName,
      ttl,
      idKelas,
      id
    );
    const { status } = resUpdateTeacher.data;
    if (status === 200) {
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil edit data Guru');
    } else {
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal edit data Guru');
    }
  };

  const handleKelas = (kelasName: string, kelasId: number) => {
    setKelas(kelasName);
    setIdKelas(kelasId);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const resAllKelas = await fetchAllKelas();
        const resTeacher = await fetchUser(id);
        const reskelas = await fetchKelas(resTeacher.data.data.id_kelas);
        setIdKelas(resTeacher.data.data.id_kelas);
        setKelas(reskelas.data.data.nama_kelas);
        setEmail(resTeacher.data.data.email);
        setUsername(resTeacher.data.data.username);
        setFullName(resTeacher.data.data.nama_lengkap);
        setTtl(resTeacher.data.data.ttl);
        setAllKelas(resAllKelas.data.data);
        setUserData(decryptedData);
        setIsLoading((prev) => (prev = false));
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={userData?.username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Edit Akun Guru' />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          {message && (
            <div
              className={
                'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
                (isError
                  ? ' text-red-800 bg-red-400'
                  : ' text-green-800 bg-green-400')
              }>
              <p>{message}</p>
            </div>
          )}
          <InputFloating
            classname='mb-[39px]'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Nama Lengkap'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className={'relative mt-2 mb-[39px]'}>
            <div
              className='relative cursor-pointer mt-2'
              onClick={() => setOpen((prev) => !prev)}>
              <div
                className={
                  'w-full px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] border-dark-green border text-dark-green' +
                  (open ? ' rounded-tl-tr' : ' rounded-[10px]')
                }>
                {kelas}
              </div>
              <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
                <span>Kelas</span>
                <FaCaretDown />
              </span>
            </div>
            {open && (
              <div
                className={
                  'p-3 absolute z-10 top-[45px] w-full rounded-bl-br bg-dark-green text-white max-h-48 overflow-y-auto'
                }>
                {allKelas?.map((value, index) => {
                  return (
                    <button
                      key={index}
                      className={'block m-auto p-1 w-full hover:bg-light-green'}
                      onClick={() => handleKelas(value.nama_kelas, value.id)}>
                      {value.nama_kelas}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <InputFloating
            classname='mb-[39px]'
            label='TTL'
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />

          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Edit' trash={false} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
