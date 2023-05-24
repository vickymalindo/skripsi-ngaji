import CryptoJS from 'crypto-js';
import React from 'react';
import { fetchChild, fetchRoteChildHome } from '../../../fetch/api/Parent';
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
        const bytesData = CryptoJS.AES.decrypt(
          data,
          import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
        );
        const decryptedData = JSON.parse(bytesData.toString(CryptoJS.enc.Utf8));
        const bytesToken = CryptoJS.AES.decrypt(
          token,
          import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
        );
        const decryptedToken = JSON.parse(
          bytesToken.toString(CryptoJS.enc.Utf8)
        );
        // TODO: buat refresh tokennya
        const { status, childData } = await fetchChild(decryptedToken);
        if (status === 200) {
          setUserChildData(childData);
        }

        const responseRoteChildSchool = await fetchRoteChildHome(
          childData[0].id
        );
        setChildRote(responseRoteChildSchool);
        setUserData(decryptedData);
        setIsLoading((prev) => (prev === false ? prev : !prev));
      }
    }

    fetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Content
        username={userData?.username}
        page='Hafalan Rumah'
        name={userChildData[0]?.nama_lengkap || 'Data belum dimasukan'}
        group='4IA22'
        birthdate={userChildData[0].ttl || 'Data belum dimasukan'}
        teacher='Swelandiah'
        showAction={false}
        canDelete={false}
        showCard={true}
        showButton={false}
        showQuranTable={true}
        showChild={false}
        dataTable={childRote}
      />
    </div>
  );
};
