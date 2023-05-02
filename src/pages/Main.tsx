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
      {location.pathname.includes('teacher') ? (
        <SidebarTeacher />
      ) : location.pathname.includes('parent') ? (
        <SidebarParent />
      ) : (
        <SidebarAdmin />
      )}

      <Outlet />
    </div>
  );
};

export default Main;
