import CryptoJS from 'crypto-js';
import React from 'react';
import { fetchChild, fetchTilawah } from '../../fetch/api/Parent';
import { Rote } from '../../types/ApiParent';
import Loader from '../../views/atoms/Loader';
import Content from '../../views/molecules/Content';

export const Tilawah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [tilawah, setTilawah] = React.useState<Rote[]>([]);
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
        const { childData } = await fetchChild(decryptedToken);

        const responseTilawah = await fetchTilawah(childData[0].id_kelas);
        setTilawah(responseTilawah);
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
        page='Tilawah 4IA22'
        showAction={false}
        canDelete={false}
        showCard={false}
        showButton={false}
        showQuranTable={true}
        showChild={false}
        dataTable={tilawah}
      />
    </div>
  );
};
