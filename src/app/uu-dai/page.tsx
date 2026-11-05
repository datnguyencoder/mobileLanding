import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { assetPath, products } from "@/data/catalog";
import { money } from "@/lib/format";

export const metadata: Metadata = { title: "Ưu đãi" };

export default function Page() {
  const deals = products.filter((p) => p.oldPrice > p.price).slice(0, 6);
  return (
    <div className="container">
      <Breadcrumbs current="Ưu đãi" />
      <div className="promo-hero">
        <div>
          <span className="eyebrow">FLASH DEMO</span>
          <h1>Ưu đãi mẫu trong tuần.</h1>
          <p>Giá và chương trình mang tính minh họa.</p>
          <ButtonLink href="/dien-thoai">Mua ngay</ButtonLink>
        </div>
        <Image src={assetPath("hero-offers.webp")} alt="" width={700} height={400} />
      </div>
      <div className="card-grid section-tight">
        {deals.map((p) => (
          <Link key={p.id} href={`/san-pham/${p.id}`} className="panel p24">
            <h3>{p.name}</h3>
            <p className="price mt8">{money(p.price)}</p>
            <span className="oldprice">{money(p.oldPrice)}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
