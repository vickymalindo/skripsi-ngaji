import Content from '../../../views/molecules/Content';

const Teacher = () => {
  return (
    <Content
      username='admin'
      page='Daftar Guru'
      showAction={true}
      canDelete={true}
      showCard={false}
      showButton={false}
      showQuranTable={false}
      showChild={false}
    />
  );
};

export default Teacher;
