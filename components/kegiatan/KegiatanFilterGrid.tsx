"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { announcements } from "@/data/announcements";
import { IconCalendar, IconArrowRight } from "@/components/ui/Icons";
import { duration, ease } from "@/lib/motion";

const categories = ["Semua", "Ibadah", "Pemuda", "Komunitas", "Hari Raya"] as const;

export function KegiatanFilterGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredItems = announcements.filter((item) => {
    if (selectedCategory === "Semua") return true;
    return item.category === selectedCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="space-y-12">
      {/* Filter Chips in Amperos Pill Style */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                isActive
                  ? "bg-white text-black shadow-lg scale-[1.02]"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Animated Card Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item) => (
            <motion.article
              layout
              key={item.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: duration.accordion, ease: ease.ui }}
              className="bento-card bento-shimmer flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute top-4 left-4 bg-[#090B0E]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-medium text-slate-200 uppercase tracking-wider border border-white/10">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <IconCalendar size={13} className="text-accent" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-serif font-normal text-white group-hover:text-accent transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-sans font-light">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/[0.08]">
                <Link
                  href={`/kegiatan/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-white transition-colors pt-4"
                >
                  <span>Lihat Detail Warta</span>
                  <IconArrowRight
                    size={14}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {displayedItems.length === 0 && (
        <div className="text-center py-16 bento-card border-white/10">
          <p className="text-slate-400 font-light">
            Belum ada warta kegiatan untuk kategori &ldquo;{selectedCategory}&rdquo;.
          </p>
        </div>
      )}

      {/* Muat Lebih Banyak Button Pattern */}
      {hasMore && (
        <div className="text-center pt-6">
          <button
            type="button"
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-xs sm:text-sm border border-white/15 transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Muat Lebih Banyak Kegiatan</span>
          </button>
        </div>
      )}
    </div>
  );
}
