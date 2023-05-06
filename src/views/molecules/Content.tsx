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
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username={username} />
      {/* <Loader /> */}
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
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
