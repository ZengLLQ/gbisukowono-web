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
      <article className="pt-32 pb-24 bg-white text-ink min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-text hover:text-accent-dark transition-colors py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              <span>← Kembali ke Semua Warta & Kegiatan</span>
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-charcoal text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {item.category}
              </span>
              <span className="text-xs text-stone flex items-center gap-1 font-medium">
                <IconCalendar size={14} className="text-accent-text" />
                <span>{item.date}</span>
              </span>
              {item.time && (
                <span className="text-xs text-stone">• {item.time}</span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-ink leading-tight">
              {item.title}
            </h1>

            {item.location && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone pt-1">
                <IconMapPin size={16} className="text-accent-text shrink-0" />
                <span>{item.location}</span>
              </div>
            )}
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-charcoal mb-12">
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
          <div className="prose prose-stone max-w-none text-base sm:text-lg leading-relaxed space-y-6 text-stone-800 font-sans border-b border-line pb-12 mb-12 whitespace-pre-line">
            {item.content}
          </div>

          {/* Share / WhatsApp Action Card */}
          <div className="bg-sand rounded-3xl p-8 border border-line flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-xl text-ink">
                Ada Pertanyaan Seputar Kegiatan Ini?
              </h2>
              <p className="text-stone text-xs sm:text-sm mt-1">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-ink font-bold text-sm shadow-md transition-all active:scale-[0.98] shrink-0"
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
