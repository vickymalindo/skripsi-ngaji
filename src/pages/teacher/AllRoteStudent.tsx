// import { QuranTable } from '../../views/atoms/Tables';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMurojaahHome, fetchTilawahHome } from '../../fetch/api/Parent';
import {
  fetchParent,
  fetchRoteStudent,
  fetchRoteStudentHome,
  fetchStudent,
  updateRoteStatusById,
} from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import Button from '../../views/atoms/Button';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import { QuranTable } from '../../views/atoms/Tables';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

const AllRoteStudent = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [student, setStudent] = React.useState<any>({});
  const [parent, setParent] = React.useState<any>({});
  const [studentRote, setStudentRote] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [typeRote, setTypeRote] = React.useState<string>('newRote');
  const [active, setActive] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string | undefined>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [idRote, setIdRote] = React.useState<string>('');
  const { id } = useParams();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const { status: statusCode } = await updateRoteStatusById(idRote);
    if (statusCode === 200) {
      const numberIdToStr = '' + id;
      const responseRote = await fetchRoteStudent(numberIdToStr, 0);
      const { status } = responseRote;
      if (status === 200) {
        setStudentRote(responseRote.data.data);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessage('Berhasil konfirmasi');
      } else {
        setStudentRote([]);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessage('Gagal konfirmasi');
      }
    }
    setOpenModal((prev) => !prev);
  };

  const handleUpdate = (dataId: number) => {
    const numberIdToStr = '' + dataId;
    setIdRote(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  const handleChangeTypeRote = (type: string) => {
    if (type === 'newRote') {
      setTypeRote((prev) => (prev = type));
    } else if (type === 'oldRote') {
      setTypeRote((prev) => (prev = type));
    } else {
      setTypeRote((prev) => (prev = type));
    }
    setActive((prev) => (prev = 0));
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        setIsLoading((prev) => (prev = true));
        const decryptedData = getUser(data);
        const numberIdToStr = '' + id;
        const { data: datas } = await fetchStudent(numberIdToStr);
        const responseParent = await fetchParent(numberIdToStr);
        let responseRote;
        if (typeRote === 'newRote') {
          if (active < 2) {
            responseRote = await fetchRoteStudent(numberIdToStr, active);
          } else {
            if (active === 2) {
              responseRote = await fetchRoteStudentHome(numberIdToStr, active);
            } else {
              responseRote = await fetchRoteStudentHome(numberIdToStr, 0);
            }
          }
          setStudentRote(responseRote?.data.data);
        } else if (typeRote === 'oldRote') {
          responseRote = await fetchMurojaahHome(
            responseParent.id_murid,
            active
          );
          setStudentRote(responseRote);
        } else {
          responseRote = await fetchTilawahHome(
            responseParent.id_murid,
            active
          );
          setStudentRote(responseRote);
        }
        setMessage('');
        setParent(responseParent);
        setStudent(datas.data);
        setUserData(decryptedData);
        setIsLoading((prev) => (prev = false));
      }
    })();
  }, [active, typeRote]);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition-all duration-300 ease-in-out-out'>
      <Appbar username={userData.username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] relative'>
        <TitlePage page='Pantau Kegiatan Hafalan Murid' />
        <div className='px-0 sm:px-[40.47px] lg:px-[60.47px] flex flex-col sm:flex-row justify-between items-start sm:items-center text-dark-green mb-[29px]'>
          <p className='italic font-bold text-sm sm:text-base md:text-xl'>
            Nama: {student.nama_lengkap}
          </p>
          <p className='italic font-bold text-sm sm:text-base md:text-xl'>
            Nama Orangtua: {parent?.nama_lengkap || 'Belum ada Orangtua'}
          </p>
        </div>
        <div className='flex justify-center w-full bg-green-50 mb-8'>
          <button
            className={
              'outline-none bg-green-50 bg-transparent border-2 rounded w-full inline-block px-3 py-2.5 text-sm md:text-base font-semibold' +
              (typeRote === 'newRote'
                ? ' text-dark-green font-bold border-b-white border-l-dark-green border-t-dark-green border-r-dark-green'
                : null)
            }
            onClick={() => handleChangeTypeRote('newRote')}>
            Hafalan Baru
          </button>
          <button
            className={
              'outline-none bg-green-50 bg-transparent border-2 rounded w-full inline-block px-3 py-2.5 text-sm md:text-base font-semibold' +
              (typeRote === 'oldRote'
                ? ' text-dark-green font-bold border-b-white border-l-dark-green border-t-dark-green border-r-dark-green'
                : null)
            }
            onClick={() => handleChangeTypeRote('oldRote')}>
            Hafalan lama
          </button>
          <button
            className={
              'outline-none bg-green-50 bg-transparent border-2 rounded w-full inline-block px-3 py-2.5 text-sm md:text-base font-semibold' +
              (typeRote === 'tilawah'
                ? ' text-dark-green font-bold border-b-white border-l-dark-green border-t-dark-green border-r-dark-green'
                : null)
            }
            onClick={() => handleChangeTypeRote('tilawah')}>
            Tilawah
          </button>
        </div>
        <div>
          {typeRote === 'newRote' ? (
            <>
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Belum Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 0
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 0))}
                />
                <Button
                  children='Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 1
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 1 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 1))}
                />
                <Button
                  children='Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 2
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 2))}
                />
                <Button
                  children='Belum Rumah'
                  className={
                    active === 3
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : ''
                  }
                  isActive={active === 3 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 3))}
                />
              </div>
            </>
          ) : typeRote === 'oldRote' ? (
            <>
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 2
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 2))}
                />
                <Button
                  children='Belum Rumah'
                  className={
                    active === 0
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : ''
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 0))}
                />
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 2
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 2))}
                />
                <Button
                  children='Belum Rumah'
                  className={
                    active === 0
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : ''
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => setActive((prev) => (prev = 0))}
                />
              </div>
            </>
          )}
        </div>
        <QuranTable
          showAction={
            typeRote === 'newRote' ? (active === 0 ? true : false) : false
          }
          canDelete={false}
          showIconEye={false}
          data={studentRote}
          update={(id) => handleUpdate(id)}
          message={message}
          isError={isError}
        />
        {openModal ? (
          <Modal
            showInput={false}
            children='Apakah Anda yakin ingin konfirmasi?'
            onClose={() => setOpenModal((prev) => !prev)}
            onSubmit={handleSubmit}
            buttonText='Ya'
          />
        ) : null}
      </div>
    </div>
  );
};

export default AllRoteStudent;
