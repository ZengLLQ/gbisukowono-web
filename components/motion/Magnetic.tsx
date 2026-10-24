"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { distance } from "@/lib/motion";
import { useIsDesktop } from "./useIsDesktop";

interface MagneticProps {
  children: ReactNode;
  maxPull?: number;
  className?: string;
}

export function Magnetic({
  children,
  maxPull = distance.magnetic,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isDesktop || shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    const factorX = (middleX / (width / 2)) * maxPull;
    const factorY = (middleY / (height / 2)) * maxPull;
    setPosition({ x: factorX, y: factorY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Keep DOM structure consistent between SSR and client
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        !shouldReduceMotion && isDesktop
          ? { x: position.x, y: position.y }
          : { x: 0, y: 0 }
      }
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.5,
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
