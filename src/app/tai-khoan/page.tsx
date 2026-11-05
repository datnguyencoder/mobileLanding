import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Tài khoản" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Tài khoản" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Tài khoản.</h1>
          <p>Account overview mẫu lưu cục bộ.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
