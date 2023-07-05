import axios from 'axios';
import { Kelas, Rote } from '../../types/ApiParent';
import { UserData } from '../../types/UserData';

export const fetchChild = async (token: string) => {
  const response = await axios({
    method: 'GET',
    url: import.meta.env.VITE_BASE_URL + 'ortu/datamurid',
    headers: { Accept: 'application/json', Authorization: `Bearer${token}` },
  });
  const { status } = response.data;
  const { data: childData } = response.data;
  return { status, childData };
};

export const fetchRoteChildSchool = async (
  id: number
): Promise<Rote[] | []> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datahafalanfilter/${id}/1`
  );
  const { data: childRoteSchool } = response.data;
  return childRoteSchool;
};

export const fetchRoteChildHome = async (id: number): Promise<Rote[] | []> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datahafalanfilter/${id}/2`
  );
  const { data: childRoteHome } = response.data;
  return childRoteHome;
};

export const fetchRoteChildNotDone = async (
  id: number
): Promise<Rote[] | []> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datahafalanfilter/${id}/0`
  );
  const { data: childRoteNotDone } = response.data;
  return childRoteNotDone;
};

export const fetchMurojaah = async (id: number): Promise<Rote[] | []> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datamurojaah/${id}`
  );
  const { data: murojaah } = response.data;
  return murojaah;
};

export const fetchMurojaahHome = async (id: number, status: number) => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datamurojaahfilter/${id}/${status}`
  );
  const { data: murojaah } = response.data;
  return murojaah;
};

export const fetchTilawahHome = async (id: number, status: number) => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datatilawahfilter/${id}/${status}`
  );
  const { data: murojaah } = response.data;
  return murojaah;
};

export const fetchTilawah = async (id: number): Promise<Rote[] | []> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/datatilawah/${id}`
  );
  const { data: tilawah } = response.data;
  return tilawah;
};

export const fetchChildKelas = async (nums: number): Promise<Kelas> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/kelas/${nums}`
  );
  const { id, nama_kelas } = response.data.data;
  return { id, nama_kelas };
};

export const fetchChildTeacher = async (id: number): Promise<string> => {
  const response = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/guru/${id}`
  );
  return response.data.data[0].nama_lengkap;
};

export const getProfile = async (token: string): Promise<UserData> => {
  const res = axios({
    method: 'GET',
    url: import.meta.env.VITE_BASE_URL + 'ortu/profile',
    headers: { Accept: 'application/json', Authorization: `Bearer${token}` },
  });
  const { data } = await res;
  return data.data[0];
};

export const updateProfile = async (
  id: string,
  email: string,
  username: string,
  nama_lengkap: string,
  ttl: string
) => {
  const res = await axios.put(
    import.meta.env.VITE_BASE_URL + `ortu/updateprofileortu/${id}`,
    {
      email,
      username,
      nama_lengkap,
      ttl,
    }
  );
  return res;
};

export const updateHafalan = (id: string, status: string) => {
  const res = axios.post(
    import.meta.env.VITE_BASE_URL + `ortu/updatehafalan/${id}`,
    {
      status,
    }
  );
  return res;
};

export const updateRoteStatus = async (id: string, status: number) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `ortu/updatestatushafalan/${id}`,
    { status }
  );
  return res;
};

export const updateMurojaahStatus = async (id: string, status: number) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `ortu/updatestatusmurojaah/${id}`,
    { status }
  );
  return res;
};

export const deleteMurojaahHome = async (id: string) => {
  const res = await axios.delete(
    import.meta.env.VITE_BASE_URL + `ortu/deletemurojaah/${id}`
  );

  return res;
};

export const deleteRoteHome = async (id: string) => {
  const res = await axios.delete(
    import.meta.env.VITE_BASE_URL + `ortu/deletehafalan/${id}`
  );

  return res;
};

export const deleteTilawahHome = async (id: string) => {
  const res = await axios.delete(
    import.meta.env.VITE_BASE_URL + `ortu/deletetilawah/${id}`
  );

  return res;
};

export const postMurojaahParent = async (
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'ortu/tambahmurojaah',
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};

export const postRoteParent = async (
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'ortu/tambahhafalan',
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};

export const postTilawahParent = async (
  surah: string,
  juz: string,
  ayat: string,
  decryptedToken: string
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + 'ortu/tambahtilawah',
    { surah, juz, ayat },
    {
      headers: { Authorization: `Bearer${decryptedToken}` },
    }
  );
  return res;
};

export const getDetailMurojaahParent = async (id: string | undefined) => {
  const res = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/detailmurojaahrumah/${id}`
  );

  return res;
};

export const getDetailTilawahParent = async (id: string | undefined) => {
  const res = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/detailtilawahrumah/${id}`
  );

  return res;
};

export const getDetailRoteParent = async (id: string | undefined) => {
  const res = await axios.get(
    import.meta.env.VITE_BASE_URL + `ortu/detailhafalanrumah/${id}`
  );

  return res;
};

export const editMurojaahParent = async (
  surah: string,
  juz: string,
  ayat: string,
  id: string | undefined
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `ortu/updatemurojaah/${id}`,
    {
      surah,
      juz,
      ayat,
    }
  );
  return res;
};

export const editTilawahParent = async (
  surah: string,
  juz: string,
  ayat: string,
  id: string | undefined
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `ortu/updatetilawah/${id}`,
    {
      surah,
      juz,
      ayat,
    }
  );
  return res;
};

export const editRoteParent = async (
  surah: string,
  juz: string,
  ayat: string,
  id: string | undefined
) => {
  const res = await axios.post(
    import.meta.env.VITE_BASE_URL + `ortu/updatehafalan/${id}`,
    {
      surah,
      juz,
      ayat,
    }
  );
  return res;
};
