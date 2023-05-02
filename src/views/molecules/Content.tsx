import { CardProfile } from '../atoms/Cards';
import Table from '../atoms/Table';
import TitlePage from '../atoms/TitlePage';
import Appbar from './Appbar';

interface Props {
  username: string;
  page: string;
  name?: string;
  group?: string;
  birthdate?: string;
  teacher?: string;
}

const Content = ({
  username,
  page,
  name,
  group,
  birthdate,
  teacher,
}: Props) => {
  return (
    <div className='relative left-[274px] w-[calc(100%-274px)]'>
      <Appbar username={username} />
      {/* <Loader /> */}
      <div className='w-full box-shadow px-7 py-7 rounded-[57px]'>
        <TitlePage page={page} />
        {name && (
          <CardProfile
            name={name}
            group={group}
            birthdate={birthdate}
            teacher={teacher}
          />
        )}

        <Table />
      </div>
    </div>
  );
};

export default Content;
