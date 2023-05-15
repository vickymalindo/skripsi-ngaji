import { FormUser } from '../../../views/molecules/Forms';

export const Parent = () => {
  return (
    <FormUser
      username='Admin'
      page='Edit akun Orangtua'
      children='Edit'
      isClass={false}
      isNotStudent={true}
      isParent={true}
    />
  );
};
