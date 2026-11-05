import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Tra cứu đơn" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Tra cứu đơn" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Tra cứu đơn.</h1>
          <p>Tra cứu đơn đã lưu trên trình duyệt hiện tại.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
