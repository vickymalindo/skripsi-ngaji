import { FormUser } from '../../../views/molecules/Forms';

export const Student = () => {
  return (
    <FormUser
      username='Admin'
      page='Pembuatan akun Murid/Anak'
      children='Buat'
      isClass={true}
      isNotStudent={false}
      isParent={false}
    />
  );
};
