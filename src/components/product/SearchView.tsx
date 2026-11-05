"use client";

import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/catalog";

export function SearchView() {
  const params = useSearchParams();
  const q = (params.get("q") ?? "").trim().toLowerCase();
  const list = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q),
      )
    : [];

  return (
    <div className="container">
      <Breadcrumbs current="Tìm kiếm" />
      <div className="section-head">
        <div>
          <span className="eyebrow">SEARCH</span>
          <h1 style={{ marginTop: 10 }}>
            {q ? `Kết quả cho “${q}”` : "Tìm kiếm sản phẩm"}
          </h1>
          <p>{list.length} sản phẩm phù hợp.</p>
        </div>
      </div>
      <ProductGrid products={list} />
    </div>
  );
}
