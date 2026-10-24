import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-ink focus:text-white focus:shadow-xl focus:rounded-full focus:font-medium focus:text-sm transition-all focus:outline focus:outline-3 focus:outline-accent"
    >
      Lewati ke konten utama
    </a>
  );
}
