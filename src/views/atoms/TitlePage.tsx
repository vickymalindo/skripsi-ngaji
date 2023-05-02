interface Props {
  page: string;
}

const TitlePage = ({ page }: Props) => {
  return (
    <div
      className={
        'bg-light-green py-[18px] pl-[60.47px] rounded-[30px] mb-[30px]'
      }>
      <p className='text-xl font-semibold'>{page}</p>
    </div>
  );
};

export default TitlePage;
