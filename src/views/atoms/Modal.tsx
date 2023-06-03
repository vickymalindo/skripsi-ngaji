import { IoMdClose } from 'react-icons/io';
import Button from './Button';
import { InputFloating } from './Inputs';

interface Props {
  onClose: () => void;
  children: string;
  showInput: boolean;
  buttonText: string;
  onSubmit?: () => void;
  onChange?: (e: string) => void;
  isError?: boolean;
  message?: string;
}

const Modal = ({
  onClose,
  children,
  showInput,
  buttonText,
  onSubmit,
  message,
  isError,
  onChange,
}: Props) => {
  return (
    <div className={'fixed top-0 left-0 w-full h-full bg-black-rgba block'}>
      <div className='w-full h-screen flex justify-center items-center px-4 sm:px-0'>
        <div className='w-full max-w-[766px] py-5 px-8 sm:py-[30px] sm:px-[42px] bg-white rounded-xl md:rounded-[57px]'>
          <div className='w-full h-5 relative'>
            <IoMdClose
              className='absolute right-3 top-0 text-lg md:text-2xl cursor-pointer'
              onClick={onClose}
            />
          </div>
          {message && (
            <div
              className={
                'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4 mt-3' +
                (isError
                  ? ' text-red-800 bg-red-400'
                  : ' text-green-800 bg-green-400')
              }>
              <p>{message}</p>
            </div>
          )}
          <h1 className=' text-[18px] sm:text-xl md:text-2xl font-bold gradient-green mb-8'>
            {children}
          </h1>
          <div>
            {showInput ? (
              <>
                <InputFloating
                  label='Nama Kelas'
                  classname='mb-7'
                  onChange={(e) => onChange?.(e.target.value)}
                />
              </>
            ) : (
              ''
            )}
            <div className='w-full flex justify-end'>
              <Button children={buttonText} trash={false} onClick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
