"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { duration, distance, ease, stagger, viewport } from "@/lib/motion";

interface RevealStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: React.ElementType;
}

export function RevealStagger({
  children,
  staggerDelay = stagger,
  className = "",
  as = "div",
}: RevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion.create(as as any);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.02 : staggerDelay,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </Component>
  );
}

export function RevealStaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion.create(as as any);

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: duration.reduced, ease: "linear" },
        },
      }
    : {
        hidden: { opacity: 0, y: distance.fadeUp },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: duration.base, ease: ease.entrance },
        },
      };

  return (
    <Component variants={itemVariants} className={className}>
      {children}
    </Component>
  );
}
