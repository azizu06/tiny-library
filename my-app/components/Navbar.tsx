"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isContact = pathname === "/about/contact";
  return (
    <div className="flex justify-between p-2">
      <Link href="/">
        <Image src="#" alt="logo" />
      </Link>
      <div className="flex gap-2">
        <Link
          href="/books"
          className={pathname.startsWith(`/books`) ? "underline" : ""}
        >
          Books
        </Link>
        <Link
          href="/about"
          className={pathname.startsWith(`/about`) ? "underline" : ""}
        >
          {isContact ? "About:Contact" : "About"}
        </Link>
      </div>
    </div>
  );
}
