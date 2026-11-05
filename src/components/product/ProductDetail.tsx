"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  ArrowsCounterClockwise,
  SealCheck,
} from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { assetPath } from "@/data/catalog";
import { money } from "@/lib/format";
import { useShopStore } from "@/store/shop-store";
import type { Product } from "@/types/product";

const sizes = ["128GB", "256GB", "512GB", "1TB"];

export function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState(product.storage);
  const addToCart = useShopStore((s) => s.addToCart);
  const toggleWishlist = useShopStore((s) => s.toggleWishlist);
  const wishlist = useShopStore((s) => s.wishlist);
  const wished = wishlist.includes(product.id);

  return (
    <div className="container">
      <Breadcrumbs
        current={product.name}
        parents={[["Điện thoại", "/dien-thoai"]]}
      />
      <div className="product-detail-grid">
        <div>
          <div className="detail-gallery">
            <Image
              src={assetPath(
                product.id === "iphone-16-pro" ? "detail.webp" : product.image,
              )}
              alt={`Hình ảnh ${product.name}`}
              width={640}
              height={640}
              priority
            />
          </div>
        </div>
        <div className="detail-options">
          <span className="chip">{product.badge}</span>
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <div className="mt16">
            <span className="rating">
              <b>★</b> {product.rate} · {product.reviews} đánh giá mẫu
            </span>
          </div>
          <hr style={{ border: 0, borderTop: "1px solid #ddd", margin: "23px 0" }} />
          <strong>Màu sắc: {product.color}</strong>
          <div className="mt16">
            <strong>Dung lượng</strong>
            <div>
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`option-btn${size === s ? " active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mt24">
            {Object.entries(product.specs).map(([k, v]) => (
              <div className="spec-row" key={k}>
                <strong>{k}</strong>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="buy-box">
          <strong className="price">{money(product.price)}</strong>
          <p className="oldprice">{money(product.oldPrice)}</p>
          <p className="small muted mt8">Còn {product.stock} máy (demo stock)</p>
          <button
            type="button"
            className="btn full"
            onClick={() => addToCart(product.id, size)}
          >
            <ShoppingCart aria-hidden /> Thêm vào giỏ
          </button>
          <button
            type="button"
            className="btn outline full"
            onClick={() => toggleWishlist(product.id)}
            aria-pressed={wished}
          >
            <Heart weight={wished ? "fill" : "regular"} aria-hidden />{" "}
            {wished ? "Đã yêu thích" : "Yêu thích"}
          </button>
        </aside>
      </div>
      <div className="detail-advantages">
        {[
          [Truck, "Giao nhanh minh họa"],
          [ShieldCheck, "Bảo hành demo"],
          [ArrowsCounterClockwise, "Đổi trả UI"],
          [SealCheck, "Hàng chính hãng (demo)"],
        ].map(([Icon, label]) => (
          <div className="advantage" key={label as string}>
            <Icon aria-hidden size={28} />
            <span>{label as string}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
