import { FormUser } from '../../../views/molecules/Forms';

export const Student = () => {
  return (
    <FormUser
      username='Admin'
      page='Edit akun Murid/Anak'
      children='Edit'
      isClass={true}
      isNotStudent={false}
      isParent={false}
    />
  );
};
