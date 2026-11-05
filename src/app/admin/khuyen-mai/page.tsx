import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Admin · Khuyến mãi" };

export default function Page() {
  return <AdminShell title="Khuyến mãi" />;
}
