# DatDev Mobile — Landing Page Demo

Landing page / storefront demo dùng để **ôn tập UI/UX** và thực hành frontend hiện đại.

> Không phải website bán hàng thật. Không thanh toán, không API, không dữ liệu khách hàng thật.

---

## Mục đích

Ôn tập thiết kế & dựng giao diện theo hướng production-minded:

- Áp dụng skill **UI/UX Pro Max** (design system, spacing, contrast, accessibility)
- Luyện motion với skill **GSAP** (`@gsap/react`, stagger, `prefers-reduced-motion`)
- Chuyển prototype HTML → **Next.js App Router** chuẩn

Brand hướng editorial tech retail: graphite / ivory / electric-lime.

---

## Tech stack

| Layer | Công nghệ |
|--------|-----------|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS 4 + CSS tokens riêng |
| Motion | GSAP + `@gsap/react` |
| Icons | Phosphor Icons |
| State (demo) | Zustand + `localStorage` |

---

## Skills đã dùng

- **[ui-ux-pro-max](https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max)** — design system tại `design-system/datdev-mobile/MASTER.md`
- **[gsap-skills](https://skills.sh/greensock/gsap-skills)** — hero entrance, scroll reveal, reduced-motion

---

## Chạy local

Yêu cầu: **Node.js 20.9+** (khuyến nghị `24.x` — trùng cấu hình Vercel)

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Chạy bản build |
| `npm run lint` | ESLint |

---

## Deploy Vercel

Repo đã sẵn sàng deploy Next.js (App Router). Cách nhanh:

1. Vào [vercel.com/new](https://vercel.com/new)
2. Import `datnguyencoder/mobileLanding`
3. Framework Preset: **Next.js** (auto)
4. Build Command: `npm run build` · Output: mặc định
5. Deploy

Hoặc CLI:

```bash
npm i -g vercel
vercel
```

Cấu hình trong repo:

- `package.json` → `"engines": { "node": "24.x" }`
- `vercel.json` → framework Next.js
- Không cần env vars cho bản demo này

---

## Tính năng demo (ôn UI/UX)

- Hero full-bleed + typography hierarchy + CTA
- Danh mục / filter / sort / search
- Chi tiết sản phẩm, so sánh, yêu thích, giỏ hàng
- Checkout minh họa + voucher demo `DATDEV100`
- Admin UI demo (dashboard, sản phẩm, đơn)
- Responsive: desktop / tablet / mobile
- Focus visible, skip link, reduced-motion

---

## Cấu trúc thư mục

```text
src/
  app/                 # App Router pages
  components/          # layout, product, cart, hero, motion, admin
  data/catalog.ts      # dữ liệu mẫu
  store/shop-store.ts  # cart / wishlist / compare / orders (local)
  types/
public/assets/         # ảnh WebP demo
design-system/         # MASTER.md từ UI/UX Pro Max
legacy/                # prototype HTML gốc (reference)
```

---

## Giới hạn cần biết

- Giá, tồn kho, cửa hàng, chính sách… chỉ mang tính minh họa
- Đơn hàng / wishlist lưu trên trình duyệt hiện tại (`localStorage`)
- Không tích hợp backend, auth, payment, vận chuyển

---

## Repo

https://github.com/datnguyencoder/mobileLanding

---

## License / mục đích học

Dùng cho học tập và ôn skill UI/UX + frontend. Không dùng làm production commerce khi chưa có backend, pháp lý và nội dung chính thức.
