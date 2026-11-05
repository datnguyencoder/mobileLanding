import { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductFilters } from "@/components/product/ProductFilters";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Điện thoại",
  description: "Danh sách điện thoại demo DatDev Mobile — lọc brand, giá, sắp xếp.",
};

type SearchParams = Promise<{
  brand?: string;
  sort?: string;
  max?: string;
}>;

export default async function DienThoaiPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const brand = sp.brand ?? "Tất cả";
  const sort = sp.sort ?? "featured";
  const max = Number(sp.max ?? 40000000);

  let list = [...products];
  if (brand !== "Tất cả") list = list.filter((p) => p.brand === brand);
  list = list.filter((p) => p.price <= max);
  if (sort === "cheap") list.sort((a, b) => a.price - b.price);
  if (sort === "expensive") list.sort((a, b) => b.price - a.price);
  if (sort === "rating") list.sort((a, b) => b.rate - a.rate);

  return (
    <div className="container section-tight">
      <Breadcrumbs current="Điện thoại" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">CATALOG</span>
          <h1>Điện thoại.</h1>
          <p>Lọc theo thương hiệu, ngân sách và mức đánh giá demo.</p>
        </div>
      </div>
      <div className="listing-layout">
        <Suspense fallback={<aside className="filters">Đang tải bộ lọc…</aside>}>
          <ProductFilters brand={brand} sort={sort} max={max} />
        </Suspense>
        <div>
          <div className="toolbar">
            <h3>{list.length} sản phẩm</h3>
          </div>
          <ProductGrid products={list} />
        </div>
      </div>
    </div>
  );
}
