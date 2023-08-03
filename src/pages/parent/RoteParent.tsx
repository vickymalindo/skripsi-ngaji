import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  deleteRoteHome,
  fetchChild,
  fetchChildKelas,
  fetchChildTeacher,
  updateRoteStatus,
} from '../../fetch/api/Parent';
import {
  fetchRoteStudent,
  fetchRoteStudentHome,
} from '../../fetch/api/Teacher';
import { getToken, getUser } from '../../fetch/storage/Gets';
import { Rote } from '../../types/ApiParent';
import { StudentData } from '../../types/UserData';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import Content from '../../views/molecules/Content';

export const RoteParent = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [userChildData, setUserChildData] = React.useState<StudentData[]>([]);
  const [activeButton, setActiveButton] = React.useState<number>(3);
  const [rote, setRote] = React.useState<Rote[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [id, setId] = React.useState('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined>('');
  const data = localStorage.getItem('data');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { status: statusCode } = await updateRoteStatus(id, 2);
    if (statusCode === 200) {
      const responseRote = await fetchRoteStudentHome(
        '' + userData.id_murid,
        0
      );
      setRote(responseRote.data.data);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Berhasil konfirmasi');
    }
    setOpenModal((prev) => !prev);
  };

  const handleDelete = async (id: number) => {
    const numberIdToStr = '' + id;
    const responseDeleteMurojaah = await deleteRoteHome(numberIdToStr);
    const { status } = responseDeleteMurojaah.data;
    if (status === 200) {
      const responseRote = await fetchRoteStudentHome(
        '' + userData.id_murid,
        0
      );
      setRote(responseRote.data.data);
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Berhasil Hapus');
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/parent/edit/rote/${id}`);
  };

  const handleUpdate = (id: number) => {
    const numberIdToStr = '' + id;
    setId(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  React.useEffect(() => {
    async function fetch() {
      if (data && token) {
        setIsLoading((prev) => (prev = true));
        setMessage('');
        setIsError(false);
        const decryptedData = getUser(data);
        const decryptedToken = getToken(token);
        let globalChildDtata;
        try {
          const { childData } = await fetchChild(decryptedToken);
          globalChildDtata = childData;
          setUserChildData(childData);
        } catch (error) {
          localStorage.clear();
          navigate('/login');
        }
        let responseRote;
        if (activeButton < 2) {
          responseRote = await fetchRoteStudent(
            '' + decryptedData.id_murid,
            activeButton
          );
        } else {
          if (activeButton === 2) {
            responseRote = await fetchRoteStudentHome(
              '' + decryptedData.id_murid,
              activeButton
            );
          } else {
            responseRote = await fetchRoteStudentHome(
              '' + decryptedData.id_murid,
              0
            );
          }
        }
        const { status } = responseRote.data;
        if (status === 200) {
          setRote(responseRote.data.data);
        } else {
          setRote([]);
        }
        const { id, nama_kelas } = await fetchChildKelas(
          globalChildDtata[0].id_kelas
        );
        const responseNameTeacher = await fetchChildTeacher(id);
        const finalUserData = {
          ...decryptedData,
          nama_kelas,
          responseNameTeacher,
        };
        setUserData(finalUserData);
        setIsLoading((prev) => (prev = false));
      }
    }

    fetch();
  }, [activeButton]);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div>
      <Content
        username={userData?.username}
        page='Hafalan Baru'
        name={userChildData[0]?.nama_lengkap || 'Data belum dimasukan'}
        group={userData?.nama_kelas || 'Data belum dimasukan'}
        birthdate={userChildData[0]?.ttl || 'Data belum dimasukan'}
        teacher={userData?.responseNameTeacher}
        showAction={activeButton !== 3 ? false : true}
        canDelete={activeButton !== 3 ? false : true}
        showIconEye={activeButton !== 3 ? false : true}
        showCard={true}
        showButton={false}
        showQuranTable={true}
        dataTableQuran={rote}
        btnParent={false}
        btnParentRote={true}
        active={activeButton}
        onClick={(nums) => setActiveButton(nums)}
        update={(id) => handleUpdate(id)}
        handleDelete={(id) => handleDelete(id)}
        handleEdit={(id) => handleEdit(id)}
        message={message}
        isError={isError}
        addButton={true}
        createdTo='rote'
      />
      {openModal ? (
        <Modal
          showInput={false}
          children='Apakah Anda yakin ingin konfirmasi?'
          onClose={() => setOpenModal((prev) => !prev)}
          onSubmit={handleSubmit}
          buttonText='Ya'
        />
      ) : null}
    </div>
  );
};
