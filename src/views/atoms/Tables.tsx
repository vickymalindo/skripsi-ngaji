import { Rote } from '../../types/ApiParent';
import Pencil from './../../assets/images/pencil.png';
import Trash from './../../assets/images/trash.png';

interface Props {
  showAction: boolean;
  canDelete: boolean;
  showChild?: boolean;
  showParent?: boolean;
  data: Rote[];
}

export const QuranTable = ({ showAction, canDelete, data }: Props) => {
  return (
    <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10'>
      <table className='m-auto'>
        <thead className='bg-gradient-green text-white'>
          <tr>
            <th className='p-1 md:p-1.5 lg:p-2'>No</th>
            <th className='p-1 md:p-1.5 lg:p-2'>Surah</th>
            <th className='p-1 md:p-1.5 lg:p-2'>Ayat</th>
            <th className='p-1 md:p-1.5 lg:p-2'>Juz</th>
            {showAction && <th className='p-1 md:p-1.5 lg:p-2'>Aksi</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.surah}</td>
                <td>{item.ayat}</td>
                <td>{item.juz}</td>
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const UserTable = ({
  showAction,
  canDelete,
  showChild,
  showParent,
}: Props) => {
  return (
    <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10'>
      <table className='m-auto'>
        <thead className='bg-gradient-green text-white'>
          <tr>
            <th className='p-1 md:p-1.5 lg:p-2'>No</th>
            <th className='p-1 md:p-1.5 lg:p-2'>Nama</th>
            {showChild ? (
              <th className='p-1 md:p-1.5 lg:p-2'>Anak</th>
            ) : (
              <th className='p-1 md:p-1.5 lg:p-2'>Kelas</th>
            )}
            {showParent && <th className='p-1 md:p-1.5 lg:p-2'>Orangtua</th>}
            <th className='p-1 md:p-1.5 lg:p-2'>Jenis Kelamin</th>
            <th className='p-1 md:p-1.5 lg:p-2'>TTL</th>
            {showAction && <th className='p-1 md:p-1.5 lg:p-2'>Aksi</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Vicky Malindo</td>
            {showChild ? <td>abcde</td> : <td>4IA22</td>}
            {showParent && <td>abcde</td>}
            <td>Laki-Laki</td>
            <td>Las Vegas, 17 Februari 2001</td>
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
            <td>2</td>
            <td>Aditya Pramudita</td>
            {showChild ? <td>abcde</td> : <td>4IA22</td>}
            {showParent && <td>abcde</td>}
            <td>Laki-Laki</td>
            <td>Paris, 01 April 2001</td>
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
            <td>3</td>
            <td>Azmi Yushari</td>
            {showChild ? <td>abcde</td> : <td>4IA22</td>}
            {showParent && <td>abcde</td>}
            <td>Laki-Laki</td>
            <td>New York, 20 Maret 2001</td>
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
