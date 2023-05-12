import { FormUser } from '../../../views/molecules/Forms';

export const Teacher = () => {
  return (
    <FormUser
      username='Admin'
      page='Pembuatan akun Guru'
      children='Buat'
      isClass={true}
      isNotStudent={false}
      isParent={false}
    />
  );
};
