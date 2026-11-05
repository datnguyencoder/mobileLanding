import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export function Breadcrumbs({
  current,
  parents = [],
}: {
  current: string;
  parents?: [string, string][];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Trang chủ</Link>
      {parents.map(([label, href]) => (
        <span key={href} className="flex" style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
          <CaretRight aria-hidden size={13} />
          <Link href={href}>{label}</Link>
        </span>
      ))}
      <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
        <CaretRight aria-hidden size={13} />
        <span>{current}</span>
      </span>
    </nav>
  );
}
