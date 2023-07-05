export interface UserData {
  created_at: string;
  deleted_at: null;
  email: string;
  email_verified_at: string;
  id: number;
  id_kelas: number;
  id_murid: number;
  level: string;
  nama_lengkap: string;
  ttl: string;
  updated_at: string;
  username: string;
}

export interface StudentData {
  created_at: string;
  deleted_at: null;
  id: number;
  id_kelas: number;
  jenis_kelamin: string;
  nama_lengkap: string;
  ttl: string;
  updated_at: string;
}
