# Design System Master File — DatDev Mobile

> Override page files in `pages/` take precedence when present.

**Project:** DatDev Mobile  
**Stack:** Next.js App Router + Tailwind + GSAP  
**Category:** Premium tech retail / e-commerce  
**Motion:** 7/10 (Standard stagger + scroll reveal)

---

## Brand tokens (source of truth)

Keep the editorial graphite / ivory / electric-lime identity from the HTML prototype. Do **not** switch to generic green/orange ecommerce palettes.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Ink / Primary | `#151515` | `--ink` / `--color-primary` |
| Paper / Background | `#f6f5f1` | `--paper` / `--color-background` |
| Lime / Accent CTA | `#d8fb5b` | `--lime` / `--color-accent` |
| Dark surface | `#121312` | `--dark` |
| Line / Border | `#e7e6e1` | `--line` / `--color-border` |
| Muted text | `#777873` | `--muted` |
| Soft surface | `#eeede9` | `--soft` |
| White / Card | `#ffffff` | `--white` / `--color-card` |
| Radius | `18px` | `--radius` |

## Typography

- **UI / Body:** Be Vietnam Pro (next/font)
- **Fallback display:** DM Sans
- Avoid Inter / Playfair defaults for this brand

## Motion (GSAP)

- Hero entrance: fade + y with `power2.out`
- Product grids: stagger list `back.out(1.4)`, each ~0.06s
- Section reveal: ScrollTrigger `start: 'top 85%'`, y: 24
- Always wrap with `gsap.matchMedia` + `prefers-reduced-motion: reduce` → duration 0 / skip
- Use `@gsap/react` `useGSAP` with scope ref; register ScrollTrigger once

## Icons

- Phosphor (`@phosphor-icons/react`) — no emoji icons
- Decorative icons: `aria-hidden`
- Icon buttons: accessible name + ≥44px hit area

## Anti-patterns

- Purple-on-white / cream+terracotta AI clichés
- Cards in hero
- Emoji as structural icons
- Animating layout (`width`/`height`) when transforms suffice
