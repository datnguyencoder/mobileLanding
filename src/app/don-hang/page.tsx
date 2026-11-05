import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Đơn hàng" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Đơn hàng" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Đơn hàng.</h1>
          <p>Lịch sử đơn demo từ localStorage.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
