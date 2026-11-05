import type { Metadata } from "next";
import { SuccessView } from "@/components/cart/SuccessView";

export const metadata: Metadata = { title: "Đặt hàng thành công" };

export default function Page() {
  return <SuccessView />;
}
