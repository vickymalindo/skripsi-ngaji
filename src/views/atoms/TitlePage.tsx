interface Props {
  page: string;
}

const TitlePage = ({ page }: Props) => {
  return (
    <div
      className={
        'bg-light-green py-[11px] pl-[33.47px] sm:py-[15px] sm:pl-[40.47px] lg:py-[18px] lg:pl-[60.47px] rounded-[30px] mb-[30px] border border-dark-green'
      }>
      <p className='text-sm sm:text-base lg:text-xl font-semibold'>{page}</p>
    </div>
  );
};

export default TitlePage;
