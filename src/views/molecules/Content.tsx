import { Rote } from '../../types/ApiParent';
import Button from '../atoms/Button';
import { CardProfile } from '../atoms/Cards';
import Links from '../atoms/Links';
import { QuranTable, UserTable } from '../atoms/Tables';
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
  dataTable: Rote[];
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
  dataTable,
}: Props) => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition-all duration-300 ease-in-out-out'>
      <Appbar username={username} />
      {/* <Loader /> */}
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
                  className='mb-2 min-[522px]:mb-0'
                  trash={false}
                />
                <Button
                  children='Sekolah'
                  className='mb-2 min-[522px]:mb-0'
                  trash={false}
                />
                <Button children='Rumah' trash={false} />
              </div>
            </div>
          ) : (
            <div className='w-full flex justify-end'>
              <Links
                text='Create'
                href='/teacher/forms/create'
                className='mb-[22px]'
                isSidebar={false}
              />
            </div>
          )
        ) : (
          ''
        )}
        {/* TODO: buat tampilan jika datanya kosong */}
        {showQuranTable ? (
          <QuranTable
            showAction={showAction}
            canDelete={canDelete}
            data={dataTable}
          />
        ) : (
          <UserTable
            showAction={showAction}
            canDelete={canDelete}
            showChild={showChild}
            showParent={showParent}
            data={dataTable}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
