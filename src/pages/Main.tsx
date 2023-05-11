// import React from 'react'

import { Outlet, useLocation } from 'react-router-dom';
import {
  SidebarAdmin,
  SidebarParent,
  SidebarTeacher,
} from './../views/molecules/Sidebars';

const Main = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.includes('admin') ? (
        <SidebarAdmin />
      ) : location.pathname.includes('parent') ? (
        <SidebarParent />
      ) : (
        <SidebarTeacher />
      )}

      <Outlet />
    </div>
  );
};

export default Main;
