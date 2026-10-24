"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "motion/react";
import { duration, ease } from "@/lib/motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function CountUp({
  to,
  from = 0,
  duration: animDuration = duration.slow,
  className = "",
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    const controls = animate(from, to, {
      duration: animDuration,
      ease: ease.entrance,
      onUpdate(v) {
        setValue(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, animDuration, shouldReduceMotion]);

  const displayValue = shouldReduceMotion ? to : value;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}
