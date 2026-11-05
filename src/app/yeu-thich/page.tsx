import type { Metadata } from "next";
import { WishlistView } from "@/components/product/WishlistView";

export const metadata: Metadata = { title: "Yêu thích" };

export default function Page() {
  return <WishlistView />;
}
