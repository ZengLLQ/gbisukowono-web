export interface SeniorPastor {
  name: string;
  officialTitle: string;
  role: string;
  bio: string;
  image: string;
}

export interface Preacher {
  name: string;
  role: string;
  initials: string;
  imagePlaceholder?: string;
}

export const seniorPastor: SeniorPastor = {
  name: "Ps. Herman Wijaya",
  officialTitle: "Pdp. Husai Herman Wijaya",
  role: "Gembala Jemaat GBI Sukowono",
  bio: "[ISI NANTI: Profil dan perjalanan pelayanan Gembala Jemaat Pdp. Husai Herman Wijaya dalam menggembalakan jemaat GBI Sukowono, kerinduan pelayanan, dan visi pembangunan rohani jemaat].",
  image: "/images/open-bible.webp",
};

export const preachers: Preacher[] = [
  { name: "Ps. Yan Pasulu", role: "Pelayan Firman", initials: "YP" },
  { name: "Ps. William Setiabudi", role: "Pelayan Firman", initials: "WS" },
  { name: "Handry Susanto M.Th.", role: "Pelayan Firman", initials: "HS" },
  { name: "Erni Lidya M.Th.", role: "Pelayan Firman", initials: "EL" },
  { name: "Andi Anggoro M.Th.", role: "Pelayan Firman", initials: "AA" },
  { name: "Ibu Lindawati", role: "Pelayan Firman", initials: "LW" },
  { name: "Nike Wijaya", role: "Pelayan Firman", initials: "NW" },
  { name: "dr. Ivan Hendra", role: "Pelayan Firman", initials: "IH" },
  { name: "Himawan Trisno", role: "Pelayan Firman", initials: "HT" },
  { name: "Yohana Christina", role: "Pelayan Firman", initials: "YC" },
  { name: "Ps. Jane Eveline", role: "Pelayan Firman", initials: "JE" },
  { name: "Ps. Boedi Rahardja", role: "Pelayan Firman", initials: "BR" },
];

export const churchAffiliation = {
  synod: "Sinode Gereja Bethel Indonesia (GBI)",
  regionalBody: "BPD GBI Jawa Timur / PGI",
  family: "GBI Mojopahit Family (Jember)",
  statement:
    "GBI Sukowono bernaung di bawah Sinode Gereja Bethel Indonesia (BPD GBI Jawa Timur / PGI) dan bersekutu erat dalam keluarga besar GBI Mojopahit Jember. Kami berkomitmen untuk memberitakan Injil keselamatan Kristus, memuridkan jemaat, dan melayani sesama dalam kasih persaudaraan.",
};

export const faithAndValues = {
  beliefsTitle: "Keyakinan Kami",
  beliefsSubtitle: "Dasar Pengajaran & Iman Alkitabiah",
  beliefsContent:
    "[ISI NANTI: Pernyataan Pengakuan Iman resmi GBI Sukowono, merujuk pada Pengakuan Iman Sinode Gereja Bethel Indonesia / PGI].",
  valuesTitle: "Nilai-Nilai Kami",
  valuesSubtitle: "Gaya Hidup & Budaya Komunitas",
  valuesContent:
    "[ISI NANTI: Nilai-nilai inti jemaat GBI Sukowono, seperti Hadirat Tuhan, Kerendahan Hati, Kesatuan Hati, Integritas, dan Pelayanan Kasih].",
};

export const whatToExpect = [
  {
    id: "firman",
    title: "Firman yang Membangun",
    tagline: "Pengajaran Alkitabiah yang murni, relevan, dan menguatkan iman.",
    description:
      "Setiap khotbah dibawakan dengan dasar firman Tuhan yang mendalam, membimbing jemaat untuk memahami kehendak Allah dan menerapkannya dalam kehidupan sehari-hari.",
    image: "/images/open-bible.webp",
  },
  {
    id: "penyembahan",
    title: "Penyembahan yang Menjumpai Yesus",
    tagline: "Waktu teduh dan bersorak mengangkat pujian di hadirat Tuhan.",
    description:
      "Kami percaya hadirat Tuhan mengubahkan dan menyembuhkan. Suasana pujian dan penyembahan dirancang agar setiap orang dapat berfokus memandang kebaikan Kristus tanpa distraksi.",
    image: "/images/worship-night.webp",
  },
  {
    id: "komunitas",
    title: "Komunitas yang Saling Menguatkan",
    tagline: "Rumah rohani di mana Anda diterima dan dikasihi apa adanya.",
    description:
      "GBI Sukowono bukan sekadar gedung pertemuan, melainkan keluarga besar yang saling mendoakan, mendukung dalam pergumulan, dan bertumbuh bersama dalam kasih persaudaraan.",
    image: "/images/fellowship-table.webp",
  },
];
