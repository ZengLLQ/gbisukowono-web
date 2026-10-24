export interface ServiceTime {
  id: string;
  name: string;
  category: "raya" | "worship" | "persekutuan" | "khusus";
  day: string;
  dayNumber: number; // 0 = Minggu, 1 = Senin, ..., 5 = Jumat, 6 = Sabtu
  time: string;
  timeStart: string; // "18:00"
  doorsOpen?: string;
  duration?: string;
  description: string;
  notes?: string;
  image: string;
}

export interface HolyDay {
  name: string;
  season: string;
  description: string;
  badge?: string;
}

export interface DaySchedule {
  dayName: string;
  dayIndex: number; // 0 = Minggu, 1 = Senin, etc.
  hasService: boolean;
  serviceTitle?: string;
  serviceId?: string;
  time?: string;
}

export const weeklySchedule: ServiceTime[] = [
  {
    id: "ibadah-raya-minggu",
    name: "Ibadah Raya Minggu",
    category: "raya",
    day: "Minggu",
    dayNumber: 0,
    time: "18.00 WIB",
    timeStart: "18:00",
    doorsOpen: "17.00 WIB",
    description:
      "Ibadah utama mingguan jemaat GBI Sukowono untuk memuji, menyembah, mendengarkan firman Tuhan, dan bersekutu bersama seluruh keluarga Allah.",
    notes: "Perjamuan Kudus & Persepuluhan diadakan pada Minggu pertama setiap bulan.",
    image: "/images/sunday-service.webp",
  },
  {
    id: "worship-night-jumat",
    name: "Worship Night",
    category: "worship",
    day: "Jumat",
    dayNumber: 5,
    time: "18.30 WIB",
    timeStart: "18:30",
    doorsOpen: "18.00 WIB",
    description:
      "Malam penyembahan yang intim dan doa bersama, ruang terbuka bagi setiap jiwa untuk mencari wajah Tuhan dan mengalami pemulihan hadirat-Nya.",
    image: "/images/worship-night.webp",
  },
  {
    id: "persekutuan-selasa",
    name: "Persekutuan Doa & Pendalaman Alkitab",
    category: "persekutuan",
    day: "Selasa",
    dayNumber: 2,
    time: "18.00 – 20.00 WIB",
    timeStart: "18:00",
    doorsOpen: "17.30 WIB",
    duration: "2 Jam",
    description:
      "Persekutuan doa tengah minggu untuk saling mendoakan jemaat, bangsa, dan mendalami kebenaran Firman Tuhan secara aplikatif.",
    image: "/images/fellowship-table.webp",
  },
];

export const weeklyTimeline: DaySchedule[] = [
  { dayName: "Senin", dayIndex: 1, hasService: false },
  {
    dayName: "Selasa",
    dayIndex: 2,
    hasService: true,
    serviceTitle: "Persekutuan Doa",
    serviceId: "persekutuan-selasa",
    time: "18.00 - 20.00 WIB",
  },
  { dayName: "Rabu", dayIndex: 3, hasService: false },
  { dayName: "Kamis", dayIndex: 4, hasService: false },
  {
    dayName: "Jumat",
    dayIndex: 5,
    hasService: true,
    serviceTitle: "Worship Night",
    serviceId: "worship-night-jumat",
    time: "18.30 WIB",
  },
  { dayName: "Sabtu", dayIndex: 6, hasService: false },
  {
    dayName: "Minggu",
    dayIndex: 0,
    hasService: true,
    serviceTitle: "Ibadah Raya",
    serviceId: "ibadah-raya-minggu",
    time: "18.00 WIB",
  },
];

export const churchHolyDays: HolyDay[] = [
  {
    name: "Jumat Agung & Paskah",
    season: "Maret / April",
    description: "Mengenang pengorbanan salib Kristus dan merayakan kebangkitan-Nya yang menang atas maut.",
    badge: "Paskah",
  },
  {
    name: "Kenaikan Tuhan Yesus",
    season: "Mei",
    description: "Ibadah syukur peringatan kenaikan Tuhan Yesus Kristus ke sorga dan janji penyertaan-Nya.",
    badge: "Kenaikan",
  },
  {
    name: "Hari Pentakosta",
    season: "Mei / Juni",
    description: "Peringatan pencurahan Roh Kudus yang memampukan dan mengurapi gereja-Nya untuk melayani.",
    badge: "Roh Kudus",
  },
  {
    name: "Ibadah & Perayaan Natal",
    season: "Desember",
    description: "Kabar sukacita kelahiran Sang Juru Selamat Yesus Kristus bagi seluruh umat manusia.",
    badge: "Natal",
  },
];
