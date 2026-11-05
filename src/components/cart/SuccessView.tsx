"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { useShopStore } from "@/store/shop-store";
import { money } from "@/lib/format";

function SuccessInner() {
  const params = useSearchParams();
  const id = params.get("id");
  const orders = useShopStore((s) => s.orders);
  const order = orders.find((o) => o.id === id) ?? orders[0];

  return (
    <div className="container">
      <Breadcrumbs current="Thành công" />
      <div className="empty">
        <CheckCircle size={42} weight="fill" color="#7aa81a" aria-hidden />
        <h1 style={{ marginTop: 12 }}>Đặt hàng demo thành công</h1>
        {order ? (
          <p className="mt8">
            Mã đơn <strong>{order.id}</strong> · {money(order.total)}
          </p>
        ) : (
          <p className="mt8">Đơn đã được ghi nhận trên trình duyệt này.</p>
        )}
        <div className="flex wrap mt24" style={{ justifyContent: "center" }}>
          <ButtonLink href="/don-hang">Xem đơn hàng</ButtonLink>
          <ButtonLink href="/dien-thoai" variant="outline">
            Tiếp tục mua
          </ButtonLink>
          <Link className="text-link" href="/tra-cuu">
            Tra cứu đơn
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SuccessView() {
  return (
    <Suspense fallback={<div className="container section">Đang tải…</div>}>
      <SuccessInner />
    </Suspense>
  );
}
