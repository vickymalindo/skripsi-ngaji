import React from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardInfo } from '../views/atoms/Cards';
import Logo from './../assets/images/Logo.png';
import Using from './../assets/images/digunakan.png';
import Instagram from './../assets/images/instagram.png';
import Ngaji from './../assets/images/orang-ngaji.png';
import Text from './../assets/images/text.png';
import Whatsapp from './../assets/images/whatsapp.png';
import Youtube from './../assets/images/youtube.png';

const Index = () => {
  const [openNavbar, setOpenNavbar] = React.useState(false);
  const [faq, setFaq] = React.useState(false);

  return (
    <>
      <header className='bg-dark-green fixed z-40 top-0 left-0 w-full'>
        <div className='py-[10px] px-[50px] md:px-[117px] flex justify-between items-center'>
          <img
            src={Logo}
            alt='Logo'
            className='w-[60px] h-[76px] md:w-[80px] md:h-[96px]'
          />
          <nav
            className={
              'rounded-br-lg rounded-bl-lg bg-dark-green sm:bg-transparent w-full sm:w-auto absolute left-0 top-24 sm:static sm:block' +
              (openNavbar ? ' block' : ' hidden')
            }>
            <ul className='list-none flex flex-col py-5 sm:py-0 sm:flex-row justify-center items-center gap-5'>
              <li>
                <Link to='/' className='text-xl md:text-2xl text-normal-yellow'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to='/login' className='text-xl md:text-2xl'>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          <FaBars
            className='cursor-pointer text-xl md:text-2xl sm:hidden'
            onClick={() => setOpenNavbar((prev) => !prev)}
          />
        </div>
      </header>
      <section className='bg-[#BFBFBF] rounded-b-2xl'>
        <div className='bg-hero h-[990px] mb-3'>
          <div className='px-[50px] sm:px-[99px] md:px-[117px] pt-[219px]'>
            <img src={Text} alt='Teks' className='mb-9' />
            <p className='text-base sm:text-lg md:text-xl mb-[46px]'>
              Membaca Al-Quran tidak pernah semudah ini sebelumnya. <br />
              Jelajahi keindahan Al-Quran dan tingkatkan spiritualitasmu dengan
              <br />
              membacanya di sini.
            </p>
            <Link
              to='#here'
              className='rounded-[30px] gradient-icon px-[20px] py-[7px] sm:px-[30px] sm:py-[10px] text-white text-base sm:text-lg md:text-xl'>
              Jelajahi Sekarang
            </Link>
            <div className='h-[400px] flex justify-start items-end'>
              <div>
                <img src={Using} alt='Digunakan Oleh' />
              </div>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto pt-3 pb-6 px-4'>
          <div className='w-max m-auto flex items-center gap-3'>
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
              progres murid. Sehingga guru maupun orangtua harus menandai murid, 
              apabila sudah menyelesaikan hafalan.'
            />
            <CardInfo
              icon='clock'
              title='Fleksibel'
              description='Dapat diakses dimana saja dan kapan saja'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='px-[50px] sm:px-[99px] md:px-[117px] py-5'>
          <h2 className='text-dark-green font-semibold text-xl sm:text-2xl md:text-3xl mb-3'>
            Tentang Kami
          </h2>
          <div className='flex justify-between items-center gap-4 flex-col lg:flex-row'>
            <img
              src={Ngaji}
              alt='Orang Ngaji'
              className='sm:w-[450px] sm:h-[267px] md:w-[550px] md:h-[367px]'
            />
            <p className='text-base sm:text-lg md:text-xl'>
              QUR’AN adalah website belajar Al-Quran digital yang dapat
              mempermudah belajar hafalanmu. Terintegrasi seperti sistem
              e-learning yang menghubungkan murid dengan guru tahfidz serta
              orangtua dapat turut serta menggantikan peran guru untuk
              anak-anaknya. <br />
              <br />
              Mudah digunakan dan dapat diakses dimanapun dan kapanpun. Pada era
              digitalisasi ini, kami berharap dapat menumbuhkan para calon
              hafidz dan hafidzah.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='px-[50px] sm:px-[99px] md:px-[117px] py-5'>
          <div
            className='flex justify-start items-center mb-3 gap-6 text-xl md:text-3xl cursor-pointer'
            onClick={() => setFaq((prev) => !prev)}>
            <h2 className='text-dark-green font-semibold'>
              Frequently Asked Question
            </h2>
            <FaChevronDown className='text-normal-yellow inline-block' />
          </div>
          {faq && (
            <ol className='list-decimal pl-10'>
              <li className='font-bold text-base sm:text-lg md:text-xl md:mb-3'>
                Bagaimana cara orangtua menggantikan peran guru?
                <p className='font-normal'>
                  Website kami dirancang agar dapat melakukan pembelajaran
                  Al-Quran secara digital. Tanpa diatas suatu instansi tertentu
                  pun, para calon hafidz/hafidzah dapat melakukan pembelajaran
                  mandiri yang dibimbing oleh orangtuanya.
                </p>
              </li>
              <li className='font-bold text-base sm:text-lg md:text-xl md:mb-3'>
                Bagaimana seorang murid dikatakan selesai dengan tugas
                hafalannya?
                <p className='font-normal'>
                  Murid dapat dikatakan selesai dengan hafalannya jika murid
                  sudah melakukan penyetoran terhadap orang tua atau guru sesuai
                  dengan tempat murid berada (jika murid berada di rumah maka
                  murid melakukan penyetoran kepada orangtua ataupun
                  sebaliknya).
                </p>
              </li>
              <li className='font-bold text-base sm:text-lg md:text-xl md:mb-3'>
                Bagaimana metode penjadwalan dari guru?
                <p className='font-normal'>
                  Guru akan membuatkan jadwal hafalan untuk semua kelasnya, yang
                  meliputi hari, tanggal, bulan, tahun, ayat, surah, dan juz.
                </p>
              </li>
              <li className='font-bold text-base sm:text-lg md:text-xl md:mb-3'>
                Bagaimana cara kerja admin?
                <p className='font-normal'>
                  Admin bertugas untuk menentukan murid dengan gurunya serta
                  orangtuanya.
                </p>
              </li>
            </ol>
          )}
        </div>
      </section>
      <footer className='bg-dark-green'>
        <div className='px-[50px] sm:px-[99px] md:px-[117px] py-[27px] sm:py-[35px]'>
          <div className='flex flex-col sm:flex-row justify-between items-start mb-3'>
            <img
              src={Logo}
              alt='Logo'
              className='block w-[80px] h-[96px] sm:w-[90px] sm:h-[106px] md:w-[105px] md:h-[121px] mb-3 sm:mb-0 sm:mt-3'
            />
            <div>
              <p className='text-normal-yellow text-lg sm:text-xl md:text-[32px] font-bold'>
                Hubungi Kami
              </p>
              <div className='flex justify-center items-center gap-10 mt-2 sm:mt-6'>
                <Link to='#'>
                  <img
                    src={Youtube}
                    alt='Browser'
                    className='w-8 h-8 sm:w-10 sm:h-10'
                  />
                </Link>
                <Link to='#'>
                  <img
                    src={Whatsapp}
                    alt='Whatsapp'
                    className='w-8 h-8 sm:w-10 sm:h-10'
                  />
                </Link>
                <Link to='#'>
                  <img
                    src={Instagram}
                    alt='Whatsapp'
                    className='w-8 h-8 sm:w-10 sm:h-10'
                  />
                </Link>
              </div>
            </div>
            <div className='flex flex-col mt-3'>
              <Link
                to='/'
                className='text-base sm:text-lg md:text-2xl inline-block mb-3 sm:mb-5 md:mb-[25px]'>
                Beranda
              </Link>
              <Link
                to='/login'
                className='text-base sm:text-lg md:text-2xl inline-block'>
                Login
              </Link>
            </div>
          </div>
          <p className='font-medium text-center text-xs sm:text-base'>
            © 2023 Semua Hak Dilindungi Undang-Undang, Marwah Qur’anic School
          </p>
        </div>
      </footer>
    </>
  );
};

export default Index;
