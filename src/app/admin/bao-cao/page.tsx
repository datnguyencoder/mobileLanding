import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Admin · Báo cáo" };

export default function Page() {
  return <AdminShell title="Báo cáo" />;
}
