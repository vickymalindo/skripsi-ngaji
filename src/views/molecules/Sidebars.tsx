// import React from 'react'
import {
  sidebarAdmin,
  sidebarGuru,
  sidebarOrtu,
} from '../../utils/SidebarProps';
import { DropdownSidebar } from '../atoms/Dropdowns';
import Logo from './../../assets/images/Logo.png';

export const SidebarOrtu = () => {
  return (
    <aside className='w-[274px] bg-dark-green fixed left-0 min-h-full'>
      <div className='px-[9px] pt-[45px]'>
        <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
        <ul className='list-none'>
          {sidebarOrtu.map((val, index) => {
            if (index === 0) {
              return (
                <DropdownSidebar
                  key={index}
                  parent='Pengguna'
                  data={val.children}
                />
              );
            } else {
              return (
                <li key={index} className='px-8 py-1 relative mb-6'>
                  <a
                    href={val.href}
                    className='inline-block w-full text-xl line-before-after'>
                    {val.text}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
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
    </aside>
  );
};

export const SidebarGuru = () => {
  return (
    <aside className='w-[274px] bg-dark-green fixed left-0 min-h-full'>
      <div className='px-[9px] pt-[45px]'>
        <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
        <ul className='list-none'>
          {sidebarGuru.map((val, index) => {
            return (
              <li key={index} className='px-8 py-1 relative mb-6'>
                <a
                  href={val.href}
                  className='inline-block w-full text-xl line-before-after'>
                  {val.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
