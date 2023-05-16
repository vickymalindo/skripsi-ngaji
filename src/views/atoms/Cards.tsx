import Profile from './../../assets/images/profile.png';
import Button from './Button';
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
  isDelete: boolean;
}

export const CardProfile = ({
  name,
  group,
  birthdate,
  teacher,
  username,
  isDelete,
}: Props) => {
  return (
    <div
      className={
        'pt-1 pb-2 pr-[22px] pl-[11px] sm:pt-2 sm:pb-3 sm:pr-[27px] sm:pl-[13px] lg:pt-3 lg:pb-5 lg:pr-[35px] lg:pl-[17px] card-shadow flex w-max h-max ' +
        (username
          ? ' items-center rounded-bl-[30px]'
          : ' items-start rounded-[30px] mb-[26px]')
      }>
      <img
        src={Profile}
        alt='profile'
        className='h-[30px] w-[30px] md:h-[48px]'
      />
      {username ? (
        <p className='text-base ml-2'>{username}</p>
      ) : (
        <div>
          <div>
            <span className='font-bold ml-2 text-sm sm:text-base'>Nama : </span>
            <span className='text-sm sm:text-base'>{name}</span>
          </div>
          <div>
            <span className='font-bold ml-2 text-sm sm:text-base'>TTL : </span>
            <span className='text-sm sm:text-base'>{birthdate}</span>
          </div>
          {isDelete ? (
            <Button children='Hapus' trash={true} />
          ) : (
            <>
              <div>
                <span className='font-bold ml-2 text-sm sm:text-base'>
                  Kelas :
                </span>
                <span className='text-sm sm:text-base'>{group}</span>
              </div>
              <div>
                <span className='font-bold ml-2 text-sm sm:text-base'>
                  Guru :
                </span>
                <span className='text-sm sm:text-base'>{teacher}</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export const CardInfo = ({ title, description }: Props) => {
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
