"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { money } from "@/lib/format";
import { useCartSummary, useShopStore } from "@/store/shop-store";

export function CheckoutForm() {
  const router = useRouter();
  const { items, total, count } = useCartSummary();
  const placeOrder = useShopStore((s) => s.placeOrder);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    if (!name || !phone || !address) {
      setError("Vui lòng điền đủ họ tên, điện thoại và địa chỉ.");
      return;
    }
    const order = placeOrder({ name, phone, address });
    if (!order) {
      setError("Giỏ hàng trống.");
      return;
    }
    router.push(`/dat-hang-thanh-cong?id=${order.id}`);
  }

  if (!items.length) {
    return (
      <div className="container">
        <Breadcrumbs current="Thanh toán" />
        <div className="empty">
          <p>Không có sản phẩm để thanh toán.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumbs current="Thanh toán" />
      <div className="section-head">
        <div>
          <span className="eyebrow">CHECKOUT DEMO</span>
          <h1 style={{ marginTop: 10 }}>Thanh toán minh họa.</h1>
          <p>Không tạo giao dịch thật · dữ liệu lưu localStorage trình duyệt.</p>
        </div>
      </div>
      <form className="form-columns" onSubmit={onSubmit} noValidate>
        <div className="panel">
          {error ? (
            <div className="p24" role="alert" style={{ color: "#b42a2a" }}>
              {error}
            </div>
          ) : null}
          <div className="form-section">
            <h3>Thông tin nhận hàng</h3>
            <div className="form-row mt16">
              <div>
                <label className="form-label" htmlFor="name">
                  Họ tên
                </label>
                <input id="name" name="name" className="input" required />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">
                  Số điện thoại
                </label>
                <input id="phone" name="phone" className="input" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="address">
                Địa chỉ
              </label>
              <input id="address" name="address" className="input" required />
            </div>
          </div>
          <div className="form-section">
            <h3>Phương thức</h3>
            <div className="choice-grid mt16">
              <label className="choice">
                <input type="radio" name="pay" defaultChecked /> COD demo
              </label>
              <label className="choice">
                <input type="radio" name="pay" /> Chuyển khoản demo
              </label>
            </div>
          </div>
          <div className="p24">
            <button type="submit" className="btn full">
              Đặt hàng demo · {money(total)}
            </button>
          </div>
        </div>
        <aside className="summary panel">
          <h3>
            {count} sản phẩm · {money(total)}
          </h3>
          <ul className="mt16" style={{ paddingLeft: 18, color: "#666" }}>
            {items.map(({ product, item }) => (
              <li key={product.id} style={{ marginBottom: 8 }}>
                {product.name} × {item.qty}
              </li>
            ))}
          </ul>
        </aside>
      </form>
    </div>
  );
}
