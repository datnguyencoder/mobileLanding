import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Cẩm nang" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Cẩm nang" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Cẩm nang.</h1>
          <p>Danh mục bài viết editorial demo.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
