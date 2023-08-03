import axios from 'axios';
import { MurojaahType } from '../../types/ApiTeacher';
import { StudentData, UserData } from '../../types/UserData';

export const fetchStudents = async (token: string): Promise<StudentData[]> => {
  const response = await axios({
    method: 'GET',
    url: import.meta.env.VITE_BASE_URL + 'guru/daftarmurid',
    headers: { Accept: 'application/json', Authorization: `Bearer${token}` },
  });
  return response.data.data;
};

export const fetchTeacherKelas = async (id: number) => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `guru/kelas/${id}`
  );
  const { data } = response;
  return data.data.nama_kelas;
};

export const fetchMurojaah = async (
  id_kelas: string
): Promise<MurojaahType[]> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + 'guru/daftarmurojaah/' + id_kelas
  );
  const { data } = response;
  return data.data;
};

export const fetchTilawah = async (
  id_kelas: string
): Promise<MurojaahType[]> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + 'guru/daftartilawah/' + id_kelas
  );
  const { data } = response;
  return data.data;
};

export const postRote = async (
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'guru/tambahhafalan',
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};

export const postMurojaah = async (
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'guru/tambahmurojaah',
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};

export const postTilawah = async (
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'guru/tambahtilawah',
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};

export const getDetailTilawah = async (id: string | undefined) => {
  const res = await axios.get(
    import.meta.env.VITE_BASE_URL + `guru/detailtilawah/${id}`
  );
  return res;
};

export const getDetailMurojaah = async (id: string | undefined) => {
  const res = await axios.get(
    import.meta.env.VITE_BASE_URL + `guru/detailmurojaah/${id}`
  );

  return res;
};

export const editTilawah = async (
  surah: string,
  juz: string,
  ayat: string,
  id: string | undefined
) => {
  const res = await axios.put(
    import.meta.env.VITE_BASE_URL + `guru/updatetilawah/${id}`,
    {
      surah,
      juz,
      ayat,
    }
  );
  return res;
};

export const editMurojaah = async (
  surah: string,
  juz: string,
  ayat: string,
  id: string | undefined
) => {
  const res = await axios.put(
    import.meta.env.VITE_BASE_URL + `guru/updatemurojaah/${id}`,
    {
      surah,
      juz,
      ayat,
    }
  );
  return res;
};

export const deleteTilawah = async (id: string) => {
  const res = await axios.delete(
    import.meta.env.VITE_BASE_URL + `guru/deletetilawah/${id}`
  );

  return res;
};

export const deleteMurojaah = async (id: string) => {
  const res = await axios.delete(
    import.meta.env.VITE_BASE_URL + `guru/deletemurojaah/${id}`
  );

  return res;
};

export const getProfile = async (token: string): Promise<UserData> => {
  const res = axios({
    method: 'GET',
    url: import.meta.env.VITE_BASE_URL + 'guru/profile',
    headers: { Accept: 'application/json', Authorization: `Bearer${token}` },
  });
  const { data } = await res;
  return data;
};

export const updateProfile = async (
  id: string,
  email: string,
  username: string,
  nama_lengkap: string,
  ttl: string
) => {
  const res = await axios.put(
    import.meta.env.VITE_BASE_URL + `guru/updateprofileguru/${id}`,
    {
      email,
      username,
      nama_lengkap,
      ttl,
    }
  );
  return res;
};

export const fetchStudent = (id: string) => {
  const res = axios({
    method: 'GET',
    url: import.meta.env.VITE_BASE_URL + `guru/datamurid/${id}`,
  });
  return res;
};

export const fetchParent = async (id: string): Promise<UserData> => {
  const res = await axios.get(
    import.meta.env.VITE_BASE_URL + `guru/dataortu/${id}`
  );
  const { data } = await res.data;
  return data;
};

export const fetchRoteStudent = async (id: string, status: number) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `guru/daftarhafalanfilter/${id}/${status}`
  );
  return res;
};

export const fetchRoteStudentHome = async (id: string, status: number) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datahafalanfilterumah/${id}/${status}`
  );
  return res;
};

export const updateRoteStatusById = async (id: string) => {
  const res = await axios.put(
    import.meta.env.VITE_BASE_URL + `guru/updatestatushafalan/${id}`
  );
  return res;
};

export const fetchAllRote = async (id: number) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `guru/daftarhafalandetail/${id}`
  );
  return res;
};

export const fetchRoteHafalan = async (id: number) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `guru/daftarhafalankelas/${id}`
  );
  return res;
};

export const deleteAllRote = async (id_input: string) => {
  const res = axios.delete(
    import.meta.env.VITE_BASE_URL + `guru/deleteallhafalan/${id_input}`
  );

  return res;
};

export const fetchRote = async (id: string) => {
  const res = axios.get(
    import.meta.env.VITE_BASE_URL + `guru/datahafalan/${id}`
  );
  return res;
};

export const editAllRote = async (
  id_input: string,
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = axios.post(
    import.meta.env.VITE_BASE_URL + `guru/updatehafalan/${id_input}`,
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};
