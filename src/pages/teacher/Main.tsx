// import React from 'react'

import { Outlet } from 'react-router-dom';
import { SidebarGuru } from '../../views/molecules/Sidebars';

const Main = () => {
  return (
    <div>
      <SidebarGuru />
      <Outlet />
    </div>
  );
};

export default Main;
