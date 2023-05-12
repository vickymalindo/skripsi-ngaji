import Content from '../../../views/molecules/Content';

export const Student = () => {
  return (
    <Content
      username='admin'
      page='Daftar Anak/Murid'
      showAction={true}
      canDelete={true}
      showCard={false}
      showButton={false}
      showQuranTable={false}
      showChild={false}
      showParent={true}
    />
  );
};
