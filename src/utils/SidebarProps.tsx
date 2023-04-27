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
        href: '/sekolah',
      },
      {
        text: 'Rumah',
        href: '/rumah',
      },
      {
        text: 'Belum Selesai',
        href: '/belum',
      },
    ],
  },
  {
    text: 'Murojaah',
    href: '/murojaah',
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

interface Arr {
  name: string;
  class: string;
}

const arr: Arr[] = [
  { name: 'Vicky', class: 'a' },
  { name: 'Vicky', class: 'a' },
];
