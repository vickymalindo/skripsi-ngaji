import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pencil from '../../../assets/images/pencil.png';
import Trash from '../../../assets/images/trash.png';
import { deleteStudent, fetchAllStudent } from '../../../fetch/api/Admin';
import { getUser } from '../../../fetch/storage/Gets';
import { StudentData } from '../../../types/UserData';
import EmptyData from '../../../views/atoms/EmptyData';
import Loader from '../../../views/atoms/Loader';
import Modal from '../../../views/atoms/Modal';
import TitlePage from '../../../views/atoms/TitlePage';
import Appbar from '../../../views/molecules/Appbar';

export const Student = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [students, setStudents] = React.useState<StudentData[]>([]);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [id, setId] = React.useState('');
  const data = localStorage.getItem('data');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const resDeleteStudent = await deleteStudent(id);
    const { status } = resDeleteStudent;
    if (status === 200) {
      const resStudents = await fetchAllStudent();
      setStudents(resStudents.data.data);
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data Murid/Anak');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data Murid/Anak');
    }
  };

  const handleDelete = (idStudent: number) => {
    const numberIdToStr = '' + idStudent;
    setId(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  const handleUpdate = (idStudent: number) => {
    navigate(`/admin/edit/student/${idStudent}`);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const resStudents = await fetchAllStudent();
        setStudents(resStudents.data.data);
        setUserData(decryptedData);
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
        <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
          <TitlePage page='Daftar Anak/Murid' />
          <div>
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
            {students?.length === 0 ? (
              <EmptyData />
            ) : (
              <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10'>
                <table className='m-auto'>
                  <thead className='bg-gradient-green text-white'>
                    <tr>
                      <th className='p-1 md:p-1.5 lg:p-2'>No</th>
                      <th className='p-1 md:p-1.5 lg:p-2'>Nama Lengkap</th>
                      <th className='p-1 md:p-1.5 lg:p-2'>TTL</th>
                      <th className='p-1 md:p-1.5 lg:p-2'>Jenis Kelamin</th>
                      <th className='p-1 md:p-1.5 lg:p-2'>Dibuat</th>
                      <th className='p-1 md:p-1.5 lg:p-2'>Diedit</th>
                      <th className='p-1 md:p-1.5 lg:p-2'>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.nama_lengkap}</td>
                          <td>{item.ttl}</td>
                          <td>{item.jenis_kelamin}</td>
                          <td>{item.created_at}</td>
                          <td>{item.updated_at}</td>
                          <td>
                            <div className='flex items-center justify-center gap-6'>
                              <span
                                className='cursor-pointer inline-block'
                                onClick={() => handleUpdate(item.id)}>
                                <img src={Pencil} alt='Pencil' />
                              </span>
                              <span
                                className='cursor-pointer inline-block'
                                onClick={() => handleDelete(item.id)}>
                                <img src={Trash} alt='Trash' />
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
      </div>
      {openModal ? (
        <Modal
          onClose={() => setOpenModal((prev) => !prev)}
          children='Apakah Anda yakin ingin menghapus'
          buttonText='Ya'
          onSubmit={handleSubmit}
          showInput={false}
        />
      ) : (
        ''
      )}
    </>
  );
};
