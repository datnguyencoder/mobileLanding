import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchView } from "@/components/product/SearchView";

export const metadata: Metadata = { title: "Tìm kiếm" };

export default function Page() {
  return (
    <Suspense fallback={<div className="container section">Đang tìm…</div>}>
      <SearchView />
    </Suspense>
  );
}
