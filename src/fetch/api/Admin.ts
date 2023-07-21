import axios from 'axios';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ExportData } from '../../types/ApiAdmin';

export const fetchAllKelas = async () => {
  const res = axios.get(import.meta.env.VITE_BASE_URL + 'admin/daftarkelas');
  return res;
};

export const fetchAllStudent = async () => {
  const res = axios.get(import.meta.env.VITE_BASE_URL + 'admin/daftarmurid');
  return res;
};

export const fetchParents = async () => {
  const res = axios.get(import.meta.env.VITE_BASE_URL + 'admin/daftarortu');
  return res;
};

export const fetchTeachers = async () => {
  const res = axios.get(import.meta.env.VITE_BASE_URL + 'admin/daftarguru');
  return res;
};

export const fetchUser = async (id: string | undefined) => {
  const res = axios.get(import.meta.env.VITE_BASE_URL + `admin/getuser/${id}`);
  return res;
};

export const fetchStudent = (id: number) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `admin/datamurid/${id}`
  );
  return res;
};

export const fetchKelas = (id: number) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `admin/datakelas/${id}`
  );
  return res;
};

export const postStudent = async (
  nama_lengkap: string,
  ttl: string,
  jenis_kelamin: string,
  id_kelas: number
) => {
  const res = axios.post(import.meta.env.VITE_BASE_URL + 'admin/tambahmurid', {
    nama_lengkap,
    ttl,
    jenis_kelamin,
    id_kelas,
  });
  return res;
};

export const postParent = (
  email: string,
  username: string,
  nama_lengkap: string,
  password: string,
  ttl: string,
  id_murid: number
) => {
  const res = axios.post(
    import.meta.env.VITE_BASE_URL + 'admin/registerakunortu',
    {
      email,
      username,
      password,
      nama_lengkap,
      ttl,
      id_murid,
    }
  );
  return res;
};

export const postTeacher = (
  email: string,
  username: string,
  nama_lengkap: string,
  password: string,
  ttl: string,
  id_kelas: number
) => {
  const res = axios.post(
    import.meta.env.VITE_BASE_URL + 'admin/registerakunguru',
    {
      email,
      username,
      nama_lengkap,
      password,
      ttl,
      id_kelas,
    }
  );
  return res;
};

export const deleteUser = (id: string) => {
  const res = axios.delete(
    import.meta.env.VITE_BASE_URL + `admin/deleteuser/${id}`
  );
  return res;
};

export const updateParent = async (
  email: string,
  username: string,
  nama_lengkap: string,
  ttl: string,
  id_murid: number,
  id: string | undefined
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `admin/updateortu/${id}`,
    {
      email,
      username,
      nama_lengkap,
      ttl,
      id_murid,
    }
  );
  return res;
};

export const updateTeacher = async (
  email: string,
  username: string,
  nama_lengkap: string,
  ttl: string,
  id_kelas: number,
  id: string | undefined
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `admin/updateguru/${id}`,
    {
      email,
      username,
      nama_lengkap,
      ttl,
      id_kelas,
    }
  );
  return res;
};

export const updateMurid = async (
  id: string | undefined,
  nama_lengkap: string,
  ttl: string,
  jenis_kelamin: string,
  id_kelas: number
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `admin/updatemurid/${id}`,
    {
      nama_lengkap,
      ttl,
      jenis_kelamin,
      id_kelas,
    }
  );
  return res;
};

export const deleteStudent = async (id: string) => {
  const res = axios.delete(
    import.meta.env.VITE_BASE_URL + `admin/deletemurid/${id}`
  );
  return res;
};

export const fetchStudentsKelas = async (id: string | undefined) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `admin/muridkelas/${id}`
  );
  return res;
};

export const fetchTeachersKelas = async (id: string | undefined) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `admin/gurukelas/${id}`
  );
  return res;
};

export const createKelas = async (nama_kelas: string) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'admin/tambahkelas',
    {
      nama_kelas,
    }
  );

  return res;
};

let fileName: string;

export const datasToExport = async (
  date: string,
  dateSecond: string,
  role: string,
  typeData: string
): Promise<ExportData[]> => {
  let datas;

  if (role === 'Guru') {
    if (typeData === 'baru') {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `admin/filterlaporan/${date}/${dateSecond}`
      );
      const { data } = await res.data;
      fileName = 'Hafalan Baru Sekolah';
      datas = data;
    } else if (typeData === 'lama') {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `admin/filterlaporanlama/${date}/${dateSecond}`
      );
      const { data } = await res.data;
      fileName = 'Hafalan Lama Sekolah';
      datas = data;
    } else {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `admin/filterlaporantilawah/${date}/${dateSecond}`
      );
      const { data } = await res.data;
      fileName = 'Tilawah Sekolah';
      datas = data;
    }
  } else {
    if (typeData === 'baru') {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `admin/filterlaporanhafalanrumah/${date}/${dateSecond}`
      );
      const { data } = await res.data;
      fileName = 'Hafalan Baru Rumah';
      datas = data;
    } else if (typeData === 'lama') {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `admin/filterlaporanhafalanlamarumah/${date}/${dateSecond}`
      );
      const { data } = await res.data;
      fileName = 'Hafalan Lama Rumah';
      datas = data;
    } else {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `admin/filterlaporantilawahrumah/${date}/${dateSecond}`
      );
      const { data } = await res.data;
      fileName = 'Tilawah Rumah';
      datas = data;
    }
  }
  return datas;
};

export const excelNewRoteSchool = (
  fileType: string,
  fileExtension: string,
  datas: ExportData[]
) => {
  const ws = XLSX.utils.json_to_sheet(datas);
  const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

export const deleteKelas = async (id: number) => {
  const res = await axios.delete(
    import.meta.env.VITE_BASE_URL + `admin/deletekelas/${id}`
  );
  const { status } = await res.data;
  return status;
};

export const updateKelas = async (
  id: string | undefined,
  nama_kelas: string
) => {
  const res = await axios.put(
    import.meta.env.VITE_BASE_URL + `admin/updatekelas/${id}`,
    {
      nama_kelas,
    }
  );

  return res;
};
