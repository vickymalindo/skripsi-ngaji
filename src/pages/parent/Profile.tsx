import CryptoJS from 'crypto-js';
import React from 'react';
import Profiles from '../../views/molecules/Profiles';

const Profile = () => {
  const [userData, setUserData] = React.useState<any>({});
  const data = localStorage.getItem('data');

  React.useEffect(() => {
    if (data) {
      const bytesData = CryptoJS.AES.decrypt(
        data,
        import.meta.env.VITE_SECRET_KEY_CRYPTO_JS
      );
      const decryptedData = JSON.parse(bytesData.toString(CryptoJS.enc.Utf8));
      console.log(decryptedData);
      setUserData(decryptedData);
    }
  }, []);
  return <Profiles isParent={true} data={userData} />;
};

export default Profile;
