import Content from '../../../views/molecules/Content';

export const NotDone = () => {
  return (
    <div>
      <Content
        username='vickymalindo'
        page='Hafalan Belum Selesai'
        name='Vicky Malindo'
        group='4IA22'
        birthdate='Jakarta 17/02/01'
        teacher='Swelandiah'
        showAction={true}
        canDelete={true}
        showCard={true}
        showButton={false}
        showQuranTable={true}
        showChild={false}
      />
    </div>
  );
};
