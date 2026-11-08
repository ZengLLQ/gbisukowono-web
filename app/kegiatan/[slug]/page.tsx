import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { announcements } from "@/data/announcements";
import { ClosingCtaBand } from "@/components/layout/ClosingCtaBand";
import {
  IconCalendar,
  IconMapPin,
  IconWhatsApp,
} from "@/components/ui/Icons";
import { Magnetic } from "@/components/motion/Magnetic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return announcements.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = announcements.find((a) => a.slug === slug);
  if (!item) {
    return { title: "Warta Tidak Ditemukan – GBI Sukowono" };
  }
  return {
    title: `${item.title} – GBI Sukowono`,
    description: item.excerpt,
    openGraph: {
      title: `${item.title} – GBI Sukowono`,
      description: item.excerpt,
      images: [{ url: item.image, alt: item.title }],
    },
  };
}

export default async function DetailKegiatanPage({ params }: PageProps) {
  const { slug } = await params;
  const item = announcements.find((a) => a.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <article className="pt-36 sm:pt-44 pb-24 bg-[#07080A] text-slate-100 min-h-screen relative overflow-hidden">
        {/* Ambient Top Glow Cone */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.12),transparent_70%)] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-accent hover:text-white transition-colors py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              <span>← Kembali ke Semua Warta & Kegiatan</span>
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-white/10 text-slate-200 border border-white/15 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                {item.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <IconCalendar size={14} className="text-accent" />
                <span>{item.date}</span>
              </span>
              {item.time && (
                <span className="text-xs text-slate-400">• {item.time}</span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-white leading-tight">
              {item.title}
            </h1>

            {item.location && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 pt-1">
                <IconMapPin size={16} className="text-accent shrink-0" />
                <span>{item.location}</span>
              </div>
            )}
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E1017] mb-12">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="text-base sm:text-lg leading-relaxed space-y-6 text-slate-300 font-sans border-b border-white/10 pb-12 mb-12 whitespace-pre-line">
            {item.content}
          </div>

          {/* Share / WhatsApp Action Card */}
          <div className="bento-card bento-shimmer bg-white/[0.03] border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif font-normal text-xl sm:text-2xl text-white">
                Ada Pertanyaan Seputar Kegiatan Ini?
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Sekretariat GBI Sukowono siap membantu Anda melalui pesan WhatsApp.
              </p>
            </div>

            <Magnetic>
              <a
                href={`https://wa.me/6281217407046?text=Halo%20Sekretariat%20GBI%20Sukowono,%20saya%20ingin%20bertanya%20seputar%20${encodeURIComponent(
                  item.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-[#07080A] font-bold text-sm shadow-[0_0_20px_rgba(229,169,60,0.3)] transition-all active:scale-[0.98] shrink-0"
              >
                <IconWhatsApp size={16} />
                <span>Tanya via WhatsApp</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </article>

      <ClosingCtaBand />
    </>
  );
}