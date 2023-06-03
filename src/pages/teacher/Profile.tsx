import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../../fetch/api/Teacher';
import { encrypt, getToken } from '../../fetch/storage/Gets';
import Button from '../../views/atoms/Button';
import { InputFloating } from '../../views/atoms/Inputs';
import Loader from '../../views/atoms/Loader';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

export const Profile = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [nama_lengkap, setNama_Lengkap] = React.useState<string>('');
  const [ttl, setTtl] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const data = localStorage.getItem('data');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const numberIdToStr = '' + userData.id;
    const res = await updateProfile(
      numberIdToStr,
      email,
      username,
      nama_lengkap,
      ttl
    );
    const { status } = res;
    if (status === 200) {
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Berhasil edit profile');
      if (token) {
        const decryptedToken = getToken(token);
        try {
          const responseGetProfile = await getProfile(decryptedToken);
          setUserData(responseGetProfile);
          localStorage.removeItem('data');
          localStorage.setItem('data', encrypt(responseGetProfile));
        } catch (error) {
          localStorage.clear();
          navigate('/login');
        }
      }
    } else {
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal edit profile');
    }
  };

  React.useEffect(() => {
    (async function () {
      if (data && token) {
        const decryptedToken = getToken(token);
        try {
          const responseGetProfile = await getProfile(decryptedToken);
          setUserData(responseGetProfile);
          setNama_Lengkap(responseGetProfile.nama_lengkap);
          setEmail(responseGetProfile.email);
          setTtl(responseGetProfile.ttl);
          setUsername(responseGetProfile.username);
          setUserData(responseGetProfile);
          setIsLoading((prev) => (prev === false ? prev : !prev));
        } catch (error) {
          localStorage.clear();
          navigate('/login');
        }
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={userData.username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Profile' />
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
            onChange={(e) => setEmail(e.target.value)}
            password={false}
            value={email}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
            password={false}
            value={username}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Nama Lengkap'
            onChange={(e) => setNama_Lengkap(e.target.value)}
            password={false}
            value={nama_lengkap}
          />
          <InputFloating
            classname='mb-[39px]'
            label='TTL'
            onChange={(e) => setTtl(e.target.value)}
            password={false}
            value={ttl}
          />

          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Simpan' trash={false} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
