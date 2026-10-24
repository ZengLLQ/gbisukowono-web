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
      {/* Filter Chips */}
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
                  ? "bg-accent text-ink shadow-md"
                  : "bg-sand hover:bg-stone-200 text-stone-700 border border-line"
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
              className="bg-white rounded-3xl overflow-hidden border border-line shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-stone">
                    <IconCalendar size={14} className="text-accent-text" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-ink group-hover:text-accent-text transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-stone text-sm line-clamp-3 leading-relaxed font-sans">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-line/60">
                <Link
                  href={`/kegiatan/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-accent-text group-hover:underline pt-4"
                >
                  <span>Lihat Detail Warta</span>
                  <IconArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {displayedItems.length === 0 && (
        <div className="text-center py-16 bg-sand rounded-3xl border border-line">
          <p className="text-stone font-medium">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sand hover:bg-stone-200 text-ink font-bold text-sm border border-line transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Muat Lebih Banyak Kegiatan</span>
          </button>
        </div>
      )}
    </div>
  );
}
