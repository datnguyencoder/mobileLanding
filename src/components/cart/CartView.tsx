"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { assetPath } from "@/data/catalog";
import { money } from "@/lib/format";
import { useCartSummary, useShopStore } from "@/store/shop-store";

export function CartView() {
  const { items, sub, discount, total, count, voucher } = useCartSummary();
  const setQty = useShopStore((s) => s.setQty);
  const removeFromCart = useShopStore((s) => s.removeFromCart);
  const setVoucher = useShopStore((s) => s.setVoucher);

  return (
    <div className="container">
      <Breadcrumbs current="Giỏ hàng" />
      <div className="section-head">
        <div>
          <span className="eyebrow">YOUR BASKET</span>
          <h1 style={{ fontSize: 47, margin: "10px 0 5px" }}>Giỏ hàng của bạn.</h1>
          <p>{count} sản phẩm đang trong giỏ.</p>
        </div>
      </div>

      {!items.length ? (
        <div className="empty">
          <p>Giỏ hàng trống.</p>
          <ButtonLink href="/dien-thoai" className="mt16">
            Tiếp tục mua sắm
          </ButtonLink>
        </div>
      ) : (
        <div className="basket-layout">
          <div className="panel">
            {items.map(({ product, item }) => (
              <div className="cart-row" key={product.id}>
                <Link href={`/san-pham/${product.id}`}>
                  <Image
                    src={assetPath(product.image)}
                    alt={product.name}
                    width={145}
                    height={160}
                  />
                </Link>
                <div>
                  <Link href={`/san-pham/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                  <p className="small muted">
                    {item.size || product.storage} · {product.color}
                  </p>
                  <div className="flex mt16">
                    <span className="chip green">Còn hàng</span>
                    <button
                      type="button"
                      className="text-link"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong className="price">
                    {money(product.price * item.qty)}
                  </strong>
                  <div className="cart-qty mt16" style={{ marginLeft: "auto" }}>
                    <button
                      type="button"
                      aria-label="Giảm số lượng"
                      onClick={() => setQty(product.id, -1)}
                    >
                      −
                    </button>
                    <b>{item.qty}</b>
                    <button
                      type="button"
                      aria-label="Tăng số lượng"
                      onClick={() => setQty(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="summary panel">
            <h3>Tóm tắt</h3>
            <div className="money-row">
              <span>Tạm tính</span>
              <strong>{money(sub)}</strong>
            </div>
            <div className="money-row">
              <span>Voucher</span>
              <strong>−{money(discount)}</strong>
            </div>
            <div className="form-group mt16">
              <label className="form-label" htmlFor="voucher">
                Mã giảm giá
              </label>
              <input
                id="voucher"
                className="input"
                defaultValue={voucher}
                placeholder="DATDEV100"
                onBlur={(e) => setVoucher(e.target.value)}
              />
            </div>
            <div className="money-row total">
              <span>Tổng</span>
              <strong>{money(total)}</strong>
            </div>
            <ButtonLink href="/thanh-toan" full className="mt16">
              Thanh toán demo
            </ButtonLink>
          </aside>
        </div>
      )}
    </div>
  );
}
