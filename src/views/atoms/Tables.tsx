import { Rote } from '../../types/ApiParent';
import { MurojaahType } from '../../types/ApiTeacher';
import { UserData } from '../../types/UserData';
import Pencil from './../../assets/images/pencil.png';
import Trash from './../../assets/images/trash.png';
import EmptyData from './EmptyData';

interface Props<T> {
  showAction: boolean;
  canDelete: boolean;
  showChild?: boolean;
  showParent?: boolean;
  data?: T[];
  update?: (id: number) => any;
  handleDelete?: (id: number) => any;
  message?: string;
  isError?: boolean;
}

// TODO: buat field tanggal
export const QuranTable = <T extends MurojaahType | Rote>({
  showAction,
  canDelete,
  data,
  update,
  handleDelete,
  message,
  isError,
}: Props<T>) => {
  return (
    <div>
      {message && (
        <div
          className={
            'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
            (isError
              ? ' text-red-800 bg-red-400'
              : ' text-green-800 bg-green-400')
          }>
          <p>{message}</p>
        </div>
      )}
      {data?.length === 0 ? (
        <EmptyData />
      ) : (
        <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10'>
          <table className='m-auto'>
            <thead className='bg-gradient-green text-white'>
              <tr>
                <th className='p-1 md:p-1.5 lg:p-2'>No</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Surah</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Ayat</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Juz</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Dibuat</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Diedit</th>
                {showAction && <th className='p-1 md:p-1.5 lg:p-2'>Aksi</th>}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.surah}</td>
                    <td>{item.ayat}</td>
                    <td>{item.juz}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updated_at}</td>
                    {showAction && (
                      <td>
                        <div className='flex items-center justify-center gap-6'>
                          <span
                            className='cursor-pointer inline-block'
                            onClick={() => update?.(item.id)}>
                            <img src={Pencil} alt='Pencil' />
                          </span>
                          {canDelete ? (
                            <span
                              className='cursor-pointer inline-block'
                              onClick={() => handleDelete?.(item.id)}>
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
      )}
    </div>
  );
};

export const UserNotStudentTable = <T extends UserData>({
  showAction,
  canDelete,
  data,
  update,
  handleDelete,
  message,
  isError,
}: Props<T>) => {
  return (
    <div>
      {message && (
        <div
          className={
            'px-4 py-3 rounded-lg text-base sm:text-lg xl:text-xl font-bold mb-4' +
            (isError
              ? ' text-red-800 bg-red-400'
              : ' text-green-800 bg-green-400')
          }>
          <p>{message}</p>
        </div>
      )}
      {data?.length === 0 ? (
        <EmptyData />
      ) : (
        <div className='overflow-x-scroll lg:overflow-x-auto px-4 md:px-6 lg:px-10'>
          <table className='m-auto'>
            <thead className='bg-gradient-green text-white'>
              <tr>
                <th className='p-1 md:p-1.5 lg:p-2'>No</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Username</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Email</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Nama Lengkap</th>
                <th className='p-1 md:p-1.5 lg:p-2'>TTL</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Dibuat</th>
                <th className='p-1 md:p-1.5 lg:p-2'>Diedit</th>
                {showAction && <th className='p-1 md:p-1.5 lg:p-2'>Aksi</th>}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.nama_lengkap}</td>
                    <td>{item.ttl}</td>
                    <td>{item.created_at}</td>
                    <td>{item.updated_at}</td>
                    {showAction && (
                      <td>
                        <div className='flex items-center justify-center gap-6'>
                          <span
                            className='cursor-pointer inline-block'
                            onClick={() => update?.(item.id)}>
                            <img src={Pencil} alt='Pencil' />
                          </span>
                          {canDelete ? (
                            <span
                              className='cursor-pointer inline-block'
                              onClick={() => handleDelete?.(item.id)}>
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
      )}
    </div>
  );
};
