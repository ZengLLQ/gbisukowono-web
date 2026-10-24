import type { Metadata, Viewport } from "next";
import { Archivo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { motionCssVariables } from "@/lib/motion";
import { churchContact } from "@/data/contact";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gbisukowono.org"),
  title: {
    default: "GBI Sukowono – Gereja Bethel Indonesia Sukowono, Jember",
    template: "%s | GBI Sukowono",
  },
  description:
    "Selamat Datang di Rumah Tuhan – GBI Sukowono, Jember, Jawa Timur. Mari datang untuk memuji, menyembah, berdoa, dan menikmati hadirat Tuhan Yesus bersama keluarga.",
  keywords: [
    "GBI Sukowono",
    "Gereja Bethel Indonesia Sukowono",
    "Gereja Jember",
    "Ibadah Minggu Sukowono",
    "Worship Night Sukowono",
    "GBI Mojopahit Family",
    "Ps Herman Wijaya Sukowono",
  ],
  authors: [{ name: "GBI Sukowono" }],
  creator: "GBI Sukowono",
  publisher: "GBI Sukowono",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://gbisukowono.org",
    siteName: "GBI Sukowono",
    title: "GBI Sukowono – Gereja Bethel Indonesia Sukowono, Jember",
    description:
      "Mari datang untuk Memuji, Menyembah, Berdoa dan Menikmati Hadirat Tuhan Yesus. Ibadah Raya setiap Minggu pukul 18.00 WIB.",
    images: [
      {
        url: "/images/hero-sanctuary.webp",
        width: 1200,
        height: 630,
        alt: "Ruang Ibadah GBI Sukowono",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GBI Sukowono – Gereja Bethel Indonesia Sukowono",
    description:
      "Mari datang untuk Memuji, Menyembah, Berdoa dan Menikmati Hadirat Tuhan Yesus. Ibadah Raya setiap Minggu pukul 18.00 WIB.",
    images: ["/images/hero-sanctuary.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

// Church / LocalBusiness JSON-LD Schema
const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Gereja Bethel Indonesia Sukowono",
  alternateName: "GBI Sukowono",
  url: "https://gbisukowono.org",
  logo: "https://gbisukowono.org/images/hero-sanctuary.webp",
  image: "https://gbisukowono.org/images/hero-sanctuary.webp",
  description:
    "Gereja Bethel Indonesia Sukowono di Kabupaten Jember, Jawa Timur. Bagian dari Sinode GBI dan GBI Mojopahit Family.",
  telephone: churchContact.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sukowono, Ragang, Desa Sukowono",
    addressLocality: "Kecamatan Sukowono, Kabupaten Jember",
    addressRegion: "Jawa Timur",
    postalCode: "68194",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.065,
    longitude: 113.82,
  },
  sameAs: [churchContact.instagramUrl],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "17:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "18:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "18:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${archivo.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: motionCssVariables }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-ink font-sans selection:bg-accent selection:text-ink antialiased">
        <SkipToContent />
        <Header />
        <SmoothScroll>
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
