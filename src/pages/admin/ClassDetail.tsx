import React from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteStudent,
  deleteUser,
  fetchKelas,
  fetchStudentsKelas,
  fetchTeachersKelas,
} from '../../fetch/api/Admin';
import { getUser } from '../../fetch/storage/Gets';
import { StudentData, UserData } from '../../types/UserData';
import { CardProfile } from '../../views/atoms/Cards';
import Loader from '../../views/atoms/Loader';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

const ClassDetail = () => {
  const [userData, setUserdata] = React.useState<any>({});
  const [students, setStudents] = React.useState<StudentData[]>([]);
  const [teachers, setTeachers] = React.useState<UserData[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [kelas, setKelas] = React.useState('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [messageTeacher, setMessageTeacher] = React.useState<
    string | undefined
  >('');
  const [messageStudent, setMessageStudent] = React.useState<
    string | undefined
  >('');
  const data = localStorage.getItem('data');
  const { id } = useParams();

  const handleDelete = async (idUser: number, role: string) => {
    if (role === 'guru') {
      const resDeleteTeacher = await deleteUser('' + idUser);
      const { status } = resDeleteTeacher.data;
      if (status === 200) {
        const teachersKelas = await fetchTeachersKelas(id);
        setTeachers(teachersKelas.data.data);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessageTeacher('Berhasil hapus data guru');
      } else {
        setIsError((prev) => (prev === true ? prev : !prev));
        setMessageTeacher('gagal hapus data guru');
      }
    } else {
      const resDeleteStudent = await deleteStudent('' + idUser);
      const { status } = resDeleteStudent.data;
      if (status === 200) {
        const studentsKelas = await fetchStudentsKelas(id);
        setStudents(studentsKelas.data.data);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessageStudent('Berhasil hapus data murid');
      } else {
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessageStudent('Berhasil hapus data murid');
      }
    }
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        setMessageTeacher('');
        setMessageStudent('');
        const decryptedData = getUser(data);
        // const resAllKelas = await fetchAllKelas();
        let resKelas;
        if (id) {
          resKelas = await fetchKelas(+id);
        }
        const studentsKelas = await fetchStudentsKelas(id);
        const teachersKelas = await fetchTeachersKelas(id);
        setKelas(resKelas?.data.data.nama_kelas);
        setStudents(studentsKelas.data.data);
        setTeachers(teachersKelas.data.data);
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
        <div className='px-2 sm:px-6'>
          <div className='box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] w-full'>
            <div className='mb-6 sm:mb-20 md:mb-40'>
              <TitlePage page={`Daftar Guru ${kelas || 'Kelas Kosong'}`} />
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
              <TitlePage page={`Daftar Murid ${kelas || 'Kelas Kosong'}`} />
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
        </div>
      </div>
    </>
  );
};

export default ClassDetail;
