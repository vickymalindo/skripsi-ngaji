import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchChild, fetchTilawah } from '../../fetch/api/Parent';
import { getToken, getUser } from '../../fetch/storage/Gets';
import { Rote } from '../../types/ApiParent';
import Loader from '../../views/atoms/Loader';
import Content from '../../views/molecules/Content';

export const Tilawah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [tilawah, setTilawah] = React.useState<Rote[]>([]);
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
          const responseTilawah = await fetchTilawah(
            globalChildDtata[0].id_kelas
          );
          setTilawah(responseTilawah);
        } catch (error) {
          setTilawah([]);
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
        page='Tilawah 4IA22'
        showAction={false}
        canDelete={false}
        showCard={false}
        showButton={false}
        showQuranTable={true}
        showChild={false}
        dataTableQuran={tilawah}
      />
    </div>
  );
};
