import { FormUser } from '../../../views/molecules/Forms';

export const Teacher = () => {
  return (
    <FormUser
      username='Admin'
      page='Edit akun Guru'
      children='Edit'
      isClass={true}
      isNotStudent={true}
      isParent={false}
    />
  );
};
