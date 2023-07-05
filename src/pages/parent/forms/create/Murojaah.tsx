import axios from 'axios';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postMurojaahParent } from '../../../../fetch/api/Parent';
import { getToken, getUser } from '../../../../fetch/storage/Gets';
import { ApiQuran } from '../../../../types/QuranApi';
import { juz } from '../../../../utils/Juz';
import Button from '../../../../views/atoms/Button';
import { InputFloating } from '../../../../views/atoms/Inputs';
import Loader from '../../../../views/atoms/Loader';
import TitlePage from '../../../../views/atoms/TitlePage';
import Appbar from '../../../../views/molecules/Appbar';

export const Murojaah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [open, setOpen] = React.useState(false);
  const [openJuz, setOpenJuz] = React.useState(false);
  const [clickSurah, setClickSurah] = React.useState<string>('');
  const [ayatState, setAyatState] = React.useState<string>('');
  const [clickJuz, setClickJuz] = React.useState<number | null>(null);
  const [surah, setSurah] = React.useState<ApiQuran[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined>('');
  const data = localStorage.getItem('data');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleClick = async () => {
    if (token) {
      const decryptedToken = getToken(token);
      let juz = '' + clickJuz;
      let surah = clickSurah;
      let ayat = '' + ayatState;
      try {
        const { status } = await postMurojaahParent(
          surah,
          juz,
          ayat,
          decryptedToken
        );
        if (status === 200) {
          setIsError((prev) => (prev === false ? prev : !prev));
          setMessage('Berhasil membuat hafalan lama');
        } else {
          setIsError((prev) => (prev === true ? prev : !prev));
          setMessage('Gagal membuat hafalan lama');
        }
      } catch (error) {
        navigate('/login');
      }
    }
  };

  React.useEffect(() => {
    (async function getSurah() {
      if (data) {
        const decryptedData = getUser(data);
        const getSurah = await axios.get('https://equran.id/api/v2/surat');
        setSurah(getSurah.data.data);
        setUserData(decryptedData);
        setIsLoading((prev) => (prev === false ? prev : !prev));
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
        <TitlePage page='Buat Hafalan Lama' />
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
          <div className={'relative mt-2 mb-[39px]'}>
            <div
              className='relative cursor-pointer mt-2'
              onClick={() => setOpen((prev) => !prev)}>
              <div
                className={
                  'w-full px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] border-dark-green border text-dark-green' +
                  (open ? ' rounded-tl-tr' : ' rounded-[10px]')
                }>
                {clickSurah}
              </div>
              <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
                <span>Surat</span>
                <FaCaretDown />
              </span>
            </div>
            {open && (
              <div
                className={
                  'p-3 absolute z-10 top-[45px] w-full rounded-bl-br bg-dark-green text-white h-48 overflow-y-scroll'
                }>
                {surah.map((value, index) => {
                  return (
                    <button
                      key={index}
                      className={'block m-auto p-1 w-full hover:bg-light-green'}
                      onClick={() => setClickSurah(value.namaLatin)}>
                      {value.namaLatin}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <InputFloating
            classname='mb-[39px]'
            label='Ayat'
            onChange={(e) => setAyatState(e.target.value)}
          />
          <div className={'relative mt-2 mb-[39px]'}>
            <div
              className='relative cursor-pointer mt-2'
              onClick={() => setOpenJuz((prev) => !prev)}>
              <div
                className={
                  'w-full px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] border-dark-green border text-dark-green' +
                  (open ? ' rounded-tl-tr' : ' rounded-[10px]')
                }>
                {clickJuz}
              </div>
              <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
                <span>Juz</span>
                <FaCaretDown />
              </span>
            </div>
            {openJuz && (
              <div
                className={
                  'p-3 absolute z-10 top-[45px] w-full rounded-bl-br bg-dark-green text-white h-48 overflow-y-scroll'
                }>
                {juz.map((value, index) => {
                  return (
                    <button
                      key={index}
                      className={'block m-auto p-1 w-full hover:bg-light-green'}
                      onClick={() => setClickJuz(value)}>
                      {value}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Buat' trash={false} onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
