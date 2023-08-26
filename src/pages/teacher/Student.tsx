import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchStudents, fetchTeacherKelas } from '../../fetch/api/Teacher';
import { getToken, getUser } from '../../fetch/storage/Gets';
import { StudentData } from '../../types/UserData';
import { CardProfile } from '../../views/atoms/Cards';
import Loader from '../../views/atoms/Loader';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

export const Student = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [kelas, setKelas] = React.useState<string | undefined>('');
  const [students, setStudents] = React.useState<StudentData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const data = localStorage.getItem('data');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  React.useEffect(() => {
    (async function () {
      if (data && token) {
        const decryptedData = getUser(data);
        const decryptedToken = getToken(token);
        try {
          const responseStudents = await fetchStudents(decryptedToken);
          setStudents(responseStudents);
        } catch (error) {
          setStudents([]);
        }
        const responseKelas = await fetchTeacherKelas(decryptedData.id_kelas);

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
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={userData?.username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Daftar Nama Siswa' />
        <div className='flex flex-wrap gap-y-3 gap-x-6 justify-center'>
          {students.map((item) => {
            return (
              <CardProfile
                key={item.id}
                name={item.nama_lengkap}
                group={kelas}
                birthdate={item.ttl}
                gender={item.jenis_kelamin}
                isDelete={false}
                onClick={() => navigate(`/teacher/allrote/student/${item.id}`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
