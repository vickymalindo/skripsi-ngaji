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
