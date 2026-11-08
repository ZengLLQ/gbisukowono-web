import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import { IconWhatsApp, IconArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Cara Terlibat – GBI Sukowono",
  description:
    "Langkah-langkah untuk terlibat dalam pelayanan, persekutuan, dan pertumbuhan rohani bersama jemaat GBI Sukowono.",
};

export default function TerlibatPage() {
  return (
    <>
      <section className="pt-40 pb-20 sm:pt-48 sm:pb-28 bg-[#07080A] text-white text-center relative overflow-hidden">
        {/* Ambient Top Glow Cone */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.15),transparent_70%)] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent font-mono text-[11px] uppercase tracking-widest mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>LANGKAH KETERLIBATAN</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight mb-4">
            Terlibat Bersama GBI Sukowono
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Ada tempat bagi setiap orang untuk bertumbuh, melayani, dan menjadi
            berkat bagi sesama di Sukowono.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07080A] text-slate-100 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="bg-amber-500/10 border border-amber-500/25 p-4 rounded-xl text-xs sm:text-sm text-amber-300">
            Halaman ini adalah halaman persiapan untuk program pembinaan jemaat.
            Informasi detail masih dalam proses konfirmasi [ISI NANTI].
          </div>

          <div className="space-y-6">
            {/* Step 01 */}
            <div className="bento-card bento-shimmer bg-white/[0.025] hover:bg-white/[0.04] rounded-2xl p-8 border border-white/10 space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
                  Tahap 01
                </span>
                <span className="font-mono text-xs text-white/30 font-bold">01/03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Hadir & Bersekutu Secara Rutin
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Awali dengan beribadah bersama setiap Minggu pukul 18.00 WIB atau
                mengikuti Worship Night Jumat 18.30 WIB dan Persekutuan Selasa
                18.00 WIB.
              </p>
              <div className="pt-2">
                <Link
                  href="/jadwal"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <span>Cek Jadwal Ibadah</span>
                  <IconArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bento-card bento-shimmer bg-white/[0.025] hover:bg-white/[0.04] rounded-2xl p-8 border border-white/10 space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
                  Tahap 02
                </span>
                <span className="font-mono text-xs text-white/30 font-bold">02/03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Kelas Pemuridan & Pembinaan Iman
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                [ISI NANTI: Penjelasan mengenai kelas dasar kekristenan, kelas baptisan selam, dan pembinaan kedewasaan rohani bagi jemaat baru].
              </p>
            </div>

            {/* Step 03 */}
            <div className="bento-card bento-shimmer bg-white/[0.025] hover:bg-white/[0.04] rounded-2xl p-8 border border-white/10 space-y-4 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
                  Tahap 03
                </span>
                <span className="font-mono text-xs text-white/30 font-bold">03/03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                Bergabung dalam Tim Pelayanan
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Salurkan talenta Anda di tim pujian, multimedia, penerima jemaat,
                maupun kelompok doa syafaat.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20rindu%20bergabung%20dalam%20pelayanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <IconWhatsApp size={14} />
                  <span>Daftar via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCtaBand />
    </>
  );
}