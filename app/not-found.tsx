import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07080A] text-slate-100 px-4 py-32 relative overflow-hidden">
      {/* Ambient Radial Center Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(229,169,60,0.12),transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-md w-full bento-card bento-shimmer bg-white/[0.03] rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 text-accent mx-auto flex items-center justify-center font-serif font-normal text-2xl shadow-[0_0_20px_rgba(229,169,60,0.25)]">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed font-sans">
            Maaf, halaman yang Anda cari tidak tersedia atau tautan telah
            berubah. Silakan kembali ke beranda atau lihat jadwal ibadah jemaat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-[#07080A] font-bold text-sm shadow-[0_0_20px_rgba(229,169,60,0.3)] transition-all active:scale-[0.98]"
          >
            <span>Kembali ke Beranda</span>
            <IconArrowRight size={15} />
          </Link>
          <Link
            href="/jadwal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm border border-white/10 transition-all active:scale-[0.98]"
          >
            <span>Jadwal Ibadah</span>
          </Link>
        </div>
      </div>
    </div>
  );
}