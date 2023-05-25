import React from 'react';
import { getUser } from '../../fetch/storage/Gets';
import Loader from '../../views/atoms/Loader';
import Profiles from '../../views/molecules/Profiles';

const Profile = () => {
  const [userData, setUserData] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const data = localStorage.getItem('data');

  React.useEffect(() => {
    if (data) {
      const decryptedData = getUser(data);
      setUserData(decryptedData);
      setIsLoading((prev) => (prev === false ? prev : !prev));
    }
  }, []);

  if (isLoading) {
    return <Loader isWhite={true} />;
  }

  // TODO; benerin supaya bisa di ketik karena memasukan value tanpa onchange melainkan lewat props
  return <Profiles isParent={true} data={userData} />;
};

export default Profile;
