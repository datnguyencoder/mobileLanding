import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Cửa hàng" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Cửa hàng" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Cửa hàng.</h1>
          <p>Danh sách cửa hàng demo, không phải địa chỉ thật.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
