interface Props {
  isWhite: boolean;
}
const Loader = ({ isWhite }: Props) => {
  return (
    <div
      className={
        'fixed top-0 left-0 w-full h-full overflow-hidden' +
        (isWhite ? ' bg-white' : ' bg-black-rgba')
      }>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='loader animate-spin'></div>;
      </div>
    </div>
  );
};

export default Loader;
