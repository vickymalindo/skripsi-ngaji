// import React from 'react'
import { useAppSelector } from '../../redux/store';
import {
  sidebarAdmin,
  sidebarGuru,
  sidebarOrtu,
} from '../../utils/SidebarProps';
import { DropdownSidebar } from '../atoms/Dropdowns';
import Link from '../atoms/Link';
import Sosmed from '../atoms/Sosmed';
import Logo from './../../assets/images/Logo.png';

export const SidebarParent = () => {
  const isClick = useAppSelector((state) => state.toggle.clicked);
  console.log(isClick);
  return (
    <aside className='w-[274px] bg-dark-green fixed left-0 h-full overflow-y-scroll'>
      <div className='px-[9px] pt-[45px]'>
        <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
        <ul className='list-none'>
          {sidebarOrtu.map((val, index) => {
            if (index === 0) {
              return (
                <DropdownSidebar
                  key={index}
                  parent='Hafalan'
                  data={val.children}
                />
              );
            } else {
              return <Link key={index} href={val.href} text={val.text} />;
            }
          })}
        </ul>
      </div>
      <Sosmed height='h-[calc(100%-527.79px)]' />
    </aside>
  );
};

export const SidebarAdmin = () => {
  return (
    <aside className='w-[274px] bg-dark-green fixed left-0 h-full overflow-y-scroll'>
      <div className='px-[9px] pt-[45px]'>
        <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
        <ul className='list-none'>
          {sidebarAdmin.map((val, index) => {
            return (
              <DropdownSidebar
                key={index}
                parent={val.text}
                data={val.children}
              />
            );
          })}
        </ul>
      </div>
      <Sosmed height='h-[calc(100%-558.79px)]' />
    </aside>
  );
};

export const SidebarTeacher = () => {
  return (
    <aside className='w-[274px] bg-dark-green fixed left-0 h-full'>
      <div className='px-[9px] pt-[45px]'>
        <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
        <ul className='list-none'>
          {sidebarGuru.map((val, index) => (
            <Link key={index} href={val.href} text={val.text} />
          ))}
        </ul>
      </div>
      <Sosmed height='h-[calc(100%-538.82px)]' />
    </aside>
  );
};
