"use client";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProduct } from "@/data/catalog";
import { useShopStore } from "@/store/shop-store";

export function WishlistView() {
  const wishlist = useShopStore((s) => s.wishlist);
  const products = wishlist.map((id) => getProduct(id)).filter(Boolean);

  return (
    <div className="container">
      <Breadcrumbs current="Yêu thích" />
      <div className="section-head">
        <div>
          <span className="eyebrow">WISHLIST</span>
          <h1 style={{ marginTop: 10 }}>Sản phẩm yêu thích.</h1>
          <p>{products.length} sản phẩm đã lưu trên trình duyệt này.</p>
        </div>
      </div>
      <ProductGrid products={products as NonNullable<(typeof products)[number]>[]} />
    </div>
  );
}
