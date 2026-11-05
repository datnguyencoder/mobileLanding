"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(root);
        gsap.from(q("[data-hero]"), {
          y: 18,
          duration: 0.55,
          stagger: 0.07,
          ease: "power2.out",
          clearProps: "transform",
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero" aria-label="Giới thiệu DatDev Mobile">
      <div className="hero-media" aria-hidden />
      <div className="hero-shade" aria-hidden />

      <p className="hero-neo" aria-hidden>
        NÉO / 2025
      </p>

      <div className="hero-inner">
        <p className="hero-eyebrow" data-hero>
          DATDEV MOBILE — CREATIVE TECH RETAIL
        </p>
        <h1 className="hero-title" data-hero>
          Công nghệ.
          <br />
          <span>Đúng chất bạn.</span>
        </h1>
        <p className="hero-lead" data-hero>
          Từ chiếc điện thoại đầu tiên đến bản nâng cấp đáng mong chờ. Khám phá
          sản phẩm phù hợp với cách bạn sống.
        </p>
        <div className="hero-actions" data-hero>
          <Link href="/dien-thoai" className="btn">
            Khám phá ngay <ArrowRight aria-hidden weight="bold" />
          </Link>
          <Link href="/so-sanh" className="btn outline hero-btn-ghost">
            So sánh sản phẩm <ArrowRight aria-hidden weight="bold" />
          </Link>
        </div>
      </div>

      <div className="hero-footer">
        <div className="hero-dots" aria-hidden>
          <span className="is-active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
