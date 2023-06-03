import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../../fetch/api/Parent';
import { encrypt, getToken } from '../../fetch/storage/Gets';
import Button from '../../views/atoms/Button';
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
          <div className='relative mt-2 mb-[39px]'>
            <div className='px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] text-dark-green border-dark-green border rounded-[10px] flex justify-between items-center'>
              <input
                type='text'
                className='outline-none w-full'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
              <span className='text-sm sm:text-base'>Email</span>
            </span>
          </div>

          <div className='relative mt-2 mb-[39px]'>
            <div className='px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] text-dark-green border-dark-green border rounded-[10px] flex justify-between items-center'>
              <input
                type='text'
                className='outline-none w-full'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
              <span className='text-sm sm:text-base'>Username</span>
            </span>
          </div>

          <div className='relative mt-2 mb-[39px]'>
            <div className='px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] text-dark-green border-dark-green border rounded-[10px] flex justify-between items-center'>
              <input
                type='text'
                className='outline-none w-full'
                value={nama_lengkap}
                onChange={(e) => setNama_Lengkap(e.target.value)}
              />
            </div>
            <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
              <span className='text-sm sm:text-base'>Nama Lengkap</span>
            </span>
          </div>

          <div className='relative mt-2 mb-[39px]'>
            <div className='px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] text-dark-green border-dark-green border rounded-[10px] flex justify-between items-center'>
              <input
                type='text'
                className='outline-none w-full'
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
              />
            </div>
            <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
              <span className='text-sm sm:text-base'>TTL</span>
            </span>
          </div>

          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Simpan' trash={false} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
