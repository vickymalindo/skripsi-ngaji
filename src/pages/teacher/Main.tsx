// import React from 'react'

import { Outlet } from 'react-router-dom';
import { SidebarTeacher } from '../../views/molecules/Sidebars';

const Main = () => {
  return (
    <div>
      <SidebarTeacher />
      <Outlet />
    </div>
  );
};

export default Main;
