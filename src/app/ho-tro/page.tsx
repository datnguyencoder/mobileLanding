import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Hỗ trợ" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Hỗ trợ" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Hỗ trợ.</h1>
          <p>FAQ / form hỗ trợ mô phỏng.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
