import { FormUser } from '../../../views/molecules/Forms';

export const Parent = () => {
  return (
    <FormUser
      username='Admin'
      page='Pembuatan akun Guru'
      children='Buat'
      isClass={false}
      isNotStudent={true}
      isParent={true}
    />
  );
};
