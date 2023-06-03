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
  showQuranTable: boolean;
  showChild?: boolean;
  showParent?: boolean;
  dataTableQuran?: (Rote | MurojaahType)[];
  dataTableUser?: UserData[];
  createdTo?: string;
  update?: (id: number) => any;
  handleDelete?: (id: number) => any;
  message?: string;
  isError?: boolean;
  active?: number;
  onClick?: (num: number) => void;
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
  showQuranTable,
  showChild,
  showParent,
  dataTableQuran,
  dataTableUser,
  createdTo,
  update,
  handleDelete,
  message,
  isError,
  active,
  onClick,
}: Props) => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition-all duration-300 ease-in-out-out'>
      <Appbar username={username} />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page={page} />
        {showCard ? (
          <CardProfile
            name={name}
            group={group}
            birthdate={birthdate}
            teacher={teacher}
            isDelete={false}
          />
        ) : showButton ? (
          parentName ? (
            <div className='px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
              <div className='flex justify-between items-center text-dark-green mb-[29px]'>
                <p className='italic font-bold text-sm sm:text-base md:text-xl'>
                  Nama: {name}
                </p>
                <p className='italic font-bold text-sm sm:text-base md:text-xl'>
                  Nama Orangtua: {parentName}
                </p>
              </div>
              <div className='flex flex-wrap flex-col min-[522px]:flex-row min-[522px]:justify-around items-end min-[522px]:items-center mb-[45px]'>
                <Button
                  children='Belum'
                  className={
                    'mb-2 min-[522px]:mb-0' +
                    (active === 0
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 0 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(0)}
                />
                <Button
                  children='Sekolah'
                  className={
                    'mb-2 min-[522px]:mb-0' +
                    (active === 1
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : null)
                  }
                  isActive={active === 1 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(1)}
                />
                <Button
                  children='Rumah'
                  className={
                    active === 2
                      ? ' bg-transparent outline-dark-green text-dark-green'
                      : ''
                  }
                  isActive={active === 2 ? ' text-dark-green' : ''}
                  trash={false}
                  onClick={() => onClick?.(2)}
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
            data={dataTableQuran}
            update={(id) => update?.(id)}
            handleDelete={(id) => handleDelete?.(id)}
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
      </div>
    </div>
  );
};

export default Content;
