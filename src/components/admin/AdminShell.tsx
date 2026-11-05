"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartLine,
  Cube,
  Package,
  Percent,
  ShoppingBag,
  SquaresFour,
  Warehouse,
} from "@phosphor-icons/react";
import { products } from "@/data/catalog";
import { money } from "@/lib/format";
import { useShopStore } from "@/store/shop-store";

const nav = [
  ["/admin", "Tổng quan", SquaresFour],
  ["/admin/san-pham", "Sản phẩm", Package],
  ["/admin/kho", "Kho", Warehouse],
  ["/admin/don-hang", "Đơn hàng", ShoppingBag],
  ["/admin/khuyen-mai", "Khuyến mãi", Percent],
  ["/admin/bao-cao", "Báo cáo", ChartLine],
] as const;

export function AdminShell({ title }: { title: string }) {
  const pathname = usePathname();
  const orders = useShopStore((s) => s.orders);
  const updateOrderStatus = useShopStore((s) => s.updateOrderStatus);

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link href="/" className="logo">
          <strong>DatDev</strong>
          <span className="slash">/</span>
          <em>ADMIN</em>
        </Link>
        {nav.map(([href, label, Icon]) => (
          <Link
            key={href}
            href={href}
            className={`navitem${pathname === href ? " active" : ""}`}
          >
            <Icon aria-hidden />
            <span>{label}</span>
          </Link>
        ))}
        <p className="small" style={{ marginTop: "auto", padding: 15, color: "#999" }}>
          Demo CRUD localStorage — không phải backend thật.
        </p>
      </aside>
      <div className="admin-main">
        <div className="admin-top">
          <div>
            <h1>{title}</h1>
            <p>Bảng điều khiển minh họa · dữ liệu cục bộ</p>
          </div>
          <Link href="/" className="btn small outline">
            Về storefront
          </Link>
        </div>

        {title === "Dashboard" || title === "Tổng quan" ? (
          <>
            <div className="kpis">
              <div className="kpi">
                <span>Sản phẩm</span>
                <strong>{products.length}</strong>
              </div>
              <div className="kpi">
                <span>Đơn demo</span>
                <strong>{orders.length}</strong>
              </div>
              <div className="kpi">
                <span>Tồn kho mẫu</span>
                <strong>{products.reduce((s, p) => s + p.stock, 0)}</strong>
              </div>
              <div className="kpi">
                <span>Doanh thu demo</span>
                <strong>
                  {money(orders.reduce((s, o) => s + o.total, 0))}
                </strong>
              </div>
            </div>
            <div className="admin-card">
              <h3>
                <Cube aria-hidden /> Sản phẩm nổi bật
              </h3>
              <div className="admin-table-wrap mt16">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Tồn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(0, 5).map((p) => (
                      <tr key={p.id}>
                        <td className="admin-table-title">{p.name}</td>
                        <td>{money(p.price)}</td>
                        <td>{p.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : null}

        {title === "Sản phẩm" ? (
          <div className="admin-card admin-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Brand</th>
                  <th>Giá</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td className="admin-table-title">{p.name}</td>
                    <td>{p.brand}</td>
                    <td>{money(p.price)}</td>
                    <td>{p.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {title === "Kho" ? (
          <div className="admin-card">
            <p>Điều chỉnh tồn kho mẫu — phiên bản Next.js đọc từ seed catalog.</p>
            <ul className="mt16">
              {products.map((p) => (
                <li key={p.id} className="flex between" style={{ padding: "10px 0" }}>
                  <span>{p.name}</span>
                  <strong>{p.stock}</strong>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {title === "Đơn hàng" ? (
          <div className="admin-card admin-table-wrap">
            {!orders.length ? (
              <p>Chưa có đơn demo. Đặt hàng từ storefront để thấy tại đây.</p>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Mã</th>
                    <th>Khách</th>
                    <th>Tổng</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td>{o.id}</td>
                      <td>{o.customer.name}</td>
                      <td>{money(o.total)}</td>
                      <td>
                        <select
                          value={o.status}
                          onChange={(e) =>
                            updateOrderStatus(
                              o.id,
                              e.target.value as typeof o.status,
                            )
                          }
                        >
                          <option value="pending">pending</option>
                          <option value="confirmed">confirmed</option>
                          <option value="shipping">shipping</option>
                          <option value="delivered">delivered</option>
                          <option value="cancelled">cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : null}

        {title === "Khuyến mãi" ? (
          <div className="admin-card">
            <h3>Chiến dịch mẫu</h3>
            <p className="mt8">
              Voucher storefront: <strong>DATDEV100</strong> (−100.000đ).
            </p>
          </div>
        ) : null}

        {title === "Báo cáo" ? (
          <div className="admin-card chartbox">
            <div className="bar-chart" aria-hidden>
              {[40, 65, 48, 80, 55, 90, 70].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
