import Table from '../atoms/Table';
import Appbar from './Appbar';

const Content = () => {
  return (
    <div className='relative left-[274px] w-[calc(100%-274px)]'>
      <Appbar />
      {/* <Loader /> */}
      <Table />
    </div>
  );
};

export default Content;
