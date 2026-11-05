"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  Heart,
  List,
  MagnifyingGlass,
  ShoppingCart,
  User,
} from "@phosphor-icons/react";
import { useShopStore } from "@/store/shop-store";

const navLinks = [
  ["/", "Trang chủ"],
  ["/dien-thoai", "Điện thoại"],
  ["/uu-dai", "Ưu đãi"],
  ["/so-sanh", "So sánh"],
  ["/cam-nang", "Cẩm nang"],
] as const;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const cart = useShopStore((s) => s.cart);
  const wishlist = useShopStore((s) => s.wishlist);
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  function onSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q");
    if (typeof q === "string" && q.trim()) {
      router.push(`/tim-kiem?q=${encodeURIComponent(q.trim())}`);
      setOpen(false);
    }
  }

  return (
    <>
      <div className="promo-strip">
        Demo UI — voucher <strong>DATDEV100</strong> giảm 100.000đ · không thanh toán thật
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="DatDev Mobile trang chủ">
            <strong>DatDev</strong>
            <span className="slash">/</span>
            <em>MOBILE</em>
          </Link>
          <nav className="nav" aria-label="Điều hướng chính">
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "active" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <form className="header-search" role="search" onSubmit={onSearch}>
            <MagnifyingGlass aria-hidden size={17} />
            <input
              name="q"
              aria-label="Tìm kiếm sản phẩm"
              placeholder="Tìm điện thoại, phụ kiện..."
              autoComplete="off"
            />
            <button className="sr-only" type="submit">
              Tìm kiếm
            </button>
          </form>
          <div className="header-actions">
            <Link className="icon-button" href="/yeu-thich" aria-label="Sản phẩm yêu thích">
              <Heart aria-hidden />
              {wishlist.length ? <span className="count">{wishlist.length}</span> : null}
            </Link>
            <Link className="icon-button" href="/tai-khoan" aria-label="Tài khoản">
              <User aria-hidden />
            </Link>
            <Link className="icon-button" href="/gio-hang" aria-label="Giỏ hàng">
              <ShoppingCart aria-hidden />
              {cartCount ? <span className="count">{cartCount}</span> : null}
            </Link>
            <button
              type="button"
              className="icon-button mobile-menu"
              aria-label="Mở menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <List aria-hidden />
            </button>
          </div>
        </div>
        <nav
          className={`mobile-nav${open ? " open" : ""}`}
          aria-label="Menu di động"
        >
          {navLinks.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/thu-cu-doi-moi" onClick={() => setOpen(false)}>
            Thu cũ đổi mới
          </Link>
          <Link href="/admin" onClick={() => setOpen(false)}>
            Admin demo
          </Link>
        </nav>
      </header>
    </>
  );
}
