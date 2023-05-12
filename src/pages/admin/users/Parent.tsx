import Content from '../../../views/molecules/Content';

export const Parent = () => {
  return (
    <Content
      username='admin'
      page='Daftar Orangtua'
      showAction={true}
      canDelete={true}
      showCard={false}
      showButton={false}
      showQuranTable={false}
      showChild={true}
    />
  );
};
