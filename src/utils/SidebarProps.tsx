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
    text: 'Penjadwalan',
    href: '/teacher/rote',
  },
  {
    text: 'Murojaah',
    href: '/teacher/murojaah',
  },
  {
    text: 'Tilawah',
    href: '/teacher/tilawah',
  },
  {
    text: 'Profile',
    href: '/teacher/profile',
  },
];

export const sidebarAdmin: SidebarProps[] = [
  {
    text: 'Pengguna',
    children: [
      {
        text: 'Guru',
        href: '/admin/list/teacher',
      },
      {
        text: 'Murid/Anak',
        href: '/admin/list/students',
      },
      {
        text: 'Orangtua',
        href: '/admin/list/parent',
      },
    ],
  },
  {
    text: 'Kelas',
    children: [
      {
        text: '4IA22',
        href: '/4IA22',
      },
      {
        text: '4IA21',
        href: '/4IA21',
      },
      {
        text: '4IA20',
        href: '/4IA20',
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
