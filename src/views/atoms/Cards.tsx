import Profile from './../../assets/images/profile.png';
import Button from './Button';
import MyIcon from './MyIcon';

interface PropsProfile {
  name?: string;
  group?: string;
  birthdate?: string;
  gender?: string;
  teacher?: string;
  username?: string;
  isDelete?: boolean;
  onClick?: () => void;
  handleDelete?: () => void;
  isOpen?: boolean;
}

interface PropsInfo {
  icon: 'calendar' | 'eye' | 'clock';
  title: string;
  description: string;
}

export const CardProfile = ({
  name,
  group,
  birthdate,
  gender,
  teacher,
  username,
  isDelete,
  onClick,
  handleDelete,
  isOpen,
}: PropsProfile) => {
  return (
    <div
      className={
        'pt-1 pb-2 pr-[22px] pl-[11px] sm:pt-2 sm:pb-3 sm:pr-[27px] sm:pl-[13px] lg:pt-3 lg:pb-5 lg:pr-[35px] lg:pl-[17px] card-shadow flex w-max h-max cursor-pointer' +
        (username
          ? ' items-center' + (isOpen ? '' : ' rounded-bl-[30px]')
          : ' items-start rounded-[30px] mb-[26px]')
      }
      onClick={onClick}>
      <img
        src={Profile}
        alt='profile'
        className='h-[30px] w-[30px] md:h-[48px]'
      />
      {username ? (
        <p className='text-base ml-2'>{username}</p>
      ) : (
        <div>
          <div className='w-[190px] whitespace-nowrap text-ellipsis overflow-hidden'>
            <span className='font-bold ml-2 text-sm sm:text-base'>Nama : </span>
            <span className='text-sm sm:text-base'>{name}</span>
          </div>
          <div className='w-[190px] whitespace-nowrap text-ellipsis overflow-hidden'>
            <span className='font-bold ml-2 text-sm sm:text-base'>TTL : </span>
            <span className='text-sm sm:text-base'>{birthdate}</span>
          </div>
          {isDelete ? (
            <Button children='Hapus' trash={true} onClick={handleDelete} />
          ) : (
            <>
              <div>
                <span className='font-bold ml-2 text-sm sm:text-base'>
                  Kelas :
                </span>
                <span className='text-sm sm:text-base'>{group}</span>
              </div>
              {gender ? (
                <div>
                  <span className='font-bold ml-2 text-sm sm:text-base'>
                    Jenis Kelamin :
                  </span>
                  <span className='text-sm sm:text-base'>{gender}</span>
                </div>
              ) : (
                <div>
                  <span className='font-bold ml-2 text-sm sm:text-base'>
                    Guru :
                  </span>
                  <span className='text-sm sm:text-base'>{teacher}</span>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export const CardInfo = ({ title, description, icon }: PropsInfo) => {
  return (
    <div className='relative w-[358px] h-[109px] sm:w-[408px] sm:h-[159px] lg:w-[458px] lg:h-[209px] pt-[15px] pl-[30px] pr-[24px] sm:pt-[23px] sm:pl-[55px] sm:pr-[30px] lg:pt-[27px] Lg:pl-[70px] lg:pr-[34px] bg-white shadow-primary-shadow rounded-[47px]'>
      <div>
        <h3 className='font-bold text-base sm:text-lg lg:text-xl'>{title}</h3>
        <p className='text-xs sm:text-sm lg:text-base mt-2'>{description}</p>
      </div>
      <div className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 p-1.5 absolute -top-2.5 -left-1.5 rounded-full gradient-icon'>
        <MyIcon name={icon} classname='w-full h-full' />
      </div>
    </div>
  );
};
