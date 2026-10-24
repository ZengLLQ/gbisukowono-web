export interface ChurchContact {
  churchName: string;
  fullName: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  address: {
    street: string;
    hamlet: string;
    village: string;
    district: string;
    regency: string;
    province: string;
    postalCode: string;
    full: string;
  };
  operationalHours: {
    day: string;
    hours: string;
    status: "open" | "closed";
  }[];
  maps: {
    embedUrl: string;
    directUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  facilities: string[];
}

export const churchContact: ChurchContact = {
  churchName: "GBI Sukowono",
  fullName: "Gereja Bethel Indonesia Sukowono",
  phoneRaw: "+6281217407046",
  phoneFormatted: "0812-1740-7046",
  whatsappUrl: "https://wa.me/6281217407046",
  instagramHandle: "@gbi_sukowono",
  instagramUrl: "https://www.instagram.com/gbi_sukowono",
  address: {
    street: "Jl. Sukowono",
    hamlet: "Ragang",
    village: "Desa Sukowono",
    district: "Kec. Sukowono",
    regency: "Kabupaten Jember",
    province: "Jawa Timur",
    postalCode: "68194",
    full: "Jl. Sukowono, Ragang, Desa Sukowono, Kec. Sukowono, Kabupaten Jember, Jawa Timur 68194",
  },
  operationalHours: [
    { day: "Minggu", hours: "17.00 – 20.00 WIB", status: "open" },
    { day: "Senin", hours: "Tutup (Kecuali Hari Raya)", status: "closed" },
    { day: "Selasa", hours: "18.00 – 20.00 WIB", status: "open" },
    { day: "Rabu", hours: "Tutup (Kecuali Hari Raya)", status: "closed" },
    { day: "Kamis", hours: "Tutup (Kecuali Hari Raya)", status: "closed" },
    { day: "Jumat", hours: "18.00 – 20.00 WIB", status: "open" },
    { day: "Sabtu", hours: "Tutup (Kecuali Hari Raya)", status: "closed" },
  ],
  maps: {
    // Official Google Maps query for GBI Sukowono / Sukowono Jember
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.80918738361!2d113.8200!3d-8.0650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6cf6a3541a547%3A0x6b490d1bf4f923b7!2sSukowono%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000",
    directUrl:
      "https://maps.google.com/?q=Jl.+Sukowono,+Ragang,+Desa+Sukowono,+Kec.+Sukowono,+Kabupaten+Jember,+Jawa+Timur+68194",
    coordinates: {
      lat: -8.065,
      lng: 113.82,
    },
  },
  facilities: [
    "Ruang Ibadah Utama yang Nyaman & Sejuk",
    "Fasilitas Toilet Bersih & Terawat",
    "Area Parkir Kendaraan Jemaat",
    "Meja Penyambutan & Informasi Sekretariat",
  ],
};
