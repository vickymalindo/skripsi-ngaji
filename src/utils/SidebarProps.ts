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
    text: 'Hafalan Baru',
    href: '/parent/rote',
  },
  {
    text: 'Hafalan Lama',
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
    text: 'Hafalan Baru',
    href: '/teacher/rote',
  },
  {
    text: 'Hafalan Lama',
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
    text: 'Buat Akun',
    children: [
      {
        text: 'Guru',
        href: '/admin/create/teacher',
      },
      {
        text: 'Murid/Anak',
        href: '/admin/create/student',
      },
      {
        text: 'Orangtua',
        href: '/admin/create/parent',
      },
    ],
  },
  {
    text: 'Lihat Kelas',
    href: '/admin/class',
  },
];
