"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, ArrowsLeftRight } from "@phosphor-icons/react";
import { assetPath } from "@/data/catalog";
import { discountPercent, money } from "@/lib/format";
import { useShopStore } from "@/store/shop-store";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const wishlist = useShopStore((s) => s.wishlist);
  const compare = useShopStore((s) => s.compare);
  const toggleWishlist = useShopStore((s) => s.toggleWishlist);
  const toggleCompare = useShopStore((s) => s.toggleCompare);
  const addToCart = useShopStore((s) => s.addToCart);
  const wished = wishlist.includes(product.id);
  const compared = compare.includes(product.id);
  const off = discountPercent(product.price, product.oldPrice);

  return (
    <article className="product-card" data-reveal-item>
      <div className="product-media">
        <span className="chip">{product.badge}</span>
        <button
          type="button"
          className={`heart${wished ? " is-active" : ""}`}
          aria-label={wished ? "Bỏ yêu thích" : "Thêm yêu thích"}
          aria-pressed={wished}
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart weight={wished ? "fill" : "regular"} aria-hidden />
        </button>
        <Link href={`/san-pham/${product.id}`}>
          <Image
            src={assetPath(product.image)}
            alt={product.name}
            width={280}
            height={280}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="product-body">
        <Link href={`/san-pham/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="rating">
          <b>★</b> {product.rate} · {product.reviews} đánh giá mẫu
        </p>
        <div className="price-line">
          <strong className="price">{money(product.price)}</strong>
          {product.oldPrice > product.price ? (
            <>
              <span className="oldprice">{money(product.oldPrice)}</span>
              {off > 0 ? <span className="discount">-{off}%</span> : null}
            </>
          ) : null}
        </div>
        <p className="installment-note">Trả góp demo từ 0% · voucher DATDEV100</p>
        <div className="card-actions">
          <button
            type="button"
            className="btn small"
            onClick={() => addToCart(product.id, product.storage)}
          >
            <ShoppingCart aria-hidden /> Thêm giỏ
          </button>
          <button
            type="button"
            className={`btn small outline${compared ? " active" : ""}`}
            aria-pressed={compared}
            onClick={() => toggleCompare(product.id)}
          >
            <ArrowsLeftRight aria-hidden /> So sánh
          </button>
        </div>
      </div>
    </article>
  );
}
