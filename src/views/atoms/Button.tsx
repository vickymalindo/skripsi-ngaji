import { FaRegTrashAlt } from 'react-icons/fa';

interface Props {
  children: string;
  onClick?: () => void;
  className?: string;
  trash: boolean;
  isActive?: string;
}

const Button = ({ children, trash, className, isActive, ...props }: Props) => {
  return (
    <div
      className={
        'shadow-primary-shadow outline-none bg-dark-green py-[10px] px-[30px] sm:text-[20px] rounded-[10px] flex justify-center items-center gap-2 w-max cursor-pointer' +
        (className ? ` ${className}` : '') +
        (trash ? ' mt-[21px]' : '')
      }
      {...props}>
      <button
        className={
          'outline-none bg-transparent text-base' +
          (isActive ? isActive : ' text-white')
        }>
        {children}
      </button>
      {trash && <FaRegTrashAlt className='text-base text-white' />}
    </div>
  );
};

export default Button;
