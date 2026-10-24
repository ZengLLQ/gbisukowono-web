# GBI Sukowono – Official Church Website (`gbisukowono-web`)

Situs web resmi multi-halaman untuk **GBI Sukowono** (Gereja Bethel Indonesia Sukowono, Kabupaten Jember, Jawa Timur, Indonesia). Dirancang dengan estetika modern, sinematik, ramah seluler (*mobile-first*), serta berperforma tinggi terinspirasi oleh standar visual internasional seperti Elevation Church dan Bethel.

---

## 📑 Daftar Isi
1. [Fitur Utama](#fitur-utama)
2. [Struktur Proyek](#struktur-proyek)
3. [Panduan Menjalankan Proyek](#panduan-menjalankan-proyek)
4. [Panduan Mengedit Konten (Untuk Pengurus Gereja)](#panduan-mengedit-konten-untuk-pengurus-gereja)
5. [Panduan Motion & Animasi (*Motion Guide*)](#panduan-motion--animasi-motion-guide)
6. [Daftar Periksa Placeholder [ISI NANTI]](#daftar-periksa-placeholder-isi-nanti)
7. [Panduan Deployment ke Vercel](#panduan-deployment-ke-vercel)
8. [Asumsi & Konfirmasi Gereja](#asumsi--konfirmasi-gereja)
9. [Bukti Verifikasi & Tangkapan Layar](#bukti-verifikasi--tangkapan-layar)

---

## 🌟 Fitur Utama

- **Next.js (App Router) + TypeScript + Tailwind CSS v4**: Arsitektur statis yang sangat cepat, ramah SEO, dan hemat data 4G.
- **Motion System (`motion/react`)**: Animasi masuk (*entrance*) yang tenang, halus, dan reveren tanpa efek lonjak (*bounce*).
- **Aksesibilitas & Standar WCAG AA**:
  - Kontras warna teks memenuhi standar WCAG AA (5.0+:1).
  - Tautan *Skip to main content* untuk navigasi keyboard.
  - Dukungan penuh `prefers-reduced-motion` (menonaktifkan parallax, zoom Ken Burns, dan transisi berat menjadi fade instan).
- **SEO & Structured Data**:
  - Schema JSON-LD bertipe `Church` / `LocalBusiness` lengkap dengan jam ibadah, alamat, koordinat, telepon, dan Instagram.
  - Metadata OpenGraph dan Twitter Card di setiap halaman.
  - `sitemap.xml` dan `robots.txt` otomatis.
- **Fitur Interaktif**:
  - Indikator Ibadah Berikutnya (*Next Service Badge*) terhitung otomatis dalam zona waktu WIB (Asia/Jakarta).
  - *Copy to Clipboard* nomor rekening Bank BCA dengan notifikasi toast 2 detik.
  - Garis waktu mingguan (*Weekly Timeline*) dengan indikator status buka/tutup.
  - Filter kategori warta jemaat dengan reflow animasi halus.
  - Form kontak langsung yang membuka aplikasi WhatsApp dengan pesan terformat.

---

## 📂 Struktur Proyek

```
f:/GBI Sukowono Branding/
├── app/
│   ├── favicon.ico
│   ├── globals.css                # Desain token Tailwind v4 & keyframes animasi
│   ├── layout.tsx                 # Root layout, font Google, header, footer, SEO schema
│   ├── page.tsx                   # Halaman 1: Beranda (Home)
│   ├── tentang/page.tsx           # Halaman 2: Tentang Kami & Para Pelayan Firman
│   ├── jadwal/page.tsx            # Halaman 3: Jadwal Ibadah, Lokasi & FAQ
│   ├── kegiatan/
│   │   ├── page.tsx               # Halaman 4: Kegiatan & Warta Jemaat (Filterable)
│   │   └── [slug]/page.tsx        # Halaman Detail Warta Dinamis
│   ├── persembahan/page.tsx       # Halaman 5: Persembahan / Menabur & Salin Rekening
│   ├── kontak/page.tsx            # Halaman 6: Kontak Sekretariat & Peta Lokasi
│   ├── pelayanan/page.tsx         # Halaman Tambahan: Bidang Pelayanan
│   ├── terlibat/page.tsx          # Halaman Tambahan: Langkah Keterlibatan
│   ├── not-found.tsx              # Halaman 404 Kustom (Bahasa Indonesia)
│   ├── robots.ts                  # Robots.txt generator
│   └── sitemap.ts                 # Sitemap.xml generator
├── components/
│   ├── home/                      # Komponen halaman Beranda
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AnnouncementsCarousel.tsx
│   │   ├── MinistriesGrid.tsx
│   │   ├── GetInvolvedSection.tsx
│   │   └── InstagramSection.tsx
│   ├── tentang/                   # Komponen halaman Tentang
│   │   ├── TentangNav.tsx         # Sticky anchor nav dengan active pill
│   │   └── PreachersGrid.tsx      # Grid pelayan firman dengan avatar inisial
│   ├── jadwal/                    # Komponen halaman Jadwal
│   │   ├── NextServiceBadge.tsx   # Kalkulasi ibadah berikutnya WIB
│   │   └── WeeklyTimeline.tsx     # Garis waktu Senin–Minggu
│   ├── kegiatan/
│   │   └── KegiatanFilterGrid.tsx # Filter chip & grid warta
│   ├── persembahan/
│   │   ├── BankCardCopy.tsx       # Kartu rekening BCA & copy toast
│   │   ├── SecurityNoticeBox.tsx  # Peringatan rekening resmi & akun palsu
│   │   └── GivingTabs.tsx         # Tab opsi cara menabur
│   ├── kontak/
│   │   └── WhatsAppContactForm.tsx# Form pesan terformat langsung ke WA
│   ├── layout/                    # Komponen tata letak global
│   │   ├── Header.tsx             # Sticky header dengan menu mobile overlay
│   │   ├── AnnouncementBar.tsx    # Banner pengumuman resmi dismissible
│   │   ├── Footer.tsx             # Footer gelap 4 kolom
│   │   ├── ClosingCtaBand.tsx     # Pita ajakan beribadah berulang
│   │   └── SkipToContent.tsx      # Tautan aksesibilitas keyboard
│   ├── motion/                    # Komponen & utilitas animasi
│   │   ├── Reveal.tsx
│   │   ├── RevealStagger.tsx
│   │   ├── TextReveal.tsx
│   │   ├── ImageReveal.tsx
│   │   ├── Parallax.tsx
│   │   ├── Magnetic.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── useIsDesktop.ts
│   └── ui/
│       ├── Icons.tsx              # Koleksi ikon SVG inline mandiri
│       └── Accordion.tsx          # Akordion FAQ aksesibel
├── data/                          # SATU-SATUNYA TEMPAT MENGEDIT KONTEN
│   ├── announcements.ts           # Warta dan kegiatan gereja
│   ├── contact.ts                 # Alamat, telepon WA, IG, jam operasional
│   ├── faqs.ts                    # FAQ jadwal ibadah dan persembahan
│   ├── giving.ts                  # Data rekening BCA dan pengumuman keamanan
│   ├── leaders.ts                 # Gembala jemaat, pelayan firman, nilai iman
│   ├── ministries.ts              # Daftar bidang pelayanan jemaat
│   ├── schedule.ts                # Jadwal ibadah rutin dan hari raya gerejawi
│   └── speakers.ts                # Pembicara mingguan dan tema khotbah
├── lib/
│   └── motion.ts                  # Token resmi durasi, easing, jarak animasi
├── public/
│   ├── images/                    # Gambar teroptimasi WebP
│   └── screenshots/               # Bukti verifikasi visual (desktop & mobile)
└── scripts/
    ├── optimize-images.mjs        # Utilitas kompresi foto ke WebP
    └── verify-site.mjs            # Pengujian visual otomatis Playwright
```

---

## 🚀 Panduan Menjalankan Proyek

### Prasyarat
- Node.js versi 18.17+ atau 20+ (direkomendasikan v20+)
- npm / pnpm / yarn

### Instalasi & Menjalankan Lokal

```bash
# 1. Masuk ke direktori proyek
cd "f:/GBI Sukowono Branding"

# 2. Instal dependensi (jika belum)
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000).

### Build Produksi

```bash
# Build aplikasi untuk produksi
npm run build

# Menjalankan build produksi secara lokal
npm start
```

---

## ✍️ Panduan Mengedit Konten (Untuk Pengurus Gereja)

Situs ini dirancang agar **pengurus gereja atau sekretariat dapat memperbarui jadwal, pembicara, warta, nomor rekening, dan informasi kontak tanpa menyentuh file komponen UI**. Semua data disimpan di folder `/data`:

| File | Konten yang Dapat Diperbarui |
|---|---|
| `data/schedule.ts` | Jam ibadah Minggu, Worship Night, Persekutuan Doa, dan Hari Raya Gerejawi. |
| `data/announcements.ts` | Judul kegiatan, tanggal, kategori, foto, dan isi lengkap warta jemaat. |
| `data/speakers.ts` | Nama pengkhotbah mingguan, tema khotbah, ayat Alkitab, dan tanggal. |
| `data/giving.ts` | Nomor rekening Bank BCA, nama pemilik rekening, dan instruksi persembahan. |
| `data/contact.ts` | Nomor WhatsApp sekretariat, alamat gereja, tautan Google Maps, jam operasional. |
| `data/leaders.ts` | Profil Gembala Jemaat, daftar nama pelayan firman, dan nilai inti gereja. |
| `data/ministries.ts` | Tim pelayanan (Praise & Worship, Multimedia, Usher, Doa, Pemuda, Anak). |
| `data/faqs.ts` | Pertanyaan dan jawaban yang sering diajukan jemaat. |

---

## 🎬 Panduan Motion & Animasi (*Motion Guide*)

Seluruh nilai animasi dipusatkan di [`lib/motion.ts`](file:///f:/GBI%20Sukowono%20Branding/lib/motion.ts) agar tidak terjadi inkonsistensi durasi atau kurva kurva percepatan (*easing*).

### Token Motion Resmi
- **Durasi**:
  - `fast: 0.25s` (hover, toggle, feedback instan)
  - `base: 0.6s` (fade-up section, pergeseran kartu)
  - `slow: 1.0s` (reveal teks masked, reveal gambar clip-path)
  - `kenBurns: 1.6s` (zoom latar hero saat halaman pertama dibuka)
  - `accordion: 0.35s` (buka-tutup akordion dan reflow filter)
  - `reduced: 0.2s` (durasi fade untuk pengguna dengan `prefers-reduced-motion`)
- **Easing**:
  - `ease.entrance: [0.22, 1, 0.36, 1]` (kurva tenang, tanpa efek memantul)
  - `ease.ui: [0.4, 0, 0.2, 1]` (perubahan state antarmuka)
- **Stagger**: `0.08s` jeda antar elemen anak pada grid dan daftar.
- **Jarak (*Distance*)**:
  - `fadeUp: 24px`
  - `slide: 40px`
  - `parallax: 40px` (maksimum pergeseran parallax)
  - `magnetic: 6px` (maksimum tarikan kursor pada tombol CTA)

### Komponen Reusable Motion
1. `<Reveal>`: Memudarkan dan menggeser elemen ke atas saat terlihat di layar (`opacity: 0 -> 1, y: 24 -> 0`).
2. `<RevealStagger>` & `<RevealStaggerItem>`: Menganimasikan deretan kartu atau kolom secara berurutan dengan jeda 0.08 detik.
3. `<TextReveal>`: Memisahkan kata pada judul H1/H2 dan memunculkannya dari balik masker bawah.
4. `<ImageReveal>`: Efek pembuka foto sinematik menggunakan `clip-path: inset(8% round 24px)` ke `inset(0% round 24px)` disertai zoom halus dari 1.08x ke 1.0x.
5. `<Parallax>`: Efek paralaks lembut (+/- 40px) pada foto hero dan gembala jemaat (hanya aktif di desktop).
6. `<Magnetic>`: Tarikan halus mengikuti kursor mouse (maks. 6px) pada tombol utama (hanya aktif di desktop).
7. `<SmoothScroll>`: Pembungkus Lenis untuk scroll desktop yang mulus, dinonaktifkan otomatis di layar sentuh atau mode reduced motion.

---

## 📋 Daftar Periksa Placeholder [ISI NANTI]

Berikut adalah rincian data yang memerlukan konfirmasi resmi dari pengurus/sekretariat GBI Sukowono:

- [ ] **Nama Pemilik Rekening BCA**:
  - Lokasi: `data/giving.ts`
  - Nilai saat ini: `334 338 0000 a.n. [ISI NANTI: NAMA PEMILIK REKENING, konfirmasi pengurus]`
  - Tindakan: Isi nama pemilik rekening resmi gereja (nama yayasan / badan gereja / bendahara yang ditunjuk).
- [ ] **QRIS Gereja**:
  - Lokasi: `data/giving.ts`
  - Status: Belum dikonfirmasi gereja. Masih menggunakan metode transfer BCA.
- [ ] **Biografi Gembala Jemaat (Ps. Herman Wijaya / Pdp. Husai Herman Wijaya)**:
  - Lokasi: `data/leaders.ts`
  - Nilai saat ini: `[ISI NANTI: Profil dan perjalanan pelayanan...]`
  - Tindakan: Tambahkan ringkasan profil pelayanan Gembala Jemaat.
- [ ] **Pernyataan Pengakuan Iman & Nilai-Nilai Kami**:
  - Lokasi: `data/leaders.ts`
  - Nilai saat ini: `[ISI NANTI: Pernyataan Pengakuan Iman...]` & `[ISI NANTI: Nilai-nilai inti jemaat...]`
  - Tindakan: Masukkan poin resmi sinode GBI / pengurus gereja lokal.
- [ ] **Pelayanan Anak (Sekolah Minggu)**:
  - Lokasi: `data/ministries.ts`
  - Nilai saat ini: `[ISI NANTI: Deskripsi pelayanan sekolah minggu...]`
  - Tindakan: Konfirmasi pembagian kelas anak dan jadwal kegiatan sekolah minggu.
- [ ] **Jadwal & Koordinator Persekutuan Pemuda (Youth)**:
  - Lokasi: `data/announcements.ts` & `data/ministries.ts`
  - Nilai saat ini: `[ISI NANTI: Jadwal Khusus Pemuda]`
- [ ] **Etika Berpakaian & FAQ Anak**:
  - Lokasi: `data/faqs.ts`
  - Nilai saat ini: Ditandai dengan panduan standar [ISI NANTI].

---

## ☁️ Panduan Deployment ke Vercel

Situs ini dibangun menggunakan standar Next.js App Router murni dan siap di-deploy langsung ke platform Vercel dengan langkah berikut:

1. Buat repository baru di GitHub bernama `gbisukowono-web` (atau gunakan repository yang sudah di-push).
2. Masuk ke [Vercel Dashboard](https://vercel.com).
3. Klik tombol **Add New...** > **Project**.
4. Pilih repository `gbisukowono-web` dari daftar GitHub Anda.
5. Pada pengaturan proyek:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. Klik **Deploy**.
7. Vercel akan otomatis mengompilasi dan mempublikasikan situs dengan CDN global, sertifikat SSL HTTPS gratis, serta kompresi aset gambar otomatis.

---

## 🔍 Asumsi & Konfirmasi Gereja

1. **Akun Instagram Resmi**: Berdasarkan arahan prompt, akun Instagram resmi yang sah adalah `@gbi_sukowono` (dengan garis bawah). Akun lama `@gbisukowono` telah dinyatakan tidak lagi dikelola pihak gereja dan diberi peringatan keamanan khusus di halaman Persembahan dan Footer.
2. **Rekening Resmi**: Bank BCA KCP Kalisat No. Rekening `334 338 0000`. Penambahan nama pemilik rekening menunggu konfirmasi pengurus.
3. **Kehadiran Online**: Sesuai arahan, situs tidak menyediakan tautan live streaming YouTube. Semua dokumentasi diarahkan ke Instagram resmi `@gbi_sukowono`.
4. **Alamat Fisik**: Jl. Sukowono, Ragang, Desa Sukowono, Kec. Sukowono, Kabupaten Jember, Jawa Timur 68194.

---

## 📸 Bukti Verifikasi & Tangkapan Layar

Pengujian dilakukan secara otomatis menggunakan Playwright pada peramban Chromium mesin uji:
- **Desktop Viewport**: 1440 × 900 px
- **Mobile Viewport**: 390 × 844 px (Apple iPhone 16 scale)
- **Aksesibilitas Reduced Motion**: Mode simulasi `prefers-reduced-motion: reduce`

Aset tangkapan layar tersimpan pada folder `public/screenshots/`:
1. `home-desktop.png`: Tampilan Beranda penuh di desktop dengan hero Ken Burns dan navigasi solid.
2. `home-mobile.png`: Tampilan Beranda di layar mobile 390px.
3. `mobile-menu.png`: Menu navigasi layar penuh overlay mobile dengan animasi ekspansi lingkaran.
4. `jadwal-desktop.png`: Garis waktu mingguan dan kartu jadwal ibadah desktop.
5. `jadwal-mobile.png`: Tampilan jadwal dan peta lokasi di layar ponsel.
6. `persembahan-desktop.png`: Kartu rekening BCA dan kotak peringatan keamanan.
7. `persembahan-mobile.png`: Tampilan halaman persembahan di ponsel.
8. `copy-toast.png`: Uji coba interaktif tombol *Salin Nomor Rekening* yang memunculkan toast "Nomor rekening berhasil disalin!".
9. `reduced-motion-home.png`: Verifikasi mode aksesibilitas tanpa pergeseran transform besar.
