import React from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { DropdownInput } from './Dropdowns';

interface Props {
  type?: string;
  label: string;
  password?: boolean;
  eye?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOpen?: boolean;
}

export const InputDefault = ({ label, password, eye, ...props }: Props) => {
  const [eyeSlash, setEyeSlash] = React.useState(true);

  const handleClickEye = () => {
    setEyeSlash((prev) => !prev);
  };

  return (
    <div className='px-4 py-3 h-[45px] border border-dark-green rounded-[10px] text-dark-green w-[360px] flex justify-between items-center'>
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

export const InputFloating = ({ label, ...props }: Props) => {
  return (
    <div className='relative mt-2 w-max'>
      <input
        className='w-[360px] px-4 py-3 h-[45px] outline-none border-dark-green border rounded-[10px] text-dark-green'
        {...props}
      />
      <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
        <span>{label}</span>
      </span>
    </div>
  );
};

export const InputDropdown = ({ label }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [kelas, setKelas] = React.useState<string | undefined>('');

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className='relative w-[360px]'>
      <div className='relative cursor-pointer mt-2' onClick={handleOpen}>
        <div
          className={
            'px-4 py-3 h-[45px] border-dark-green border text-dark-green' +
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
          isOpen={open}
          passKelas={setKelas}
        />
      )}
    </div>
  );
};
