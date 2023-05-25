import React from 'react';
import {
  fetchChild,
  fetchChildKelas,
  fetchChildTeacher,
  fetchRoteChildHome,
} from '../../../fetch/api/Parent';
import { getToken, getUser } from '../../../fetch/storage/Gets';
import { Rote } from '../../../types/ApiParent';
import { StudentData } from '../../../types/UserData';
import Loader from '../../../views/atoms/Loader';
import Content from '../../../views/molecules/Content';

export const Home = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [userChildData, setUserChildData] = React.useState<StudentData[]>([]);
  const [childRote, setChildRote] = React.useState<Rote[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const data = localStorage.getItem('data');
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    async function fetch() {
      if (data && token) {
        const decryptedData = getUser(data);
        const decryptedToken = getToken(token);
        // TODO: buat refresh tokennya
        const { status, childData } = await fetchChild(decryptedToken);
        if (status === 200) {
          setUserChildData(childData);
        }
        const responseRoteChildSchool = await fetchRoteChildHome(
          childData[0].id
        );
        const { id, nama_kelas } = await fetchChildKelas(childData[0].id_kelas);
        const responseNameTeacher = await fetchChildTeacher(id);
        const finalUserData = {
          ...decryptedData,
          nama_kelas,
          responseNameTeacher,
        };
        setChildRote(responseRoteChildSchool);
        setUserData(finalUserData);
        setIsLoading((prev) => (prev === false ? prev : !prev));
      }
    }

    fetch();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div>
      <Content
        username={userData?.username}
        page='Hafalan Rumah'
        name={userChildData[0]?.nama_lengkap || 'Data belum dimasukan'}
        group={userData?.nama_kelas || 'Data belum dimasukan'}
        birthdate={userChildData[0].ttl || 'Data belum dimasukan'}
        teacher={userData?.responseNameTeacher}
        showAction={false}
        canDelete={false}
        showCard={true}
        showButton={false}
        showQuranTable={true}
        showChild={false}
        dataTableQuran={childRote}
      />
    </div>
  );
};
