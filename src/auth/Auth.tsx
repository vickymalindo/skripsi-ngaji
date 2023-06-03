// import React from 'react'

const Auth = () => {
  return (
    <div className='bg-slate-700 w-full h-screen fixed z-50'>
      <div className='text-white px-4 py-2 w-full h-screen flex justify-center items-center text-center'>
        <div>
          <h1 className='text-[80px]'>403</h1>
          <h4 className='text-2xl'>Forbidden</h4>
          <p className='text-sm sm:text-lg'>
            Access to this resource on the server is denied!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
