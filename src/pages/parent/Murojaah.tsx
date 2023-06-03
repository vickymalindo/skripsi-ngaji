import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchChild, fetchMurojaah } from '../../fetch/api/Parent';
import { getToken, getUser } from '../../fetch/storage/Gets';
import { Rote } from '../../types/ApiParent';
import Loader from '../../views/atoms/Loader';
import Content from '../../views/molecules/Content';

export const Murojaah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [murojaah, setMurojaah] = React.useState<Rote[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const data = localStorage.getItem('data');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetch() {
      if (data && token) {
        const decryptedData = getUser(data);
        const decryptedToken = getToken(token);
        let globalChildDtata;
        try {
          const { childData } = await fetchChild(decryptedToken);
          globalChildDtata = childData;
        } catch (error) {
          localStorage.clear();
          navigate('/login');
        }
        try {
          const responseMurojaah = await fetchMurojaah(
            globalChildDtata[0].id_kelas
          );
          setMurojaah(responseMurojaah);
        } catch (error) {
          setMurojaah([]);
        }

        setUserData(decryptedData);
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
        page='Hafalan Lama 4IA22'
        showAction={false}
        canDelete={false}
        showCard={false}
        showButton={false}
        showQuranTable={true}
        showChild={false}
        dataTableQuran={murojaah}
      />
    </div>
  );
};
