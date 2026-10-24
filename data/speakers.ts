export interface SpeakerSession {
  id: string;
  name: string;
  title: string;
  date: string;
  topic: string;
  passage?: string;
  service: string;
}

export const weeklySpeakers: SpeakerSession[] = [
  {
    id: "sp-1",
    name: "Ps. Herman Wijaya",
    title: "Gembala Jemaat (Pdp. Husai Herman Wijaya)",
    date: "Minggu Terbaru",
    topic: "Hidup yang Berakar dan Berbuah di Dalam Kristus",
    passage: "Kolose 2:6-7",
    service: "Ibadah Raya Minggu 18.00 WIB",
  },
  {
    id: "sp-2",
    name: "Ps. Yan Pasulu",
    title: "Pelayan Firman Tamu",
    date: "Ibadah Raya",
    topic: "Kekuatan Doa di Tengah Ujian Hidup",
    passage: "Yakobus 5:16",
    service: "Ibadah Raya Minggu 18.00 WIB",
  },
  {
    id: "sp-3",
    name: "Handry Susanto M.Th.",
    title: "Pelayan Firman",
    date: "Ibadah Raya",
    topic: "Mengenal Kasih Karunia yang Melimpah",
    passage: "Efesus 2:8-10",
    service: "Ibadah Raya Minggu 18.00 WIB",
  },
  {
    id: "sp-4",
    name: "Ps. William Setiabudi",
    title: "Pelayan Firman",
    date: "Ibadah Raya",
    topic: "Integritas Hati Seorang Murid Kristus",
    passage: "Matius 5:8",
    service: "Ibadah Raya Minggu 18.00 WIB",
  },
  {
    id: "sp-5",
    name: "Erni Lidya M.Th.",
    title: "Pelayan Firman",
    date: "Ibadah Raya",
    topic: "Kesetiaan Tuhan di Segala Musim",
    passage: "Ratapan 3:22-23",
    service: "Ibadah Raya Minggu 18.00 WIB",
  },
  {
    id: "sp-6",
    name: "Andi Anggoro M.Th.",
    title: "Pelayan Firman",
    date: "Ibadah Raya",
    topic: "Keluarga yang Takut Akan Tuhan",
    passage: "Mazmur 128:1-4",
    service: "Ibadah Raya Minggu 18.00 WIB",
  },
];
