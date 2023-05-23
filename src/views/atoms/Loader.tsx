const Loader = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black-rgba overflow-hidden'>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='loader animate-spin'></div>;
      </div>
    </div>
  );
};

export default Loader;
