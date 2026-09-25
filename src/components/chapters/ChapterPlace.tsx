"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { images } from "@/content/images";
import { cn } from "@/lib/utils";

const captions = [
  { label: "Australia", detail: "Southern coast" },
  { label: "Victoria", detail: "Bass Coast" },
  { label: "South Gippsland", detail: "Maritime climate" },
  { label: "Wattle Bank", detail: "7km inland from Bass Strait" },
  { label: "Harman Wines", detail: "612 Korumburra–Inverloch Rd" },
];

/**
 * Beat 1 — single aerial, scroll zooms from wide land into the estate.
 * One sticky frame; captions advance with progress. No image swap.
 */
export function ChapterPlace() {
  const trackRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1.12, 1.12] : [1.05, 1.42],
  );
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["48% 42%", "48% 42%"] : ["52% 38%", "44% 58%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(captions.length - 1, Math.floor(v * captions.length));
    setActive(next);
  });

  useMotionValueEvent(objectPosition, "change", (v) => {
    if (imgRef.current) imgRef.current.style.objectPosition = v;
  });

  return (
    <section
      id="place"
      ref={trackRef}
      className="relative h-[145vh] chapter-ground bg-charcoal"
      aria-labelledby="place-heading"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div className="absolute inset-0 origin-center will-change-transform" style={{ scale }}>
          <Image
            ref={imgRef}
            src={images.aerialGolden}
            alt="Aerial view over South Gippsland farmland toward Harman Wines"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "52% 38%" }}
          />
        </motion.div>

        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,28,25,0.72)_0%,rgba(31,28,25,0.25)_55%,rgba(31,28,25,0.35)_100%)]"
          aria-hidden
        />

        <div className="relative z-10 h-full mx-auto max-w-7xl px-5 md:px-8 flex flex-col justify-end pb-16 md:pb-24 pt-28">
          <div className="max-w-xl">
            <SectionLabel className="text-cream/50">Arrive at Harman</SectionLabel>
            <EditorialHeading id="place-heading" className="text-cream">
              A destination, not only a bottle
            </EditorialHeading>
            <p className="mt-4 max-w-md text-cream/75 text-lg">
              Nestled in Wattle Bank — minutes from Inverloch — a working farm shaped by coastal
              air and patient seasons.
            </p>

            <ol className="mt-10 space-y-0 border-t border-cream/15" aria-live="polite">
              {captions.map((c, i) => (
                <li
                  key={c.label}
                  className={cn(
                    "py-3 border-b border-cream/15 flex items-baseline justify-between gap-4 transition-opacity duration-500",
                    active === i ? "opacity-100" : "opacity-35",
                  )}
                >
                  <span className="font-display text-2xl md:text-3xl text-cream">{c.label}</span>
                  <span className="label-micro text-cream/55 shrink-0">{c.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
