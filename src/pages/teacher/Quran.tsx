import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  deleteAllRote,
  fetchAllRote,
  fetchRote,
} from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import { Rote } from '../../types/ApiParent';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import Content from '../../views/molecules/Content';

const Quran = () => {
  // TODO: ini belom di fetch
  const [userData, setUserData] = React.useState<any>({});
  const [kelas, setKelas] = React.useState<string | undefined>('');
  const [allRote, setAllRote] = React.useState<Rote[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [id, setId] = React.useState('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const navigate = useNavigate();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const resRote = await fetchRote(id);
    const deleteRote = await deleteAllRote(resRote.data.data.id_input);
    const { status } = deleteRote.data;
    if (status === 200) {
      const resAllRote = await fetchAllRote(userData.id_kelas);
      setAllRote(resAllRote.data.data);
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data hafalan baru');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data hafalan baru');
    }
  };

  const handleDelete = (id: number) => {
    const numberIdToStr = '' + id;
    setId(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  const handleUpdate = (id: number) => {
    navigate(`/teacher/forms/edit/hafalan/${id}`);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const resAllRote = await fetchAllRote(decryptedData.id_kelas);
        setAllRote(resAllRote.data.data);
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
        page='Hafalan Baru'
        showAction={true}
        canDelete={true}
        showCard={false}
        showButton={true}
        showQuranTable={true}
        dataTableQuran={allRote}
        createdTo='Penjadwalan'
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

export default Quran;
