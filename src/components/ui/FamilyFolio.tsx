"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { familyTimeline } from "@/content/seed";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/** Artistic vine-spine timeline — shared by homepage Family and Our Story. */
export function FamilyFolio({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) {
      setProgress(1);
      return;
    }

    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Progress as the track scrolls through the middle of the viewport
      const start = viewH * 0.75;
      const end = viewH * 0.25;
      const raw = (start - rect.top) / (start - end + rect.height);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="flex justify-center"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="inline-block bg-claret px-3.5 py-1.5 font-ui text-[0.625rem] uppercase tracking-[0.2em] text-linen">
          A short folio
        </p>
      </motion.div>

      <div ref={trackRef} className="relative mt-14 md:mt-20 max-w-4xl mx-auto">
        {/* Muted spine */}
        <div
          className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px md:-translate-x-1/2 bg-[#B9B5A6]/70"
          aria-hidden
        />
        {/* Progressive claret overlay */}
        <div
          className="pointer-events-none absolute left-4 md:left-1/2 top-0 w-px -translate-x-px md:-translate-x-1/2 bg-claret origin-top transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
          aria-hidden
        />

        <ol className="relative">
          {familyTimeline.map((item, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <li key={item.year} className="relative py-8 md:py-11">
                {/* Square marker */}
                <span
                  className="absolute left-4 md:left-1/2 top-[3.5rem] md:top-[4.25rem] z-10 size-1.5 -translate-x-1/2 bg-claret"
                  aria-hidden
                />

                {/* Horizontal connector — desktop */}
                <span
                  className={cn(
                    "pointer-events-none absolute top-[3.85rem] md:top-[4.6rem] hidden md:block h-px bg-[#B9B5A6]/70",
                    fromLeft
                      ? "right-1/2 mr-2 w-[min(28%,5.5rem)]"
                      : "left-1/2 ml-2 w-[min(28%,5.5rem)]",
                  )}
                  aria-hidden
                />
                {/* Horizontal connector — mobile (to the right of spine) */}
                <span
                  className="pointer-events-none absolute left-4 top-[3.85rem] md:hidden h-px w-8 ml-2 bg-[#B9B5A6]/70"
                  aria-hidden
                />

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12% 0px" }}
                  transition={{ duration: 0.85, delay: 0.04 * i, ease }}
                  className={cn(
                    "pl-12 md:pl-0 md:w-[calc(50%-2rem)]",
                    fromLeft ? "md:mr-auto md:pr-6 md:text-right" : "md:ml-auto md:pl-6",
                  )}
                >
                  <p
                    className={cn(
                      "font-display font-normal text-[clamp(3rem,5vw,5rem)] leading-[0.9] tracking-[-0.02em] text-claret transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-0.5",
                    )}
                  >
                    {item.year}
                  </p>
                  <h3 className="mt-4 font-ui text-sm md:text-base font-medium text-dusk tracking-wide">
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm text-loam leading-relaxed font-body max-w-[17rem]",
                      fromLeft && "md:ml-auto",
                    )}
                  >
                    {item.body}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
