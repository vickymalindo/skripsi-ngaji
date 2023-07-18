import React from 'react';
import { BsEye } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import {
  createKelas,
  deleteKelas,
  fetchAllKelas,
  updateKelas,
} from '../../fetch/api/Admin';
import { getUser } from '../../fetch/storage/Gets';
import { AllKelas } from '../../types/ApiAdmin';
import Button from '../../views/atoms/Button';
import EmptyData from '../../views/atoms/EmptyData';
import { InputFloating } from '../../views/atoms/Inputs';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';
import Pencil from './../../assets/images/pencil.png';
import Trash from './../../assets/images/trash.png';

const Class = () => {
  const [userData, setUserdata] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [allKelas, setAllKelas] = React.useState<AllKelas[]>([]);
  const [openModalCreate, setOpenModalCreate] = React.useState(false);
  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [messageKelas, setMessageKelas] = React.useState<string | undefined>(
    ''
  );
  const [message, setMessage] = React.useState<string | undefined>('');
  const [nameKelas, setNameKelas] = React.useState<string>('');
  const [idKelas, setIdKelas] = React.useState<string | undefined>('');
  const data = localStorage.getItem('data');
  const navigate = useNavigate();

  const handleDelete = async (idKelas: number) => {
    const statusDeleteKelas = await deleteKelas(idKelas);
    if (statusDeleteKelas === 200) {
      const resAllKelas = await fetchAllKelas();
      setAllKelas(resAllKelas.data.data);
      setMessage('Berhasil Hapus Kelas');
      setIsError((prev) => (prev === false ? prev : !prev));
    } else {
      setMessage('Gagal Hapus Kelas');
      setIsError((prev) => (prev === true ? prev : !prev));
    }
  };

  const handleEdit = (idKelas: number, kelas: string) => {
    setIdKelas(' ' + idKelas);
    setNameKelas(kelas);
    setOpenModalEdit((prev) => !prev);
  };

  const handleCloseModal = () => {
    setMessageKelas('');
    if (openModalCreate) {
      setOpenModalCreate((prev) => !prev);
    } else if (openModalEdit) {
      setOpenModalEdit((prev) => !prev);
    }
  };

  const handleSubmit = async () => {
    if (openModalCreate) {
      try {
        const resCreateKelas = await createKelas(nameKelas);
        const { status } = resCreateKelas;
        if (status === 200) {
          const resAllKelas = await fetchAllKelas();
          setAllKelas(resAllKelas.data.data);
          setIsError((prev) => (prev === false ? prev : !prev));
          setMessageKelas('Berhasil buat kelas');
        }
      } catch (error) {
        setIsError((prev) => (prev === true ? prev : !prev));
        setMessageKelas('Nama kelas sudah ada');
      }
    } else {
      try {
        const resEditKelas = await updateKelas(idKelas, nameKelas);
        const { status } = resEditKelas.data;
        if (status === 200) {
          const resAllKelas = await fetchAllKelas();
          setAllKelas(resAllKelas.data.data);
          setIsError((prev) => (prev === false ? prev : !prev));
          setMessageKelas('Berhasil edit kelas');
        }
      } catch (error) {
        setIsError((prev) => (prev === true ? prev : !prev));
        setMessageKelas('Nama kelas sudah ada');
      }
    }
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const resAllKelas = await fetchAllKelas();
        // setIdKelas(resAllKelas.data.data[0].id);
        setAllKelas(resAllKelas.data.data);
        setUserdata(decryptedData);
        setIsLoading((prev) => (prev = false));
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <>
      <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition-all duration-300 ease-in-out-out'>
        <Appbar username={userData?.username} />
        <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] relative'>
          <TitlePage page='Daftar Kelas' />
          <div className='w-full flex justify-end'>
            <Button
              children='Buat Kelas'
              className='mb-[22px]'
              trash={false}
              onClick={() => setOpenModalCreate((prev) => !prev)}
            />
          </div>
          {message && (
            <div
              className={
                'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
                (isError
                  ? ' text-red-800 bg-red-400'
                  : ' text-green-800 bg-green-400')
              }>
              <p>{message}</p>
            </div>
          )}
          {allKelas.length === 0 ? (
            <EmptyData />
          ) : (
            <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10 mb-7'>
              <table className='m-auto'>
                <thead className='bg-gradient-green text-white'>
                  <tr>
                    <th className='p-1 md:p-1.5 lg:p-2'>No</th>
                    <th className='p-1 md:p-1.5 lg:p-2'>Nama Kelas</th>
                    <th className='p-1 md:p-1.5 lg:p-2'>Dibuat</th>
                    <th className='p-1 md:p-1.5 lg:p-2'>Diedit</th>
                    <th className='p-1 md:p-1.5 lg:p-2'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {allKelas?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nama_kelas}</td>
                        <td>{item.created_at}</td>
                        <td>{item.updated_at}</td>
                        <td>
                          <div className='flex items-center justify-center gap-6'>
                            <span
                              className='cursor-pointer inline-block'
                              onClick={() =>
                                handleEdit(item.id, item.nama_kelas)
                              }>
                              <img src={Pencil} alt='Pencil' />
                            </span>
                            <span
                              className='cursor-pointer inline-block'
                              onClick={() => handleDelete(item.id)}>
                              <img src={Trash} alt='Trash' />
                            </span>

                            <span
                              className='cursor-pointer inline-block'
                              onClick={() =>
                                navigate(`/admin/class/detail/${item.id}`)
                              }>
                              <BsEye className='text-dark-green text-[19px]' />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {openModalCreate ? (
        <Modal
          onClose={handleCloseModal}
          showInput={true}
          children={'Buat Kelas'}
          buttonText={'Buat'}
          onSubmit={handleSubmit}
          onChange={(e) => setNameKelas(e)}
          message={messageKelas}
          isError={isError}
        />
      ) : (
        ''
      )}
      {openModalEdit ? (
        <div className={'fixed top-0 left-0 w-full h-full bg-black-rgba block'}>
          <div className='w-full h-screen flex justify-center items-center px-4 sm:px-0'>
            <div className='w-full max-w-[766px] py-5 px-8 sm:py-[30px] sm:px-[42px] bg-white rounded-xl md:rounded-[57px]'>
              <div className='w-full h-5 relative'>
                <IoMdClose
                  className='absolute right-3 top-0 text-lg md:text-2xl cursor-pointer'
                  onClick={handleCloseModal}
                />
              </div>
              {messageKelas && (
                <div
                  className={
                    'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4 mt-3' +
                    (isError
                      ? ' text-red-800 bg-red-400'
                      : ' text-green-800 bg-green-400')
                  }>
                  <p>{messageKelas}</p>
                </div>
              )}
              <h1 className=' text-[18px] sm:text-xl md:text-2xl font-bold gradient-green mb-8'>
                Edit Kelas
              </h1>
              <div>
                <InputFloating
                  label='Nama Kelas'
                  classname='mb-7'
                  onChange={(e) => setNameKelas(e.target.value)}
                  value={nameKelas}
                />
                <div className='w-full flex justify-end'>
                  <Button
                    children={'Edit'}
                    trash={false}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Class;
