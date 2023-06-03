interface AudioQuran {
  01: string;
  02: string;
  03: string;
  04: string;
  05: string;
  06: string;
}

export interface ApiQuran {
  arti: string;
  audioFull: AudioQuran;
  deskripsi: string;
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  nomor: number;
  tempatTurun: string;
}
