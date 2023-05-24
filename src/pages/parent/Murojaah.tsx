import CryptoJS from 'crypto-js';
import React from 'react';
import { fetchChild, fetchMurojaah } from '../../fetch/api/Parent';
import { Rote } from '../../types/ApiParent';
import Loader from '../../views/atoms/Loader';
import Content from '../../views/molecules/Content';

export const Murojaah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [murojaah, setMurojaah] = React.useState<Rote[]>([]);
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

        const responseMurojaah = await fetchMurojaah(childData[0].id_kelas);
        setMurojaah(responseMurojaah);
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
        page='Muraja’ah 4IA22'
        showAction={false}
        canDelete={false}
        showCard={false}
        showButton={false}
        showQuranTable={true}
        showChild={false}
        dataTable={murojaah}
      />
    </div>
  );
};
