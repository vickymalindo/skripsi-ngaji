import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchParent,
  fetchRoteStudent,
  fetchStudent,
  updateRoteStatusById,
} from '../../fetch/api/Teacher';
import { getUser } from '../../fetch/storage/Gets';
import Loader from '../../views/atoms/Loader';
import Modal from '../../views/atoms/Modal';
import Content from '../../views/molecules/Content';

const RoteStudent = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [student, setStudent] = React.useState<any>({});
  const [parent, setParent] = React.useState<any>({});
  const [studentRote, setStudentRote] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [activeButton, setActiveButton] = React.useState<number>(0);
  const [idRote, setIdRote] = React.useState<string>('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined>('');
  const { id } = useParams();
  const navigate = useNavigate();
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const { status: statusCode } = await updateRoteStatusById(idRote);
    if (statusCode === 200) {
      const numberIdToStr = '' + id;
      const responseRote = await fetchRoteStudent(numberIdToStr, 0);
      const { status } = responseRote;
      if (status === 200) {
        setStudentRote(responseRote.data.data);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessage('Berhasil konfirmasi');
      } else {
        setStudentRote([]);
        setIsError((prev) => (prev === false ? prev : !prev));
        setMessage('Gagal konfirmasi');
      }
    }
    setOpenModal((prev) => !prev);
  };

  const handleUpdate = (id: number) => {
    const numberIdToStr = '' + id;
    setIdRote(numberIdToStr);
    setOpenModal((prev) => !prev);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        setIsLoading((prev) => (prev = true));
        const decryptedData = getUser(data);
        const numberIdToStr = '' + id;
        const { data: datas } = await fetchStudent(numberIdToStr);
        const responseParent = await fetchParent(numberIdToStr);
        const responseRote = await fetchRoteStudent(
          numberIdToStr,
          activeButton
        );
        const { status } = responseRote;
        if (status === 200) {
          setStudentRote(responseRote.data.data);
        } else {
          setStudentRote([]);
        }
        setParent(responseParent);
        setStudent(datas.data);
        setUserData(decryptedData);
        setIsLoading((prev) => (prev = false));
      }
    })();
  }, [activeButton]);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <>
      <Content
        username={userData.username}
        page='Pantau Kegiatan Hafalan Murid'
        name={student.nama_lengkap}
        parentName={parent.nama_lengkap}
        showAction={activeButton !== 0 ? false : true}
        canDelete={false}
        showCard={false}
        showButton={true}
        showQuranTable={true}
        dataTableQuran={studentRote}
        active={activeButton}
        onClick={(nums) => setActiveButton(nums)}
        update={(id) => handleUpdate(id)}
        message={message}
        isError={isError}
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
    </>
  );
};

export default RoteStudent;
