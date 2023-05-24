import CryptoJS from 'crypto-js';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
      const bytes = CryptoJS.AES.decrypt(
        data,
        import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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
