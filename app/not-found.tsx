import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-sand text-ink px-4 py-32">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-line shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center font-display font-extrabold text-2xl">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-stone text-sm leading-relaxed font-sans">
            Maaf, halaman yang Anda cari tidak tersedia atau alamat telah
            berubah. Silakan kembali ke beranda atau lihat jadwal ibadah.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-ink font-bold text-sm shadow-md transition-all active:scale-[0.98]"
          >
            <span>Kembali ke Beranda</span>
            <IconArrowRight size={15} />
          </Link>
          <Link
            href="/jadwal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sand hover:bg-stone-200 text-ink font-semibold text-sm border border-line transition-all active:scale-[0.98]"
          >
            <span>Jadwal Ibadah</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
