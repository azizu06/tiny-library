"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { NavLinkProps } from "@/types";
export default function NavLink({
  href,
  children,
  exact = false,
}: NavLinkProps) {
  const pathname = usePathname();
  const isBookDetail = href === "/books" && /^\/books\/\d+$/.test(pathname);
  const isActive = exact
    ? pathname === href || isBookDetail
    : pathname.startsWith(href);
  const isCategoryLink = exact || href.startsWith("/books/categories");
  const className = isCategoryLink
    ? `cat-link ${isActive ? "cat-link-active" : ""}`
    : `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
