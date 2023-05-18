import Button from './Button';
import { InputFloating } from './Inputs';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

const Modal = ({ onClick, isOpen }: Props) => {
  return (
    <div
      className={
        'fixed top-0 left-0 w-full h-full bg-black-rgba' +
        (isOpen ? ' block' : ' hidden')
      }
      onClick={onClick}>
      <div className='w-full h-screen flex justify-center items-center px-4 sm:px-0'>
        <div className='w-full max-w-[766px] py-5 px-8 sm:py-[30px] sm:px-[42px] bg-white rounded-[57px]'>
          <h1 className=' text-[18px] sm:text-xl md:text-2xl font-bold gradient-green mb-8'>
            Buat Kelas
          </h1>
          <div>
            <InputFloating label='Nama Kelas' classname='mb-7' />
            <InputFloating label='Guru' classname='mb-16' />
            <div className='w-full flex justify-end'>
              <Button children='Buat' trash={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
