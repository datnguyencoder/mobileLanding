# Chuyển DatDev Mobile sang Next.js (App Router)

Bản HTML/CSS/JS này là **visual + interaction reference**, không nên copy toàn bộ `app.js` vào một Client Component. Hãy chuyển dần từng feature.

## Tạo project

```bash
npx create-next-app@latest datdev-mobile-next --ts --eslint --app --src-dir
cd datdev-mobile-next
npm run dev
```

## Gợi ý cấu trúc

```text
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── dien-thoai/page.tsx
│   ├── san-pham/[slug]/page.tsx
│   ├── tim-kiem/page.tsx
│   ├── so-sanh/page.tsx
│   ├── uu-dai/page.tsx
│   ├── thu-cu-doi-moi/page.tsx
│   ├── tra-gop/page.tsx
│   ├── gio-hang/page.tsx
│   ├── thanh-toan/page.tsx
│   ├── dat-hang-thanh-cong/page.tsx
│   ├── tai-khoan/page.tsx
│   ├── don-hang/page.tsx
│   ├── admin/page.tsx
│   └── admin/san-pham/page.tsx
├── components/
│   ├── layout/Header.tsx
│   ├── layout/Footer.tsx
│   ├── product/ProductCard.tsx
│   ├── product/ProductGrid.tsx
│   ├── filters/ProductFilters.tsx
│   ├── cart/CartSummary.tsx
│   └── ui/Button.tsx
├── features/
│   ├── catalog/
│   ├── cart/
│   ├── checkout/
│   ├── auth/
│   └── admin/
├── lib/
│   ├── format.ts
│   ├── db.ts
│   └── validations.ts
└── types/
    └── product.ts
public/
└── assets/             # copy assets từ demo
```

## Map code hiện tại

| HTML demo | Next.js |
|---|---|
| `index.html` | `app/layout.tsx` (metadata, fonts, layout) |
| `styles.css` | `app/globals.css`, tách tokens/components nếu cần |
| `data.js` | seed data + API / database; khai báo TypeScript types |
| `header()`, `footer()` | `Header.tsx`, `Footer.tsx` |
| `home()` | `app/page.tsx` |
| `listPage()` | `app/dien-thoai/page.tsx` |
| `productPage(id)` | `app/san-pham/[slug]/page.tsx` |
| `cartPage()` | `app/gio-hang/page.tsx` |
| `adminProducts()` | `app/admin/san-pham/page.tsx` |
| `localStorage` | chỉ dùng cho wishlist/cart tạm; dữ liệu kinh doanh phải dùng API/DB |

## Khuyến nghị kỹ thuật cho production

1. **Tách UI và nghiệp vụ:** mỗi màn hình thành server/client components phù hợp; không tạo HTML bằng chuỗi `innerHTML`.
2. **Database & ORM:** PostgreSQL + Prisma hoặc Drizzle; có bảng Product, Variant, Inventory, Order, OrderItem, User, Address, Payment, Promotion và AuditLog.
3. **Authentication & RBAC:** xác thực thật, role khách hàng / nhân viên / quản lý / admin, kiểm tra quyền ở server.
4. **Checkout:** kiểm tra giá, coupon, stock, phí vận chuyển ở server; xử lý idempotency, webhook, transaction và payment provider hợp pháp tại thị trường.
5. **Admin CRUD:** validate API payload với Zod, upload hình an toàn, audit trail, không tin client-controlled data.
6. **Ảnh sản phẩm:** dùng `next/image`, `sizes`, kích thước ảnh, nén WebP/AVIF và metadata chính xác.
7. **SEO:** metadata per page, Product structured data chỉ khi thông tin chính xác, sitemap, canonical.
8. **QA:** Playwright E2E, unit tests, keyboard navigation, reduced-motion, và test ở các breakpoint 375 / 768 / 1440.

## Theme CSS hiện tại

```css
:root {
  --ink: #151515;
  --paper: #f6f5f1;
  --lime: #d8fb5b;
  --dark: #121312;
  --line: #e7e6e1;
  --radius: 18px;
}
```

Lưu ý: UI có thể gần mockup, nhưng Next.js không tự biến demo thành website bán hàng thật. Cần backend, logic đơn hàng và tích hợp thanh toán để hoàn chỉnh.

Tài liệu chính thức:
- https://nextjs.org/docs/app/getting-started
- https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
