import { useLocation } from 'react-router-dom';
import Pencil from './../../assets/images/pencil.png';
import Trash from './../../assets/images/trash.png';

interface Props {
  showAction: boolean;
  canDelete: boolean;
}

const Table = ({ showAction, canDelete }: Props) => {
  const location = useLocation();

  return (
    <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10'>
      <table className='m-auto'>
        <thead className='bg-gradient-green text-white'>
          <tr>
            <th className='p-1 md:p-1.5 lg:p-2 '>No</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Hari</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Tanggal</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Bulan</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Tahun</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Surah</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Ayat</th>
            <th className='p-1 md:p-1.5 lg:p-2 '>Juz</th>
            {showAction && <th className='p-1 md:p-1.5 lg:p-2 '>Aksi</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Selasa</td>
            <td>13</td>
            <td>Maret</td>
            <td>2023</td>
            <td>Al-Baqarah</td>
            <td>20-23</td>
            <td>1</td>
            {showAction && (
              <td>
                <div className='flex items-center justify-center gap-6'>
                  <span className='cursor-pointer inline-block'>
                    <img src={Pencil} alt='Pencil' />
                  </span>
                  {canDelete ? (
                    <span className='cursor-pointer inline-block'>
                      <img src={Trash} alt='Trash' />
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </td>
            )}
          </tr>
          <tr>
            <td>1</td>
            <td>Selasa</td>
            <td>13</td>
            <td>Maret</td>
            <td>2023</td>
            <td>Al-Baqarah</td>
            <td>20-23</td>
            <td>1</td>
            {showAction && (
              <td>
                <div className='flex items-center justify-center gap-6'>
                  <span className='cursor-pointer inline-block'>
                    <img src={Pencil} alt='Pencil' />
                  </span>
                  {canDelete ? (
                    <span className='cursor-pointer inline-block'>
                      <img src={Trash} alt='Trash' />
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </td>
            )}
          </tr>
          <tr>
            <td>1</td>
            <td>Selasa</td>
            <td>13</td>
            <td>Maret</td>
            <td>2023</td>
            <td>Al-Baqarah</td>
            <td>20-23</td>
            <td>1</td>
            {showAction && (
              <td>
                <div className='flex items-center justify-center gap-6'>
                  <span className='cursor-pointer inline-block'>
                    <img src={Pencil} alt='Pencil' />
                  </span>
                  {canDelete ? (
                    <span className='cursor-pointer inline-block'>
                      <img src={Trash} alt='Trash' />
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;