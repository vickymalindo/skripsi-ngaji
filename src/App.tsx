import Button from './views/atoms/Button';
import { CardInfo, CardProfile } from './views/atoms/Cards';
import {
  InputDefault,
  InputDropdown,
  InputFloating,
} from './views/atoms/Inputs';
import TitlePage from './views/atoms/TitlePage';

function App() {
  return (
    <div>
      <InputFloating type='text' label='Username' />
      <InputDropdown label='Kelas' />
      <InputDefault label='Nama Pengguna' password={true} />
      <InputDefault label='Nama Pengguna' />
      <div className='flex'>
        <CardProfile
          name='Vicky Malindo'
          group='4IA22'
          birthdate='17/02/01'
          teacher='Tukimin'
        />
        <CardProfile
          name='Azmi Yushar'
          group='4IA22'
          birthdate='02/03/01'
          teacher='Tukimin'
        />
        <CardProfile username='Azmi Yushari' />
      </div>
      <TitlePage page='Daftar Guru' />
      <TitlePage page='Daftar Kelas' />
      <Button children='Buat' />
      <br />
      <br />
      <CardInfo
        icon='calendar'
        title='Metode Penjadwalan'
        description='Guru dapat menjadwalkan hafalan kepada
                      murid, mulai dari hari/tanggal, juz, surah,
                      dan ayat.'
      />
      <CardInfo
        icon='eye'
        title='Dibawah Pemantauan'
        description='Guru maupun orangtua dapat memantau
                      progres murid. Sehingga guru maupun orangtua harus menandai murid, apabila sudah menyelesaikan hafalan.'
      />
    </div>
  );
}

export default App;
