import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Rote } from '../../types/ApiParent';
import { MurojaahType } from '../../types/ApiTeacher';
import { UserData } from '../../types/UserData';
import Button from '../atoms/Button';
import { CardProfile } from '../atoms/Cards';
import Links from '../atoms/Links';
import { QuranTable, UserNotStudentTable } from '../atoms/Tables';
import TitlePage from '../atoms/TitlePage';
import Appbar from './Appbar';

interface Props {
  username: string;
  page: string;
  name?: string;
  group?: string;
  birthdate?: string;
  teacher?: string;
  parentName?: string;
  showAction: boolean;
  canDelete: boolean;
  showCard: boolean;
  showButton: boolean;
  showIconEye?: boolean;
  showQuranTable: boolean;
  btnParent?: boolean;
  btnParentRote?: boolean;
  dataTableQuran?: (Rote | MurojaahType)[];
  dataTableUser?: UserData[];
  createdTo?: string;
  update?: (id: number) => any;
  handleDelete?: (id: number) => any;
  handleEdit?: (id: number) => any;
  message?: string;
  isError?: boolean;
  active?: number;
  onClick?: (num: number) => void;
  addButton?: boolean;
}

const Content = ({
  username,
  page,
  name,
  group,
  birthdate,
  teacher,
  parentName,
  showAction,
  canDelete,
  showCard,
  showButton,
  showIconEye,
  showQuranTable,
  btnParent,
  dataTableQuran,
  dataTableUser,
  createdTo,
  update,
  handleDelete,
  handleEdit,
  message,
  isError,
  active,
  onClick,
  addButton,
  btnParentRote,
}: Props) => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition-all duration-300 ease-in-out-out'>
      <Appbar username={username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px] relative'>
        <TitlePage page={page} />
        {showCard ? (
          <div>
            <CardProfile
              name={name}
              group={group}
              birthdate={birthdate}
              teacher={teacher}
              isDelete={false}
            />
            {btnParent ? (
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 1
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 1 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(1)}
                />
                <Button
                  children='Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 2
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(2)}
                />
                <Button
                  children='Belum Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 0
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(0)}
                />
              </div>
            ) : btnParentRote ? (
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Belum Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 0
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(0)}
                />
                <Button
                  children='Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 1
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 1 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(1)}
                />
                <Button
                  children='Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 2
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(2)}
                />
                <Button
                  children='Belum Rumah'
                  className={
                    active === 3
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : ''
                  }
                  isActive={active === 3 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(3)}
                />
              </div>
            ) : (
              ''
            )}
          </div>
        ) : showButton ? (
          parentName ? (
            <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-dark-green mb-[29px]'>
                <p className='italic font-bold text-sm sm:text-base md:text-xl'>
                  Nama: {name}
                </p>
                <p className='italic font-bold text-sm sm:text-base md:text-xl'>
                  Nama Orangtua: {parentName}
                </p>
              </div>
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Belum Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 0
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(0)}
                />
                <Button
                  children='Sekolah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 1
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 1 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(1)}
                />
                <Button
                  children='Rumah'
                  className={
                    'mb-2 min-[650px]:mb-0 ' +
                    (active === 2
                      ? 'bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(2)}
                />
                <Button
                  children='Belum Rumah'
                  className={
                    active === 3
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : ''
                  }
                  isActive={active === 3 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(3)}
                />
              </div>
            </div>
          ) : (
            <div className='w-full flex justify-end'>
              <Links
                text='Create'
                href={`/teacher/forms/create/${createdTo}`}
                className='mb-[22px]'
                isSidebar={false}
              />
            </div>
          )
        ) : (
          ''
        )}
        {showQuranTable ? (
          <QuranTable
            showAction={showAction}
            canDelete={canDelete}
            showIconEye={showIconEye}
            data={dataTableQuran}
            update={(id) => update?.(id)}
            handleDelete={(id) => handleDelete?.(id)}
            handleEdit={(id) => handleEdit?.(id)}
            message={message}
            isError={isError}
          />
        ) : (
          <UserNotStudentTable
            showAction={showAction}
            canDelete={canDelete}
            message={message}
            isError={isError}
            data={dataTableUser}
            update={(id) => update?.(id)}
            handleDelete={(id) => handleDelete?.(id)}
          />
        )}
        {addButton && (
          <Link
            className='absolute right-0 cursor-pointer'
            to={'/parent/create/' + createdTo}>
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full flex justify-center items-center border border-dark-green'>
              <BsPlus className='text-[30px] md:text-[48px] text-dark-green inline-block' />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Content;
