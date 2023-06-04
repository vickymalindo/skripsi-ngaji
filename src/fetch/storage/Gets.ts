import CryptoJS from 'crypto-js';
import { UserData } from '../../types/UserData';

export const getUser = (data: string): UserData => {
  const bytesData = CryptoJS.AES.decrypt(
    data,
    import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
  );
  return JSON.parse(bytesData.toString(CryptoJS.enc.Utf8));
};

export const getToken = (token: string): string => {
  const bytesToken = CryptoJS.AES.decrypt(
    token,
    import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
  );
  return JSON.parse(bytesToken.toString(CryptoJS.enc.Utf8));
};

export const encrypt = (userData: UserData): string => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(userData),
    import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
  ).toString();
};
