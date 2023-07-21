import React from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { BsCalendar } from 'react-icons/bs';
import { datasToExport, excelNewRoteSchool } from '../../fetch/api/Admin';
import { getUser } from '../../fetch/storage/Gets';
import Loader from '../../views/atoms/Loader';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';
// import './../../index.css';

const Export = () => {
  const [openDate, setOpenDate] = React.useState(false);
  const [openDateSecond, setOpenDateSecond] = React.useState(false);
  const [date, setDate] = React.useState<any>(new Date());
  const [dateSecond, setDateSecond] = React.useState<any>(new Date());
  const [userData, setUserdata] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState<string>('Guru');
  const [dataType, setDataType] = React.useState<string>('baru');
  const [message, setMessage] = React.useState<string | undefined>('');

  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const data = localStorage.getItem('data');

  const handleDownload = async () => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const newDate = `${year}-${month + 1}-${day}`;
    const daySecond = dateSecond.getDate();
    const monthSecond = dateSecond.getMonth();
    const yearSecond = dateSecond.getFullYear();
    const newDateSecond = `${yearSecond}-${monthSecond + 1}-${daySecond}`;
    console.log(newDate, newDateSecond);
    const res = await datasToExport(newDate, newDateSecond, category, dataType);
    console.log(res);
    if (res.length === 0) {
      setMessage('Data Kosong, Silahkan Pilih Tanggal Kembali');
      return;
    }
    setMessage('');
    excelNewRoteSchool(fileType, fileExtension, res);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        setUserdata(decryptedData);
        setIsLoading((prev) => (prev = false));
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={userData?.username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] relative'>
        <TitlePage page='Unduh Data' />
        {message && (
          <div
            className={
              'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4 text-red-800 bg-red-400'
            }>
            <p>{message}</p>
          </div>
        )}
        <div>
          <h4 className='text-base sm:text-lg md:text-xl text-dark-green font-semibold'>
            Pilih Kategori :
          </h4>
          <div className='flex justify-center items-center w-max gap-1.5 pl-3'>
            <input
              type='radio'
              id='Guru'
              className='inline-block w-4 h-4'
              value='Guru'
              checked={category === 'Guru' ? true : false}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor='Guru' className='inline-block'>
              Guru
            </label>
          </div>
          <div className='flex justify-center items-center w-max gap-1.5 pl-3'>
            <input
              type='radio'
              id='Ortu'
              className='inline-block  w-4 h-4'
              value='Orangtua'
              checked={category === 'Orangtua' ? true : false}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor='Ortu' className='inline-block'>
              Orangtua
            </label>
          </div>
        </div>
        <div>
          <h4 className='text-base sm:text-lg md:text-xl text-dark-green font-semibold'>
            Pilih Data :
          </h4>
          <div className='flex justify-center items-center w-max gap-1.5 pl-3'>
            <input
              type='radio'
              id='baru'
              className='inline-block w-4 h-4'
              value='baru'
              checked={dataType === 'baru' ? true : false}
              onChange={(e) => setDataType(e.target.value)}
            />
            <label htmlFor='baru' className='inline-block'>
              Hafalan Baru
            </label>
          </div>
          <div className='flex justify-center items-center w-max gap-1.5 pl-3'>
            <input
              type='radio'
              id='lama'
              className='inline-block  w-4 h-4'
              value='lama'
              checked={dataType === 'lama' ? true : false}
              onChange={(e) => setDataType(e.target.value)}
            />
            <label htmlFor='lama' className='inline-block'>
              Hafalan Lama
            </label>
          </div>
          <div className='flex justify-center items-center w-max gap-1.5 pl-3'>
            <input
              type='radio'
              id='tilawah'
              className='inline-block  w-4 h-4'
              value='tilawah'
              checked={dataType === 'tilawah' ? true : false}
              onChange={(e) => setDataType(e.target.value)}
            />
            <label htmlFor='tilawah' className='inline-block'>
              Tilawah
            </label>
          </div>
        </div>
        <div className='flex items-start justify-start gap-2 sm:gap-4 flex-col sm:flex-row sm:items-center mb-8'>
          <div>
            <p className='text-base sm:text-lg md:text-xl font-bold text-dark-green'>
              Tanggal Awal
            </p>
          </div>
          <div className='relative w-full'>
            <div className='flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 h-[45px] sm:h-[53px] border border-dark-green rounded-[10px] text-dark-green w-full'>
              <p className='text-base sm:text-lg md:text-xl font-bold'>
                {date.toLocaleDateString('id')}
              </p>
              <BsCalendar
                className='inline-block cursor-pointer'
                onClick={() => setOpenDate((prev) => !prev)}
              />
            </div>
            {openDate ? (
              <div className='absolute right-0 z-10'>
                <Calendar onChange={setDate} value={date} />
              </div>
            ) : null}
          </div>
        </div>
        <div className='flex items-start justify-start gap-2 sm:gap-4 flex-col sm:flex-row sm:items-center mb-8'>
          <div>
            <p className='text-base sm:text-lg md:text-xl font-bold text-dark-green'>
              Tanggal Akhir
            </p>
          </div>
          <div className='relative w-full'>
            <div className='flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 h-[45px] sm:h-[53px] border border-dark-green rounded-[10px] text-dark-green w-full'>
              <p className='text-base sm:text-lg md:text-xl font-bold'>
                {dateSecond.toLocaleDateString('id')}
              </p>
              <BsCalendar
                className='inline-block cursor-pointer'
                onClick={() => setOpenDateSecond((prev) => !prev)}
              />
            </div>
            {openDateSecond ? (
              <div className='absolute right-0 z-10'>
                <Calendar onChange={setDateSecond} value={dateSecond} />
              </div>
            ) : null}
          </div>
        </div>
        <button
          className='shadow-primary-shadow outline-none bg-dark-green py-[10px] px-[30px] sm:text-[20px] rounded-[10px] flex justify-center items-center gap-2 cursor-pointer text-white w-full'
          onClick={handleDownload}>
          Unduh
        </button>
      </div>
    </div>
  );
};

export default Export;
