import { BsClockHistory, BsEyeFill } from 'react-icons/bs';
import { HiCalendar } from 'react-icons/hi';

interface Props {
  name: 'calendar' | 'eye' | 'clock';
  classname: string;
}

const MyIcon = ({ name, classname }: Props) => {
  const Icons: Record<Props['name'], any> = {
    calendar: <HiCalendar className={classname} />,
    eye: <BsEyeFill className={classname} />,
    clock: <BsClockHistory className={classname} />,
  };
  return Icons[name];
};

export default MyIcon;
