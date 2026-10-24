export interface Ministry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  coordinator?: string;
  schedule?: string;
  status: "confirmed" | "placeholder";
}

export const ministries: Ministry[] = [
  {
    id: "praise-and-worship",
    name: "Praise & Worship",
    tagline: "Membawa umat masuk ke dalam keintiman hadirat Allah melalui pujian.",
    description:
      "Tim pemuji, pemusik, dan penyanyi yang melayani dengan segenap hati dalam setiap ibadah raya, worship night, dan persekutuan doa.",
    image: "/images/worship-night.webp",
    coordinator: "[ISI NANTI: Koordinator Praise & Worship]",
    schedule: "Latihan rutin Jumat sebelum Worship Night",
    status: "confirmed",
  },
  {
    id: "multimedia-dan-sound",
    name: "Multimedia & Sound System",
    tagline: "Menyajikan firman dan pujian dengan visual serta tata suara yang jernih.",
    description:
      "Pelayanan di balik layar yang mendukung kelancaran ibadah melalui tata suara, presentasi lirik firman, dan dokumentasi foto/media.",
    image: "/images/hero-sanctuary.webp",
    coordinator: "[ISI NANTI: Koordinator Multimedia]",
    schedule: "Bertugas saat ibadah raya dan kegiatan khusus",
    status: "confirmed",
  },
  {
    id: "usher-and-hospitality",
    name: "Penyambutan (Usher & Welcoming)",
    tagline: "Menyambut setiap jemaat dan tamu baru dengan kehangatan kasih Kristus.",
    description:
      "Garda depan yang menyapa, membantu penataan tempat duduk, serta memastikan suasana ibadah tertib, nyaman, dan penuh sukacita.",
    image: "/images/fellowship-table.webp",
    coordinator: "[ISI NANTI: Koordinator Usher]",
    schedule: "Minggu mulai pukul 17.00 WIB",
    status: "confirmed",
  },
  {
    id: "doa-dan-syafaat",
    name: "Doa & Syafaat",
    tagline: "Menjadi pilar doa yang setia bagi jemaat, gereja, dan masyarakat.",
    description:
      "Kelompok pendoa yang terus bersyafaat mendahului setiap pelayanan, mendoakan jemaat yang sakit, serta pergumulan wilayah Sukowono.",
    image: "/images/open-bible.webp",
    coordinator: "[ISI NANTI: Koordinator Doa]",
    schedule: "Selasa 18.00 WIB & Doa Mandiri",
    status: "confirmed",
  },
  {
    id: "kaum-muda-dan-remaja",
    name: "Kaum Muda & Remaja (Youth)",
    tagline: "Membentuk generasi muda yang kuat iman, tangguh berkarakter, dan setia melayani.",
    description:
      "Komunitas remaja dan pemuda untuk belajar firman, berdiskusi mengenai kehidupan sehari-hari, dan saling membangun dalam pertemanan positif.",
    image: "/images/youth-group.webp",
    coordinator: "[ISI NANTI: Koordinator Kaum Muda]",
    schedule: "[ISI NANTI: Jadwal Rutin Pemuda]",
    status: "confirmed",
  },
  {
    id: "pelayanan-anak",
    name: "Pelayanan Anak (Sekolah Minggu)",
    tagline: "Menanamkan nilai-nilai kebenaran Alkitab sejak usia dini dengan sukacita.",
    description:
      "[ISI NANTI: Deskripsi pelayanan sekolah minggu / anak-anak, pembagian kelas, dan aktivitas rohani anak di GBI Sukowono].",
    image: "/images/family-walk.webp",
    coordinator: "[ISI NANTI: Koordinator Anak / Guru Sekolah Minggu]",
    schedule: "[ISI NANTI: Jadwal Ibadah Anak]",
    status: "placeholder",
  },
];
