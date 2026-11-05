import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, DM_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DatDev Mobile | Công nghệ. Đúng chất bạn.",
    template: "%s | DatDev Mobile",
  },
  description:
    "DatDev Mobile — trải nghiệm mua sắm điện thoại phong cách premium. Prototype Next.js App Router + GSAP.",
};

export const viewport: Viewport = {
  themeColor: "#151515",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip-link" href="#mainContent">
          Chuyển đến nội dung chính
        </a>
        <Header />
        <main id="mainContent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
