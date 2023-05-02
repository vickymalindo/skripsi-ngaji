// import React from 'react'

import { Outlet, useLocation } from 'react-router-dom';
import { SidebarTeacher } from '../../views/molecules/Sidebars';

const Main = () => {
  const location = useLocation();
  {
    console.log(location.pathname.includes('teacher'));
  }
  return (
    <div>
      <SidebarTeacher />
      <Outlet />
    </div>
  );
};

export default Main;
