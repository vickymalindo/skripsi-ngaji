import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  deleteMurojaah,
  fetchMurojaah,
  fetchTeacherKelas,
} from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import { MurojaahType } from '../../types/ApiTeacher';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import Content from '../../views/molecules/Content';

export const Murojaah = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [kelas, setKelas] = React.useState<string | undefined>('');
  const [murojaah, setMurojaah] = React.useState<MurojaahType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [id, setId] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const navigate = useNavigate();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const res = await deleteMurojaah(id);
    const { status } = res;
    if (status === 200) {
      const responseMurojaah = await fetchMurojaah(userData.id_kelas);
      setMurojaah(responseMurojaah);
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data hafalan lama');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data hafalan lama');
    }
  };

  const handleUpdate = (id: number) => {
    navigate(`/teacher/forms/edit/murojaah/${id}`);
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
          const responseMurojaah = await fetchMurojaah(
            '' + decryptedData.id_kelas
          );
          console.log(responseMurojaah);
          setMurojaah(responseMurojaah);
        } catch (error) {
          setMurojaah([]);
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
        page={'Hafalan Lama ' + kelas}
        showAction={true}
        canDelete={true}
        showCard={false}
        showButton={true}
        showQuranTable={true}
        dataTableQuran={murojaah}
        createdTo='murojaah'
        update={(id) => handleUpdate(id)}
        handleDelete={(id) => handleDelete(id)}
        message={message}
        isError={isError}
      />
      {openModal ? (
        <Modal
          onClose={() => setOpenModal((prev) => !prev)}
          children='Apakah anda yakin ingin menghapus Murojaah'
          showInput={false}
          buttonText='Ya'
          onSubmit={handleSubmit}
        />
      ) : null}
    </>
  );
};
