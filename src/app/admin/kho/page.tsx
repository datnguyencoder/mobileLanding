import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = { title: "Admin · Kho" };

export default function Page() {
  return <AdminShell title="Kho" />;
}
