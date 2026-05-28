"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isContact = pathname === "/about/contact";
  return (
    <div className="navbar">
      <Link href="/" className="navbar-logo" aria-label="Tiny Library home">
        <Image
          src="/figma-assets/tinylibrary-logo.png"
          alt="Tiny Library"
          width={178}
          height={117}
          priority
        />
      </Link>
      <div className="navbar-links">
        <NavLink href="/books">Books</NavLink>
        <NavLink href="/about">
          {isContact ? "About : Contact" : "About"}
        </NavLink>
      </div>
    </div>
  );
}
