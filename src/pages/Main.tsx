import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUser } from '../fetch/storage/Gets';
import {
  SidebarAdmin,
  SidebarParent,
  SidebarTeacher,
} from './../views/molecules/Sidebars';

const Main = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState<any>({});
  const data = localStorage.getItem('data');

  React.useEffect(() => {
    if (!data) {
      navigate('/login');
    } else {
      const decryptedData = getUser(data);
      setUserData(decryptedData);
    }
  }, []);

  return (
    <div>
      {userData.level === 'admin' ? (
        <SidebarAdmin />
      ) : userData.level === 'Ortu' ? (
        <SidebarParent />
      ) : (
        <SidebarTeacher />
      )}

      <Outlet />
    </div>
  );
};

export default Main;
