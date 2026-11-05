"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  y?: number;
};

/** Scroll reveal with reduced-motion support (GSAP matchMedia). */
export function Reveal({
  children,
  className = "",
  stagger = false,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduce } = context.conditions!;
          if (reduce) return;

          const targets = stagger
            ? ref.current?.querySelectorAll("[data-reveal-item]")
            : ref.current;

          if (!targets || (stagger && !(targets as NodeList).length)) return;

          gsap.fromTo(
            targets,
            { opacity: 0, y },
            {
              opacity: 1,
              y: 0,
              duration: stagger ? 0.4 : 0.5,
              ease: stagger ? "back.out(1.4)" : "power2.out",
              stagger: stagger ? { each: 0.06, from: "start" } : 0,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
              },
            },
          );
        },
      );
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
