export interface BankAccount {
  bankName: string;
  bankCode: string;
  branch: string;
  accountNumber: string;
  accountName: string;
  isAccountNamePlaceholder: boolean;
}

export interface GivingChannel {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  details: string[];
  status: "active" | "placeholder";
}

export const bankDetails: BankAccount = {
  bankName: "BCA (Bank Central Asia)",
  bankCode: "014",
  branch: "KCP Kalisat, Jember",
  accountNumber: "3343380000",
  accountName: "[ISI NANTI: NAMA PEMILIK REKENING, konfirmasi pengurus]",
  isAccountNamePlaceholder: true,
};

export const givingChannels: GivingChannel[] = [
  {
    id: "transfer-bank",
    title: "Transfer Bank BCA",
    subtitle: "KCP Kalisat, Jember",
    badge: "Rekening Resmi",
    description:
      "Metode transfer langsung melalui ATM, Mobile Banking (m-BCA), atau Internet Banking (KlikBCA) ke rekening operasional gereja.",
    details: [
      "Bank: BCA (Bank Central Asia)",
      "KCP: Kalisat, Jember",
      "No. Rekening: 334 338 0000",
      "Atas Nama: [ISI NANTI: NAMA PEMILIK REKENING, konfirmasi pengurus]",
    ],
    status: "active",
  },
  {
    id: "langsung-ibadah",
    title: "Beri Langsung saat Ibadah",
    subtitle: "Kantong Persembahan & Kotak Persepuluhan",
    badge: "Tatap Muka",
    description:
      "Penyerahan persembahan syukur dan persepuluhan secara langsung saat menghadiri Ibadah Raya Minggu, Worship Night Jumat, atau Persekutuan Selasa.",
    details: [
      "Tersedia amplop persembahan dan persepuluhan di meja penyambutan.",
      "Kantong persembahan diedarkan saat pujian persembahan.",
      "Kotak persembahan khusus tersedia di pintu masuk ruang ibadah.",
    ],
    status: "active",
  },
  {
    id: "qris",
    title: "QRIS Gereja",
    subtitle: "Scan Semua Aplikasi Pembayaran",
    badge: "Belum Dikonfirmasi",
    description:
      "[ISI NANTI: Kode QRIS resmi gereja belum dikonfirmasi oleh pengurus. Mohon gunakan metode Transfer Bank BCA terlebih dahulu].",
    details: [
      "Status: Dalam proses verifikasi perbankan gereja.",
      "Akan mendukung GoPay, OVO, Dana, ShopeePay, dan seluruh m-Banking nasional.",
    ],
    status: "placeholder",
  },
];

export const securityNotice = {
  bankNotice:
    "GBI Sukowono hanya menggunakan rekening resmi di halaman ini dan tidak pernah meminta transfer dana pribadi melalui pesan langsung (DM Instagram).",
  instagramWarning:
    "Akun Instagram resmi kami HANYA @gbi_sukowono (menggunakan garis bawah). Akun lama @gbisukowono sudah tidak dikelola oleh pihak gereja; mohon abaikan pesan atau permintaan dari akun lama tersebut.",
  whatsappConfirmation:
    "Untuk konfirmasi persepuluhan atau pengiriman bukti transfer, jemaat dapat menghubungi WhatsApp Sekretariat di 0812-1740-7046.",
};
