# DatDev Mobile — Next.js

Prototype e-commerce điện thoại **chuẩn App Router** (TypeScript, Tailwind, GSAP, Phosphor).

Brand giữ editorial graphite / ivory / electric-lime từ bản HTML gốc. Demo data trong `src/data/catalog.ts`; giỏ / wishlist / đơn lưu `localStorage` qua Zustand.

## Skills đã dùng

- **ui-ux-pro-max** — design system tại `design-system/datdev-mobile/MASTER.md`
- **gsap-*** — hero entrance + scroll stagger (`@gsap/react`, `ScrollTrigger`, `matchMedia` / reduced-motion)

## Chạy

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Admin: `/admin`.

## Cấu trúc

```text
src/app/                 # App Router pages
src/components/          # layout, product, cart, motion, admin
src/data/catalog.ts      # seed products + posts
src/store/shop-store.ts  # cart / wishlist / compare / orders
public/assets/           # WebP từ prototype
legacy/                  # HTML/CSS/JS gốc (reference)
```

## Scripts

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve build |
| `npm run lint` | ESLint |

## Giới hạn

Không phải cửa hàng thật: không API/DB/auth/payment. Xem `legacy/NEXTJS_MIGRATION.md` cho lộ trình production (Prisma, auth, checkout server-side).
