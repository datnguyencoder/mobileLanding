import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Phụ kiện" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Phụ kiện" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Phụ kiện.</h1>
          <p>Danh mục phụ kiện đang là placeholder — chưa có dữ liệu phụ kiện trong bản demo.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
