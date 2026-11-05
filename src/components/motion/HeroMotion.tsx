"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const targets = root.querySelectorAll<HTMLElement>("[data-hero-anim]");
      // Always show final state first — prevents stuck invisible content
      // when matchMedia / Strict Mode reverts a from() tween mid-flight.
      gsap.set(targets, { clearProps: "opacity,visibility,transform" });

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.4 },
        )
          .fromTo(
            "[data-hero-title]",
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.55 },
            "-=0.15",
          )
          .fromTo(
            "[data-hero-lead]",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.4 },
            "-=0.25",
          )
          .fromTo(
            "[data-hero-actions] > *",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.35 },
            "-=0.2",
          )
          .fromTo(
            "[data-hero-chrome]",
            { opacity: 0 },
            { opacity: 1, duration: 0.35 },
            "-=0.2",
          );
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="hero">
      {children}
    </section>
  );
}
