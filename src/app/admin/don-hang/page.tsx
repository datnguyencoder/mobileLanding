import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Admin · Đơn hàng" };

export default function Page() {
  return <AdminShell title="Đơn hàng" />;
}
