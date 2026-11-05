import type { Metadata } from "next";
import { CheckoutForm } from "@/components/cart/CheckoutForm";

export const metadata: Metadata = { title: "Thanh toán" };

export default function Page() {
  return <CheckoutForm />;
}
