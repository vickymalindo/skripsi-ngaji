import Profile from './../../assets/images/profile.png';
import MyIcon from './MyIcon';

interface Props {
  name?: string;
  group?: string;
  birthdate?: string;
  teacher?: string;
  username?: string;
  icon?: string;
  title?: string;
  description?: string;
}

export const CardProfile = ({
  name,
  group,
  birthdate,
  teacher,
  username,
}: Props) => {
  return (
    <div
      className={
        'pt-3 pb-5 pr-[35px] pl-[17px] card-shadow flex w-max h-max' +
        (username
          ? ' items-center rounded-bl-[30px]'
          : 'items-start rounded-[30px]')
      }>
      <img src={Profile} alt='profile' className='h-[48px]' />
      {username ? (
        <p className='text-base ml-2'>{username}</p>
      ) : (
        <div>
          <div>
            <span className='font-bold ml-2'>Nama : </span>
            <span>{name}</span>
          </div>
          <div>
            <span className='font-bold ml-2'>Kelas : </span>
            <span>{group}</span>
          </div>
          <div>
            <span className='font-bold ml-2'>TTL : </span>
            <span>{birthdate}</span>
          </div>
          <div>
            <span className='font-bold ml-2'>Guru : </span>
            <span>{teacher}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const CardInfo = ({ icon, title, description }: Props) => {
  return (
    <div className='relative w-[458px] h-[209px] pt-[27px] pl-[70px] pr-[34px] shadow-primary-shadow rounded-[47px] ml-3'>
      <div>
        <h3 className='font-bold text-xl'>{title}</h3>
        <p className='text-base mt-2'>{description}</p>
      </div>
      <div className='w-12 h-12 p-1.5 absolute -top-2.5 -left-1.5 rounded-full gradient-icon'>
        <MyIcon name='calendar' classname='w-full h-full' />
      </div>
    </div>
  );
};
