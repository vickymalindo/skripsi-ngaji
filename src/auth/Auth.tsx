// import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import { UserData } from '../types/UserData';

const Auth = () => {
  // TODO: benerin klo tiap role coba pindah ke page yg bukan rolenya
  const location = useLocation();
  const navigate = useNavigate();
  const data = localStorage.getItem('data');
  if (data) {
    navigate('/login');
    const bytes = CryptoJS.AES.decrypt(
      data,
      import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
    );
    const decryptedData: UserData = JSON.parse(
      bytes.toString(CryptoJS.enc.Utf8)
    );
    const { level } = decryptedData;
    if (level) {
      if (level !== 'admin') {
        navigate(location);
      }
    }
  }

  return <div>Auth</div>;
};

export default Auth;
