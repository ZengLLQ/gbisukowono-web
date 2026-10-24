import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AnnouncementsCarousel } from "@/components/home/AnnouncementsCarousel";
import { MinistriesGrid } from "@/components/home/MinistriesGrid";
import { GetInvolvedSection } from "@/components/home/GetInvolvedSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";

export const metadata: Metadata = {
  title: "GBI Sukowono – Beranda | Gereja Bethel Indonesia Sukowono",
  description:
    "Selamat Datang di Rumah Tuhan – GBI Sukowono, Jember. Ibadah Raya setiap Minggu 18.00 WIB. Mari memuji, menyembah, dan menikmati hadirat-Nya.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AnnouncementsCarousel />
      <MinistriesGrid />
      <GetInvolvedSection />
      <InstagramSection />
      <ClosingCtaBand />
    </>
  );
}
