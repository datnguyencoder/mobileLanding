import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Thu cũ đổi mới" };

export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs current="Thu cũ đổi mới" />
      <div className="page-hero">
        <div>
          <span className="eyebrow">DATDEV DEMO</span>
          <h1>Thu cũ đổi mới.</h1>
          <p>Ước tính thu cũ minh họa. Không định giá thật.</p>
          <div className="mt16">
            <ButtonLink href="/dien-thoai">Xem điện thoại</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
