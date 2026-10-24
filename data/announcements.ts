export interface Announcement {
  slug: string;
  title: string;
  category: "Ibadah" | "Pemuda" | "Komunitas" | "Hari Raya";
  date: string;
  time?: string;
  location?: string;
  excerpt: string;
  content: string;
  image: string;
  isFeatured?: boolean;
}

export const announcements: Announcement[] = [
  {
    slug: "ibadah-raya-minggu-ini",
    title: "Ibadah Raya Minggu & Perjamuan Kudus",
    category: "Ibadah",
    date: "Minggu, 18.00 WIB",
    time: "Pintu dibuka 17.00 WIB",
    location: "Ruang Ibadah Utama GBI Sukowono",
    excerpt:
      "Mari hadir beribadah bersama keluarga. Pada Minggu pertama setiap bulan diadakan sakramen Perjamuan Kudus dan penyerahan persepuluhan.",
    content: `Kami mengundang seluruh jemaat dan keluarga untuk bersekutu bersama dalam Ibadah Raya Minggu di GBI Sukowono.

Jadwal Pelaksanaan:
- Pintu dibuka pukul 17.00 WIB untuk doa pribadi dan persiapan hati.
- Ibadah dimulai tepat pukul 18.00 WIB.
- Lokasi: Jl. Sukowono, Ragang, Desa Sukowono, Kec. Sukowono, Kabupaten Jember.

Bagi jemaat yang membawa keluarga, ruang ibadah yang nyaman dan sejuk telah dipersiapkan dengan baik. Pada Minggu awal bulan, kita bersama-sama mengingat pengorbanan tubuh dan darah Kristus dalam Perjamuan Kudus.`,
    image: "/images/sunday-service.webp",
    isFeatured: true,
  },
  {
    slug: "worship-night-sukowono",
    title: "Worship Night: Hadirat yang Memulihkan",
    category: "Ibadah",
    date: "Jumat, 18.30 WIB",
    time: "18.30 - 20.00 WIB",
    location: "Ruang Ibadah Utama GBI Sukowono",
    excerpt:
      "Malam pujian dan penyembahan yang intim. Luangkan waktu di akhir pekan untuk masuk ke dalam hadirat-Nya dan disegarkan kembali.",
    content: `Worship Night adalah ruang khusus bagi jemaat dan pemuda untuk menaikkan doa serta pujian tanpa terburu-buru. 

Fokus kita adalah menyembah dalam roh dan kebenaran, menaruh beban hidup di hadapan mezbah Tuhan, dan mengalami pemulihan yang sejati. Terbuka untuk umum bagi siapa pun yang rindu mencari wajah Tuhan.`,
    image: "/images/worship-night.webp",
    isFeatured: true,
  },
  {
    slug: "persekutuan-doa-selasa",
    title: "Persekutuan Doa & Pendalaman Alkitab",
    category: "Komunitas",
    date: "Selasa, 18.00 WIB",
    time: "18.00 - 20.00 WIB",
    location: "Ruang Pertemuan GBI Sukowono",
    excerpt:
      "Menggali kebenaran Firman Tuhan secara mendalam dan berdoa syafaat bagi jemaat, keluarga, dan lingkungan sekitar Sukowono.",
    content: `Dalam persekutuan doa Selasa malam, jemaat diajak untuk membaca dan mendiskusikan Firman Tuhan bersama, dipandu oleh hamba Tuhan. 

Setelah pendalaman Alkitab, waktu dilanjutkan dengan pokok-pokok doa syafaat bagi kesembuhan jemaat yang sakit, pergumulan keluarga, pemulihan ekonomi, dan keharmonisan masyarakat.`,
    image: "/images/fellowship-table.webp",
    isFeatured: true,
  },
  {
    slug: "persekutuan-pemuda-youth",
    title: "Persekutuan Remaja & Kaum Muda",
    category: "Pemuda",
    date: "Sabtu [ISI NANTI: Jadwal Khusus Pemuda]",
    time: "[ISI NANTI: Waktu]",
    location: "GBI Sukowono",
    excerpt:
      "Wadah bagi generasi muda Sukowono untuk bertumbuh dalam iman, membangun persahabatan yang sehat, dan melayani sesama.",
    content: `Generasi muda adalah pilar penting gereja. Persekutuan ini dirancang untuk membimbing anak muda dalam menghadapi tantangan zaman melalui nilai-nilai Alkitabiah.

[ISI NANTI: Informasi jadwal rutin, kegiatan pembinaan kaum muda, dan kontak koordinator pemuda].`,
    image: "/images/youth-group.webp",
    isFeatured: false,
  },
  {
    slug: "persiapan-hari-raya-gerejawi",
    title: "Warta Peringatan Hari Raya Gerejawi",
    category: "Hari Raya",
    date: "Kalender Gerejawi 2026",
    time: "Mengikuti Pengumuman Warta Jemaat",
    location: "GBI Sukowono",
    excerpt:
      "Pengumuman ibadah peringatan hari-hari raya Kristen: Jumat Agung & Paskah, Kenaikan Tuhan Yesus, Pentakosta, dan Natal.",
    content: `GBI Sukowono senantiasa merayakan momen-momen karya keselamatan Allah sepanjang kalender gerejawi. 

Jadwal khusus ibadah hari raya gerejawi (Jumat Agung, Kebangkitan Paskah, Kenaikan, Pentakosta, dan Ibadah Natal) akan selalu diumumkan di mimbar serta melalui akun Instagram resmi @gbi_sukowono.`,
    image: "/images/open-bible.webp",
    isFeatured: false,
  },
];
