import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import {
  createKelas,
  deleteStudent,
  deleteUser,
  fetchAllKelas,
  fetchStudentsKelas,
  fetchTeachersKelas,
} from '../../fetch/api/Admin';
import { getUser } from '../../fetch/storage/Gets';
import { AllKelas } from '../../types/ApiAdmin';
import { StudentData, UserData } from '../../types/UserData';
import Button from '../../views/atoms/Button';
import { CardProfile } from '../../views/atoms/Cards';
import { DropdownInput } from '../../views/atoms/Dropdowns';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

const Class = () => {
  const [userData, setUserdata] = React.useState<any>({});
  const [allKelas, setAllKelas] = React.useState<AllKelas[]>([]);
  const [students, setStudents] = React.useState<StudentData[]>([]);
  const [teachers, setTeachers] = React.useState<UserData[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [kelas, setKelas] = React.useState('');
  const [nameKelas, setNameKelas] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [idKelas, setIdKelas] = React.useState(0);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [messageTeacher, setMessageTeacher] = React.useState<
    string | undefined
  >('');
  const [messageStudent, setMessageStudent] = React.useState<
    string | undefined
  >('');
  const [messageKelas, setMessageKelas] = React.useState<string | undefined>(
    ''
  );
  const data = localStorage.getItem('data');

  const handleCloseModal = () => {
    setMessageKelas('');
    setOpenModal((prev) => !prev);
  };

  const handleSubmit = async () => {
    const resCreateKelas = await createKelas(nameKelas);
    const { status } = resCreateKelas;
    if (status === 200) {
      const resAllKelas = await fetchAllKelas();
      setAllKelas(resAllKelas.data.data);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessageKelas('Berhasil buat kelas');
    }
  };

  const handleDelete = async (id: number, role: string) => {
    if (role === 'guru') {
      const resDeleteTeacher = await deleteUser('' + id);
      const { status } = resDeleteTeacher.data;
      if (status === 200) {
        const teachersKelas = await fetchTeachersKelas(idKelas);
        setTeachers(teachersKelas.data.data);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessageTeacher('Berhasil hapus data guru');
      } else {
        setIsError((prev) => (prev === true ? prev : !prev));
        setMessageTeacher('gaga; hapus data guru');
      }
    } else {
      const resDeleteStudent = await deleteStudent('' + id);
      const { status } = resDeleteStudent.data;
      if (status === 200) {
        const studentsKelas = await fetchStudentsKelas(idKelas);
        setStudents(studentsKelas.data.data);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessageStudent('Berhasil hapus data murid');
      } else {
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessageStudent('Berhasil hapus data murid');
      }
    }
  };

  const handleFetchUserClass = async (e: string, id: number) => {
    setIsLoading((prev) => (prev = true));
    const studentsKelas = await fetchStudentsKelas(id);
    const teachersKelas = await fetchTeachersKelas(id);
    setIdKelas(id);
    setStudents(studentsKelas.data.data);
    setTeachers(teachersKelas.data.data);
    setMessageStudent('');
    setMessageTeacher('');
    setKelas(e);
    setOpen((prev) => !prev);
    setIsLoading((prev) => (prev = false));
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const resAllKelas = await fetchAllKelas();
        const studentsKelas = await fetchStudentsKelas(
          resAllKelas.data.data[0].id
        );
        const teachersKelas = await fetchTeachersKelas(
          resAllKelas.data.data[0].id
        );
        setIdKelas(resAllKelas.data.data[0].id);
        setKelas(resAllKelas.data.data[0].nama_kelas);
        setStudents(studentsKelas.data.data);
        setTeachers(teachersKelas.data.data);
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
      <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
        <Appbar username={userData?.username} />
        <div className='flex justify-evenly items-end sm:items-start flex-col-reverse sm:flex-row'>
          <div className='box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] w-full sm:w-2/3'>
            <div className='mb-6 sm:mb-20 md:mb-40'>
              <TitlePage page={`Daftar Guru ${kelas}`} />
              {messageTeacher && (
                <div
                  className={
                    'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
                    (isError
                      ? ' text-red-800 bg-red-400'
                      : ' text-green-800 bg-green-400')
                  }>
                  <p>{messageTeacher}</p>
                </div>
              )}
              <div className='flex flex-wrap items-center gap-3'>
                {teachers.map((value) => {
                  return (
                    <CardProfile
                      key={value.id}
                      isDelete={true}
                      name={value.nama_lengkap}
                      birthdate={value.ttl}
                      handleDelete={() => handleDelete(value.id, 'guru')}
                    />
                  );
                })}
                {teachers.length === 0 ? (
                  <p className='ml-2 font-semibold text-sm sm:text-base text-center w-full'>
                    Data guru tidak ada
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div>
              <TitlePage page={`Daftar Murid ${kelas}`} />
              {messageStudent && (
                <div
                  className={
                    'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
                    (isError
                      ? ' text-red-800 bg-red-400'
                      : ' text-green-800 bg-green-400')
                  }>
                  <p>{messageStudent}</p>
                </div>
              )}
              <div className='flex flex-wrap items-center gap-3'>
                {students.map((value) => {
                  return (
                    <CardProfile
                      key={value.id}
                      isDelete={true}
                      name={value.nama_lengkap}
                      birthdate={value.ttl}
                      handleDelete={() => handleDelete(value.id, 'murid')}
                    />
                  );
                })}
                {students.length === 0 ? (
                  <p className='ml-2 font-semibold text-sm sm:text-base text-center w-full'>
                    Data murid tidak ada
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/4 mt-2 sm:mt-20 flex flex-col items-end px-3 sm:px-0'>
            <div
              className={
                'bg-dropdown-cream rounded-[10px] relative h-max cursor-pointer w-[236.49px] sm:w-full' +
                (open ? ' rounded-tl-tr' : ' rounded-[10px]')
              }>
              <div
                className='py-[10px] px-[13px] flex justify-between items-center text-dark-green'
                onClick={() => setOpen((prev) => !prev)}>
                <span className='font-bold text-lg'>{kelas}</span>
                <FaCaretDown className='font-bold text-lg' />
              </div>
              {open && (
                <DropdownInput
                  data={allKelas}
                  isCream={true}
                  passKelas={(str, id) => handleFetchUserClass(str, id)}
                />
              )}
            </div>
            <div className='w-full flex sm:justify-center justify-end'>
              <Button
                children='Buat Kelas'
                className='mt-[27px] sm:mt-[27px] sm:m-auto'
                trash={false}
                onClick={() => setOpenModal((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <Modal
          onClose={handleCloseModal}
          showInput={true}
          children='Buat Kelas'
          buttonText='Buat'
          onSubmit={handleSubmit}
          onChange={(e) => setNameKelas(e)}
          message={messageKelas}
          isError={isError}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Class;
