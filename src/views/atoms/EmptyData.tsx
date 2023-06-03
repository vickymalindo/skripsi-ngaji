// import React from 'react'
import DataKosong from '../../assets/images/empty-data.png';

const EmptyData = () => {
  return (
    <div className='text-center'>
      <img
        src={DataKosong}
        alt='Data Kosong'
        className='block m-auto w-[220.89px] h-[220.89px] sm:w-[240.89px] sm:h-[240.89px] md:w-[288.89px] md:h-[288.89px]'
      />
      <h3 className='gradient-green text-lg md:text-xl lg:text-2xl'>
        Belum ada Daftar yang tersedia!
      </h3>
    </div>
  );
};

export default EmptyData;
