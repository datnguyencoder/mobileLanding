import type { Metadata } from "next";
import { CompareView } from "@/components/product/CompareView";

export const metadata: Metadata = { title: "So sánh" };

export default function Page() {
  return <CompareView />;
}
