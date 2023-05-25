import React from 'react';
import { fetchMurojaah, fetchTeacherKelas } from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import { MurojaahType } from '../../types/ApiTeacher';
import Loader from '../../views/atoms/Loader';
import Content from '../../views/molecules/Content';

export const Murojaah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [kelas, setKelas] = React.useState<string | undefined>('');
  const [murojaah, setMurojaah] = React.useState<MurojaahType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const data = localStorage.getItem('data');

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const responseKelas = await fetchTeacherKelas(decryptedData.id_kelas);
        const responseMurojaah = await fetchMurojaah();
        setMurojaah(responseMurojaah);
        console.log(responseMurojaah);
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
    <Content
      username={userData?.username}
      page={'Muraja’ah ' + kelas}
      showAction={true}
      canDelete={true}
      showCard={false}
      showButton={true}
      showQuranTable={true}
      dataTableQuran={murojaah}
    />
  );
};
