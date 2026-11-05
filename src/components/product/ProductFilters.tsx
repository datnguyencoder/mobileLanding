"use client";

import { useRouter, usePathname } from "next/navigation";

const brands = ["Tất cả", "Apple", "Samsung", "Xiaomi", "Nothing"] as const;

export function ProductFilters({
  brand,
  sort,
  max,
}: {
  brand: string;
  sort: string;
  max: number;
}) {
  const router = useRouter();
  const pathname = usePathname();

  function push(next: { brand?: string; sort?: string; max?: number }) {
    const params = new URLSearchParams();
    const b = next.brand ?? brand;
    const s = next.sort ?? sort;
    const m = next.max ?? max;
    if (b && b !== "Tất cả") params.set("brand", b);
    if (s && s !== "featured") params.set("sort", s);
    if (m && m < 40000000) params.set("max", String(m));
    const q = params.toString();
    router.push(q ? `${pathname}?${q}` : pathname);
  }

  return (
    <aside className="filters" aria-label="Bộ lọc sản phẩm">
      <h3>Bộ lọc</h3>
      <div className="filter-group">
        <strong>Thương hiệu</strong>
        {brands.map((b) => (
          <label key={b}>
            <input
              type="radio"
              name="brand"
              checked={brand === b}
              onChange={() => push({ brand: b })}
            />
            {b}
          </label>
        ))}
      </div>
      <div className="filter-group">
        <strong>Giá tối đa: {(max / 1_000_000).toFixed(0)}tr</strong>
        <input
          type="range"
          min={5_000_000}
          max={40_000_000}
          step={1_000_000}
          value={max}
          onChange={(e) => push({ max: Number(e.target.value) })}
          aria-label="Giá tối đa"
        />
      </div>
      <div className="filter-group">
        <strong>Sắp xếp</strong>
        <select
          value={sort}
          onChange={(e) => push({ sort: e.target.value })}
          aria-label="Sắp xếp"
        >
          <option value="featured">Nổi bật</option>
          <option value="cheap">Giá thấp → cao</option>
          <option value="expensive">Giá cao → thấp</option>
          <option value="rating">Đánh giá cao</option>
        </select>
      </div>
    </aside>
  );
}
