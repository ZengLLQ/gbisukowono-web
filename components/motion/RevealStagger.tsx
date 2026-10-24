"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { duration, distance, ease, stagger, viewport } from "@/lib/motion";

type AllowedTag = "div" | "ul" | "ol" | "li" | "section" | "article" | "nav";

interface RevealStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: AllowedTag;
}

function MotionStaggerContainer({
  as = "div",
  children,
  ...props
}: { as?: AllowedTag; children: ReactNode } & HTMLMotionProps<"div">) {
  switch (as) {
    case "ul":
      return <motion.ul {...(props as HTMLMotionProps<"ul">)}>{children}</motion.ul>;
    case "ol":
      return <motion.ol {...(props as HTMLMotionProps<"ol">)}>{children}</motion.ol>;
    case "li":
      return <motion.li {...(props as HTMLMotionProps<"li">)}>{children}</motion.li>;
    case "section":
      return <motion.section {...(props as HTMLMotionProps<"section">)}>{children}</motion.section>;
    case "article":
      return <motion.article {...(props as HTMLMotionProps<"article">)}>{children}</motion.article>;
    case "nav":
      return <motion.nav {...(props as HTMLMotionProps<"nav">)}>{children}</motion.nav>;
    default:
      return <motion.div {...props}>{children}</motion.div>;
  }
}

export function RevealStagger({
  children,
  staggerDelay = stagger,
  className = "",
  as = "div",
}: RevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

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
    <MotionStaggerContainer
      as={as}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </MotionStaggerContainer>
  );
}

export function RevealStaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: AllowedTag;
}) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: duration.reduced, ease: "linear" as const },
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
    <MotionStaggerContainer as={as} variants={itemVariants} className={className}>
      {children}
    </MotionStaggerContainer>
  );
}
