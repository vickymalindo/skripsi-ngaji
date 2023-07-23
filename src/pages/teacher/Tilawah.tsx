import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import {
  deleteTilawah,
  fetchTeacherKelas,
  fetchTilawah,
} from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import { MurojaahType } from '../../types/ApiTeacher';
import Button from '../../views/atoms/Button';
import Loader from '../../views/atoms/Loader';
import Content from '../../views/molecules/Content';

export const Tilawah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [kelas, setKelas] = React.useState<string | undefined>('');
  const [tilawah, setTilawah] = React.useState<MurojaahType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [id, setId] = React.useState('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const navigate = useNavigate();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const res = await deleteTilawah(id);
    const { status } = res;
    if (status === 200) {
      const responseTilawah = await fetchTilawah(userData.id_kelas);
      setTilawah(responseTilawah);
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data tilawah');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data tilawah');
    }
  };

  const handleUpdate = (id: number) => {
    navigate(`/teacher/forms/edit/tilawah/${id}`);
  };

  const handleDelete = (id: number) => {
    const numberIdToStr = '' + id;
    setId(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const responseKelas = await fetchTeacherKelas(decryptedData.id_kelas);
        try {
          const responseTilawah = await fetchTilawah(
            '' + decryptedData.id_kelas
          );
          setTilawah(responseTilawah);
        } catch (error) {
          setTilawah([]);
        }
        setKelas(responseKelas);
        setUserData(decryptedData);
        setIsLoading((prev) => (prev === false ? prev : !prev));
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <>
      <Content
        username={userData?.username}
        page={'Tilawah ' + kelas}
        showAction={true}
        canDelete={true}
        showCard={false}
        showButton={true}
        showQuranTable={true}
        dataTableQuran={tilawah}
        createdTo='tilawah'
        update={(id) => handleUpdate(id)}
        handleDelete={(id) => handleDelete(id)}
        message={message}
        isError={isError}
      />
      {openModal ? (
        <div className={'fixed top-0 left-0 w-full h-full bg-black-rgba block'}>
          <div className='w-full h-screen flex justify-center items-center px-4 sm:px-0'>
            <div className='w-full max-w-[766px] py-5 px-8 sm:py-[30px] sm:px-[42px] bg-white rounded-xl md:rounded-[57px]'>
              <div className='w-full h-5 relative'>
                <IoMdClose
                  className='absolute right-3 top-0 text-lg md:text-2xl cursor-pointer'
                  onClick={() => setOpenModal((prev) => !prev)}
                />
              </div>
              <h1 className=' text-[18px] sm:text-xl md:text-2xl font-bold gradient-green mb-8'>
                Apakah Anda Yakin ingin menghapus
              </h1>
              <div>
                <div className='w-full flex justify-end'>
                  <Button
                    children={'Ya'}
                    trash={false}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
