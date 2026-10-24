export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "jadwal" | "persembahan" | "umum";
}

export const scheduleFaqs: FAQItem[] = [
  {
    id: "pakaian",
    question: "Apa yang harus saya kenakan saat datang beribadah?",
    answer:
      "[ISI NANTI: Penjelasan etika berpakaian jemaat. Umumnya: pakaian yang sopan, rapi, santun, dan nyaman untuk memuji serta menyembah Tuhan bersama jemaat lainnya].",
    category: "jadwal",
  },
  {
    id: "ibadah-anak",
    question: "Apakah ada ibadah khusus untuk anak-anak (Sekolah Minggu)?",
    answer:
      "[ISI NANTI: Penjelasan ruang lingkup kelas anak/sekolah minggu saat Ibadah Raya Minggu berlangsung, ketersediaan pengajar, dan ruang kelas anak].",
    category: "jadwal",
  },
  {
    id: "pertama-kali",
    question: "Bagaimana jika ini adalah kali pertama saya datang ke GBI Sukowono?",
    answer:
      "Selamat datang! Anda sangat disambut di sini. Tim penyambut (Usher) kami akan menyapa Anda di pintu depan dan membantu menunjukkan tempat duduk yang nyaman serta memberikan informasi seputar gereja. Jangan ragu menyapa rekan pengerja kami.",
    category: "jadwal",
  },
  {
    id: "waktu-hadir",
    question: "Berapa menit sebelum ibadah sebaiknya saya hadir?",
    answer:
      "Pintu ruang ibadah dibuka pukul 17.00 WIB untuk Ibadah Raya Minggu (ibadah dimulai 18.00 WIB). Kami menyarankan hadir 15–20 menit lebih awal untuk berdoa pribadi dan mempersiapkan hati dengan tenang.",
    category: "jadwal",
  },
];

export const givingFaqs: FAQItem[] = [
  {
    id: "cara-transfer",
    question: "Bagaimana cara melakukan persembahan melalui transfer bank?",
    answer:
      "Anda dapat mentransfer ke rekening resmi Bank BCA KCP Kalisat dengan No. Rekening 334 338 0000. Pastikan nomor rekening dan nama pemilik rekening sesuai sebelum menyelesaikan transaksi.",
    category: "persembahan",
  },
  {
    id: "perjamuan-persepuluhan",
    question: "Kapan sakramen Perjamuan Kudus dan penyerahan Persepuluhan diadakan?",
    answer:
      "Perjamuan Kudus dan penyerahan persepuluhan diadakan secara rutin pada Ibadah Raya Minggu pertama setiap bulan. Amplop persepuluhan juga selalu tersedia di meja penyambutan.",
    category: "persembahan",
  },
  {
    id: "konfirmasi-wa",
    question: "Apakah saya perlu mengonfirmasi setelah melakukan transfer persembahan?",
    answer:
      "Konfirmasi tidak bersifat wajib, namun jika Anda membutuhkan tanda terima warta atau mengalokasikan persembahan untuk pos khusus (misalnya: Diakonia atau Misi), Anda dapat mengirimkan bukti transfer via WhatsApp Sekretariat di 0812-1740-7046.",
    category: "persembahan",
  },
  {
    id: "keamanan-rekening",
    question: "Apakah GBI Sukowono memiliki rekening bank selain BCA?",
    answer:
      "Saat ini rekening resmi yang digunakan hanyalah rekening BCA KCP Kalisat yang tertera di halaman ini. GBI Sukowono tidak pernah meminta donasi atau transfer ke rekening pribadi perorangan melalui pesan pribadi/DM.",
    category: "persembahan",
  },
];
