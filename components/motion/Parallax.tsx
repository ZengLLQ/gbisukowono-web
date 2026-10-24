"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { distance } from "@/lib/motion";
import { useIsDesktop } from "./useIsDesktop";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({
  children,
  offset = distance.parallax,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  // Keep DOM structure identical across SSR and client hydration
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={!shouldReduceMotion && isDesktop ? { y } : undefined}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
