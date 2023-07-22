import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { fetchAllStudent, postParent } from '../../../fetch/api/Admin';
import { getUser } from '../../../fetch/storage/Gets';
import { StudentData } from '../../../types/UserData';
import Button from '../../../views/atoms/Button';
import { InputFloating } from '../../../views/atoms/Inputs';
import Loader from '../../../views/atoms/Loader';
import TitlePage from '../../../views/atoms/TitlePage';
import Appbar from '../../../views/molecules/Appbar';

export const Parent = () => {
  const [userData, setUserdata] = React.useState<any>({});
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nama_lengkap, setNama_lengkap] = React.useState('');
  const [ttl, setTtl] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [child, setChild] = React.useState('');
  const [id, setId] = React.useState(0);
  const [students, setStudents] = React.useState<StudentData[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined>('');
  const data = localStorage.getItem('data');

  const handleSubmit = async () => {
    const resAddParent = await postParent(
      email,
      username,
      nama_lengkap,
      password,
      ttl,
      id
    );
    const { status } = resAddParent;
    if (status === 200) {
      setIsError((prev) => (prev === false ? prev : !prev));
      setMessage('Berhasil membuat Orangtua');
    } else {
      setIsError((prev) => (prev === true ? prev : !prev));
      setMessage('Gagal membuat Orangtua, email/username sudah digunakan');
    }
  };

  const handleChild = (childName: string, idChild: number) => {
    setChild(childName);
    setId(idChild);
  };

  React.useEffect(() => {
    (async function () {
      if (data) {
        const decryptedData = getUser(data);
        const resStudents = await fetchAllStudent();
        setStudents(resStudents.data.data);
        setUserdata(decryptedData);
        setIsLoading((prev) => (prev = false));
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={userData?.username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Pembuatan Data Orangtua' />
        <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          {message && (
            <div
              className={
                'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
                (isError
                  ? ' text-red-800 bg-red-400'
                  : ' text-green-800 bg-green-400')
              }>
              <p>{message}</p>
            </div>
          )}
          <InputFloating
            classname='mb-[39px]'
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Nama Lengkap'
            onChange={(e) => setNama_lengkap(e.target.value)}
          />
          <InputFloating
            classname='mb-[39px]'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={'relative mt-2 mb-[39px]'}>
            <div
              className='relative cursor-pointer mt-2'
              onClick={() => setOpen((prev) => !prev)}>
              <div
                className={
                  'w-full px-3 py-2 sm:px-4 sm:py-3 h-[43px] sm:h-[53px] border-dark-green border text-dark-green' +
                  (open ? ' rounded-tl-tr' : ' rounded-[10px]')
                }>
                {child}
              </div>
              <span className='absolute -top-3 left-4 px-1 bg-white text-dark-green text-base flex justify-center items-center gap-1'>
                <span>Anak</span>
                <FaCaretDown />
              </span>
            </div>
            {open && (
              <div
                className={
                  'p-3 absolute z-10 top-[45px] w-full rounded-bl-br bg-dark-green text-white max-h-48 overflow-y-auto'
                }>
                {students?.map((value, index) => {
                  return (
                    <button
                      key={index}
                      className={'block m-auto p-1 w-full hover:bg-light-green'}
                      onClick={() => handleChild(value.nama_lengkap, value.id)}>
                      {value.nama_lengkap}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <InputFloating
            classname='mb-[39px]'
            label='TTL'
            onChange={(e) => setTtl(e.target.value)}
          />
          <div className='flex w-full justify-end mt-[49px] mb-[45px] '>
            <Button children='Buat' trash={false} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
