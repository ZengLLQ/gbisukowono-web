"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { announcements } from "@/data/announcements";
import { IconArrowRight, IconCalendar, IconChevronRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/motion/Reveal";

export function AnnouncementsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDraggingState, setIsDraggingState] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      return;
    }
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Desktop Drag-to-Scroll implementation
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStartRef.current = scrollRef.current.scrollLeft;
    setIsDraggingState(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const currentX = e.pageX - scrollRef.current.offsetLeft;
    const walk = (currentX - startXRef.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
    setIsDraggingState(false);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedRef.current = false;
    }
  };

  return (
    <section
      aria-labelledby="announcements-heading"
      className="py-24 bg-[#0A0C10] text-white overflow-hidden border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-accent mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              WARTA & INFORMASI
            </span>
            <h2
              id="announcements-heading"
              className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-white"
            >
              Kabar & Kegiatan Terkini
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl font-light">
              Ikuti agenda dan warta pelayanan jemaat GBI Sukowono.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-accent hover:text-white transition-colors group py-1"
            >
              <span>Lihat Semua Kegiatan</span>
              <IconChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>

        {/* Carousel Container with True Drag-to-Scroll */}
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Daftar warta dan pengumuman kegiatan. Geser dengan mouse atau tombol panah keyboard."
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onClickCapture={handleClickCapture}
          className={`flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar select-none rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
            isDraggingState
              ? "cursor-grabbing scroll-auto snap-none"
              : "cursor-grab scroll-smooth snap-x snap-mandatory"
          }`}
        >
          {announcements.map((item) => (
            <article
              key={item.slug}
              className="shrink-0 w-[290px] sm:w-[360px] snap-start bento-card bento-shimmer flex flex-col group select-none shadow-lg"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black pointer-events-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 290px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-3 left-3 bg-[#090B0E]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-medium text-slate-200 uppercase tracking-wider border border-white/10">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <IconCalendar size={13} className="text-accent" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-white group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed font-sans font-light">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08]">
                  <Link
                    href={`/kegiatan/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                  >
                    <span>Baca Selengkapnya</span>
                    <IconArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Progress Bar */}
        <div className="max-w-xs mx-auto mt-6 bg-white/10 h-1 rounded-full overflow-hidden">
          <div
            className="bg-accent h-full transition-all duration-150 rounded-full"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
