"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { assetPath, getProduct } from "@/data/catalog";
import { money } from "@/lib/format";
import { useShopStore } from "@/store/shop-store";

export function CompareView() {
  const compare = useShopStore((s) => s.compare);
  const toggleCompare = useShopStore((s) => s.toggleCompare);
  const items = compare.map((id) => getProduct(id)).filter(Boolean);

  return (
    <div className="container">
      <Breadcrumbs current="So sánh" />
      <div className="section-head">
        <div>
          <span className="eyebrow">COMPARE</span>
          <h1 style={{ marginTop: 10 }}>So sánh tối đa 3 máy.</h1>
          <p>Chọn sản phẩm từ danh sách để thêm vào bảng so sánh.</p>
        </div>
        <ButtonLink href="/dien-thoai" variant="outline">
          Thêm sản phẩm
        </ButtonLink>
      </div>
      {!items.length ? (
        <div className="empty">
          <p>Chưa có máy nào trong danh sách so sánh.</p>
        </div>
      ) : (
        <div className="compare-wrap">
          <div
            className="compare-grid"
            style={{
              gridTemplateColumns: `190px repeat(${items.length}, minmax(0, 1fr))`,
            }}
          >
            <div className="label">Sản phẩm</div>
            {items.map((p) => (
              <div className="heading" key={p!.id}>
                <Image
                  src={assetPath(p!.image)}
                  alt={p!.name}
                  width={160}
                  height={160}
                />
                <Link href={`/san-pham/${p!.id}`}>
                  <h3>{p!.name}</h3>
                </Link>
                <button
                  type="button"
                  className="text-link mt8"
                  onClick={() => toggleCompare(p!.id)}
                >
                  Gỡ
                </button>
              </div>
            ))}
            <div className="label">Giá</div>
            {items.map((p) => (
              <div key={`${p!.id}-price`} className="good">
                {money(p!.price)}
              </div>
            ))}
            <div className="label">Chip</div>
            {items.map((p) => (
              <div key={`${p!.id}-chip`}>{p!.specs.Chip}</div>
            ))}
            <div className="label">Màn hình</div>
            {items.map((p) => (
              <div key={`${p!.id}-screen`}>{p!.specs["Màn hình"]}</div>
            ))}
            <div className="label">Camera</div>
            {items.map((p) => (
              <div key={`${p!.id}-cam`}>{p!.specs.Camera}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
