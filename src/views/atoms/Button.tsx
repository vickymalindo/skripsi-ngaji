interface Props {
  children: string;
}

const Button = ({ children }: Props) => {
  return (
    <button className='outline-none bg-dark-green py-[10px] px-[30px] text-[20px] text-white rounded-[10px]'>
      {children}
    </button>
  );
};

export default Button;
