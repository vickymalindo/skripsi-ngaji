import React from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { DropdownInput } from './Dropdowns';

interface Props {
  type?: string;
  label: string;
  password?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classname?: string;
}

export const InputDefault = ({
  label,
  password,
  classname,
  ...props
}: Props) => {
  const [eyeSlash, setEyeSlash] = React.useState(true);

  const handleClickEye = () => {
    setEyeSlash((prev) => !prev);
  };

  return (
    <div
      className={
        'px-3 py-2 sm:px-4 sm:py-3 h-[45px] sm:h-[53px] border border-dark-green rounded-[10px] text-dark-green max-w-[505px] sm:w-[505px] flex justify-between items-center' +
        (classname ? ` ${classname}` : '')
      }>
      <input
        type={password ? (eyeSlash ? 'password' : 'text') : 'text'}
        className={
          'outline-none border-none placeholder-dark-green' +
          (password ? ' w-[92%]' : ' w-full')
        }
        placeholder={label}
        {...props}
      />
      {password ? (
        eyeSlash ? (
          <BsEye className='cursor-pointer text-lg' onClick={handleClickEye} />
        ) : (
          <BsEyeSlash
            className='cursor-pointer text-lg'
            onClick={handleClickEye}
          />
        )
      ) : (
        ''
      )}
    </div>
  );
};

export const InputFloating = ({
  label,
  classname,
  password,
  ...props
}: Props) => {
  const [eyeSlash, setEyeSlash] = React.useState(true);

  const handleClickEye = () => {
    setEyeSlash((prev) => !prev);
  };

  return (
    <div className={'relative mt-2 ' + (classname ? classname : '')}>
      <div className='px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] text-dark-green border-dark-green border rounded-[10px] flex justify-between items-center'>
        <input
          type={password ? (eyeSlash ? 'password' : 'text') : 'text'}
          className={'outline-none ' + (password ? ' w-[92%]' : ' w-full')}
          {...props}
        />
        {password ? (
          eyeSlash ? (
            <BsEye
              className='cursor-pointer text-lg'
              onClick={handleClickEye}
            />
          ) : (
            <BsEyeSlash
              className='cursor-pointer text-lg'
              onClick={handleClickEye}
            />
          )
        ) : (
          ''
        )}
      </div>

      <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
        <span className='text-sm sm:text-base'>{label}</span>
      </span>
    </div>
  );
};

export const InputDropdown = ({ label, classname }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [kelas, setKelas] = React.useState<string | undefined>('');

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={'relative mt-2 ' + (classname ? classname : '')}>
      <div className='relative cursor-pointer mt-2' onClick={handleOpen}>
        <div
          className={
            'w-full px-4 py-3 h-[53px] border-dark-green border text-dark-green' +
            (open ? ' rounded-tl-tr' : ' rounded-[10px]')
          }>
          {kelas}
        </div>
        <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
          <span>{label}</span>
          <FaCaretDown />
        </span>
      </div>
      {open && (
        <DropdownInput
          data={['4IA22', '4IA19', '4IA20', '4IA18']}
          passKelas={setKelas}
          isCream={false}
        />
      )}
    </div>
  );
};
