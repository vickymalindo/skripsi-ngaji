import Content from '../../views/molecules/Content';

const Quran = () => {
  return (
    <Content
      username='Swelandiah'
      page='Penjadwalan'
      showAction={true}
      canDelete={true}
      showCard={false}
      showButton={true}
      showQuranTable={true}
    />
  );
};

export default Quran;
