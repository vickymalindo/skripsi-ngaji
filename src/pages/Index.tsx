import { InputDefault } from '../views/atoms/Inputs';

const Index = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <InputDefault label='Username' />
      <InputDefault label='TTL' />
      <InputDefault label='Jenis Kelamin' />
      <InputDefault label='Anak' />
      <InputDefault label='Username' />
      <InputDefault label='Username' />
      <InputDefault
        label='Password'
        password={true}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Index;
