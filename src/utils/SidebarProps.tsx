export type SidebarChild = {
  text: string;
  href: string;
};

interface SidebarProps {
  children?: SidebarChild[];
  text?: string;
  href?: string;
}

export const sidebarOrtu: SidebarProps[] = [
  {
    children: [
      {
        text: 'Sekolah',
        href: '/parent/rote/school',
      },
      {
        text: 'Rumah',
        href: '/parent/rote/home',
      },
      {
        text: 'Belum Selesai',
        href: '/parent/rote/ndone',
      },
    ],
  },
  {
    text: 'Murojaah',
    href: '/parent/murojaah',
  },
  {
    text: 'Tilawah',
    href: '/parent/tilawah',
  },
  {
    text: 'Profile',
    href: '/parent/profile',
  },
];

export const sidebarGuru: SidebarProps[] = [
  {
    text: 'Daftar Nama Siswa',
    href: '/teacher/students',
  },
  {
    text: 'Murojaah',
    href: '/murojaah',
  },
  {
    text: 'Penjadwalan',
    href: '/teacher/shedule',
  },
  {
    text: 'Tilawah',
    href: '/tilawah',
  },
  {
    text: 'Profile',
    href: '/profile',
  },
];

export const sidebarAdmin: SidebarProps[] = [
  {
    text: 'Pengguna',
    children: [
      {
        text: 'Guru',
        href: '/guru',
      },
      {
        text: 'Murid/Anak',
        href: '/muridanak',
      },
      {
        text: 'Orangtua',
        href: '/orangtua',
      },
    ],
  },
  {
    text: 'Buat Akun',
    children: [
      {
        text: 'Guru',
        href: '/buat/guru',
      },
      {
        text: 'Murid/Anak',
        href: '/buat/muridanak',
      },
      {
        text: 'Orangtua',
        href: '/buat/orangtua',
      },
    ],
  },
  {
    text: 'Buat Akun',
    children: [
      {
        text: 'Guru',
        href: '/buat/guru',
      },
      {
        text: 'Murid/Anak',
        href: '/buat/muridanak',
      },
      {
        text: 'Orangtua',
        href: '/buat/orangtua',
      },
    ],
  },
];
