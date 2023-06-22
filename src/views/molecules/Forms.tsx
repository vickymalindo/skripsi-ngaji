import axios from 'axios';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { ApiQuran } from '../../types/QuranApi';
import { juz } from '../../utils/Juz';
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
  const [open, setOpen] = React.useState(false);
  const [openJuz, setOpenJuz] = React.useState(false);
  const [clickSurah, setClickSurah] = React.useState<string | undefined>('');
  const [ayat, setAyat] = React.useState<string | undefined>('');
  const [clickJuz, setClickJuz] = React.useState<number | null>(null);
  const [surah, setSurah] = React.useState<ApiQuran[]>([]);

  React.useEffect(() => {
    (async function getSurah() {
      const getSurah = await axios.get('https://equran.id/api/v2/surat');
      setSurah(getSurah.data.data);
    })();
  }, []);

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page={page} />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          <div className={'relative mt-2 mb-[39px]'}>
            <div
              className='relative cursor-pointer mt-2'
              onClick={() => setOpen((prev) => !prev)}>
              <div
                className={
                  'w-full px-4 py-3 h-[53px] border-dark-green border text-dark-green' +
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
            onChange={(e) => setAyat(e.target.value)}
          />
          <div className={'relative mt-2 mb-[39px]'}>
            <div
              className='relative cursor-pointer mt-2'
              onClick={() => setOpenJuz((prev) => !prev)}>
              <div
                className={
                  'w-full px-4 py-3 h-[53px] border-dark-green border text-dark-green' +
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
            <Button children={children} trash={false} />
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
            <Button children={children} trash={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
