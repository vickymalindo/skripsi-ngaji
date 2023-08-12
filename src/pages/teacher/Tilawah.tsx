import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  deleteTilawah,
  fetchTeacherKelas,
  fetchTilawah,
} from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import { MurojaahType } from '../../types/ApiTeacher';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import Content from '../../views/molecules/Content';

export const Tilawah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [kelas, setKelas] = React.useState<string | undefined>('');
  const [tilawah, setTilawah] = React.useState<MurojaahType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [id, setId] = React.useState('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const navigate = useNavigate();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const res = await deleteTilawah(id);
    const { status } = res;
    if (status === 200) {
      const responseTilawah = await fetchTilawah(userData.id_kelas);
      setTilawah(responseTilawah);
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data tilawah');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data tilawah');
    }
  };

  const handleUpdate = (id: number) => {
    navigate(`/teacher/forms/edit/tilawah/${id}`);
  };

  const handleDelete = (id: number) => {
    const numberIdToStr = '' + id;
    setId(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const responseKelas = await fetchTeacherKelas(decryptedData.id_kelas);
        try {
          const responseTilawah = await fetchTilawah(
            '' + decryptedData.id_kelas
          );
          setTilawah(responseTilawah);
        } catch (error) {
          setTilawah([]);
        }
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
    <>
      <Content
        username={userData?.username}
        page={'Tilawah ' + kelas}
        showAction={true}
        canDelete={true}
        showCard={false}
        showButton={true}
        showQuranTable={true}
        dataTableQuran={tilawah}
        createdTo='tilawah'
        update={(id) => handleUpdate(id)}
        handleDelete={(id) => handleDelete(id)}
        message={message}
        isError={isError}
      />
      {openModal ? (
        <Modal
          onClose={() => setOpenModal((prev) => !prev)}
          children='Apakah anda yakin ingin menghapus Tilawah?'
          showInput={false}
          buttonText='Ya'
          onSubmit={handleSubmit}
        />
      ) : null}
    </>
  );
};
