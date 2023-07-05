import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, fetchParents } from '../../../fetch/api/Admin';
import { getUser } from '../../../fetch/storage/Gets';
import { UserData } from '../../../types/UserData';
import Loader from '../../../views/atoms/Loader';
import Modal from '../../../views/atoms/Modal';
import Content from '../../../views/molecules/Content';
export const Parent = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [parents, setParents] = React.useState<UserData[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [id, setId] = React.useState('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const data = localStorage.getItem('data');
  const navigate = useNavigate();

  const handleUpdate = (id: number) => {
    navigate(`/admin/edit/parent/${id}`);
  };

  const handleSubmit = async () => {
    const resDelete = await deleteUser(id);
    const { status } = resDelete;
    if (status === 200) {
      const resParents = await fetchParents();
      const { status, data: datas } = resParents;
      if (status === 200) {
        setParents(datas.data);
      } else {
        setParents([]);
      }
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data Orangtua');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data Orangtua');
    }
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
        const resParents = await fetchParents();
        const { status, data: datas } = resParents;
        if (status === 200) {
          setParents(datas.data);
        } else {
          setParents([]);
        }
        setUserData(decryptedData);
        setIsLoading((prev) => (prev = false));
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
        page='Daftar Orangtua'
        showAction={true}
        canDelete={true}
        showCard={false}
        showButton={false}
        showQuranTable={false}
        dataTableUser={parents}
        update={(id) => handleUpdate(id)}
        handleDelete={(id) => handleDelete(id)}
        message={message}
        isError={isError}
      />
      {openModal ? (
        <Modal
          onClose={() => setOpenModal((prev) => !prev)}
          children='Apakah Anda yakin ingin menghapus'
          buttonText='Ya'
          onSubmit={handleSubmit}
          showInput={false}
        />
      ) : (
        ''
      )}
    </>
  );
};
