import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, fetchTeachers } from '../../../fetch/api/Admin';
import { getUser } from '../../../fetch/storage/Gets';
import { UserData } from '../../../types/UserData';
import Loader from '../../../views/atoms/Loader';
import Modal from '../../../views/atoms/Modal';
import Content from '../../../views/molecules/Content';

export const Teacher = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [teachers, setTeachers] = React.useState<UserData[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [id, setId] = React.useState('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const data = localStorage.getItem('data');
  const navigate = useNavigate();

  const handleUpdate = (id: number) => {
    navigate(`/admin/edit/teacher/${id}`);
  };

  const handleSubmit = async () => {
    const resDelete = await deleteUser(id);
    const { status } = resDelete;
    if (status === 200) {
      const resTeachers = await fetchTeachers();
      const { status, data: datas } = resTeachers;
      if (status === 200) {
        setTeachers(datas.data);
      } else {
        setTeachers([]);
      }
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Behasil hapus data Guru');
    } else {
      setOpenModal((prev) => !prev);
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal hapus data Guru');
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
        const resTeachers = await fetchTeachers();
        const { status, data: datas } = resTeachers;
        if (status === 200) {
          setTeachers(datas.data);
        } else {
          setTeachers([]);
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
        page='Daftar Guru'
        showAction={true}
        canDelete={true}
        showCard={false}
        showButton={false}
        showQuranTable={false}
        showChild={true}
        dataTableUser={teachers}
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
