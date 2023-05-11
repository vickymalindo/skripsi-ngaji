import { CardProfile } from '../../views/atoms/Cards';
import TitlePage from '../../views/atoms/TitlePage';
import Appbar from '../../views/molecules/Appbar';

export const Student = () => {
  return (
    <div className='relative left-0 w-full lg:left-[274px] lg:w-[calc(100%-274px)] transition duration-300 ease-out'>
      <Appbar username='Swelandiah' />
      <div className='w-full box-shadow px-[22px] py-[22px] lg:px-7 lg:py-7 rounded-[57px]'>
        <TitlePage page='Daftar Nama Siswa' />
        <div className='grid grid-cols-1 min-[560px]:grid-cols-2 min-[886px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 place-items-center px-[33.47px] sm:px-[40.47px] lg:px-[60.47px]'>
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
          <CardProfile
            name='Vicky Malindo'
            group='4IA22'
            birthdate='Jakarta 17/02/01'
            teacher='Swelandiah'
          />
        </div>
      </div>
    </div>
  );
};
