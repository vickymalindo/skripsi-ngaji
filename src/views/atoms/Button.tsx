import { FaRegTrashAlt } from 'react-icons/fa';

interface Props {
  children: string;
  onClick?: () => void;
  className?: string;
  trash: boolean;
}

const Button = ({ children, trash, className, ...props }: Props) => {
  return (
    <div
      className={
        'shadow-primary-shadow outline-none bg-dark-green py-[10px] px-[30px] sm:text-[20px] text-white rounded-[10px] flex justify-center items-center gap-2 w-max cursor-pointer' +
        (className ? ` ${className}` : '') +
        (trash ? ' mt-[21px]' : '')
      }
      {...props}>
      <button className='outline-none bg-transparent text-base'>
        {children}
      </button>
      {trash && <FaRegTrashAlt className='text-base' />}
    </div>
  );
};

export default Button;
