import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { hamburgerClicked } from '../../redux/features/toggleSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  sidebarAdmin,
  sidebarGuru,
  sidebarOrtu,
} from '../../utils/SidebarProps';
import { DropdownSidebar } from '../atoms/Dropdowns';
import Links from '../atoms/Links';
import Sosmed from '../atoms/Sosmed';
import Logo from './../../assets/images/Logo.png';

export const SidebarParent = () => {
  const isClick = useAppSelector((state) => state.toggle.clicked);
  const [isOpen, setIsOpen] = React.useState(isClick);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setIsOpen((prev) => (prev = isClick));
  }, [isClick]);

  return (
    <div
      className={
        'transition-all duration-300 ease-in-out opacity-0 fixed lg:opacity-100' +
        (isOpen
          ? ' opacity-100 bg-black-rgba w-full h-screen z-10'
          : ' opacity-0')
      }>
      <aside
        className={
          'lg:w-[274px] bg-dark-green fixed left-0 h-full overflow-y-scroll transition-all duration-300 ease-in-out' +
          (isOpen ? ' w-[274px]' : 'w-0')
        }>
        <div className='relative px-[9px] pt-[45px]'>
          <IoMdClose
            className='absolute text-2xl text-white right-3 top-5 opacity-100 lg:opacity-0 transition-all duration-300 ease-in-out cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              dispatch(hamburgerClicked());
            }}
          />
          <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
          <ul className='list-none'>
            {sidebarOrtu.map((val, index) => {
              if (index === 0) {
                return (
                  <DropdownSidebar
                    key={index}
                    parent='Hafalan'
                    data={val.children}
                    isCream={false}
                  />
                );
              } else {
                return (
                  <Links
                    key={index}
                    href={val.href}
                    text={val.text}
                    isSidebar={true}
                  />
                );
              }
            })}
          </ul>
        </div>
        <Sosmed height='h-[calc(100%-527.79px)]' />
      </aside>
    </div>
  );
};

export const SidebarAdmin = () => {
  const isClick = useAppSelector((state) => state.toggle.clicked);
  const [isOpen, setIsOpen] = React.useState(isClick);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setIsOpen((prev) => (prev = isClick));
  }, [isClick]);

  return (
    <div
      className={
        'transition-all duration-300 ease-in-out opacity-0 fixed lg:opacity-100' +
        (isOpen
          ? ' opacity-100 bg-black-rgba w-full h-screen z-10'
          : ' opacity-0')
      }>
      <aside
        className={
          'lg:w-[274px] bg-dark-green fixed left-0 h-full overflow-y-scroll transition-all duration-300 ease-in-out' +
          (isOpen ? ' w-[274px]' : 'w-0')
        }>
        <div className='relative px-[9px] pt-[45px]'>
          <IoMdClose
            className='absolute text-2xl text-white right-3 top-5 opacity-100 lg:opacity-0 transition-all duration-300 ease-in-out cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              dispatch(hamburgerClicked());
            }}
          />
          <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
          <ul className='list-none'>
            {sidebarAdmin.map((val, index) => {
              {
                if (index < 2) {
                  return (
                    <DropdownSidebar
                      key={index}
                      parent={val.text}
                      data={val.children}
                      isCream={false}
                    />
                  );
                } else {
                  return (
                    <Links
                      key={index}
                      href={val.href}
                      text={val.text}
                      isSidebar={true}
                    />
                  );
                }
              }
            })}
          </ul>
        </div>
        <Sosmed height='h-[calc(100%-558.79px)]' />
      </aside>
    </div>
  );
};

export const SidebarTeacher = () => {
  const isClick = useAppSelector((state) => state.toggle.clicked);
  const [isOpen, setIsOpen] = React.useState(isClick);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setIsOpen((prev) => (prev = isClick));
  }, [isClick]);

  return (
    <div
      className={
        'transition-all duration-300 ease-in-out opacity-0 fixed lg:opacity-100' +
        (isOpen
          ? ' opacity-100 bg-black-rgba w-full h-screen z-10'
          : ' opacity-0')
      }>
      <aside
        className={
          'lg:w-[274px] bg-dark-green fixed left-0 h-full overflow-y-scroll transition-all duration-300 ease-in-out' +
          (isOpen ? ' w-[274px]' : 'w-0')
        }>
        <div className='relative px-[9px] pt-[45px]'>
          <IoMdClose
            className='absolute text-2xl text-white right-3 top-5 opacity-100 lg:opacity-0 transition-all duration-300 ease-in-out cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              dispatch(hamburgerClicked());
            }}
          />
          <img src={Logo} alt='Logo' className='m-auto mb-[73px]' />
          <ul className='list-none'>
            {sidebarGuru.map((val, index) => (
              <Links
                key={index}
                href={val.href}
                text={val.text}
                isSidebar={true}
              />
            ))}
          </ul>
        </div>
        <Sosmed height='h-[calc(100%-538.82px)]' />
      </aside>
    </div>
  );
};
