"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@/components/ui/Icons";
import { duration, ease } from "@/lib/motion";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headingId = `faq-h-${item.id}`;
        const panelId = `faq-p-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-line bg-sand/50 overflow-hidden transition-colors hover:border-accent/40"
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display font-bold text-base sm:text-lg text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: duration.accordion, ease: ease.ui }}
                  className="text-stone shrink-0"
                >
                  <IconChevronDown size={20} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: duration.accordion, ease: ease.ui }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-stone text-sm sm:text-base leading-relaxed font-sans border-t border-line/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
