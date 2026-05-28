"use client";
import Link from "next/link";
import { getAllCategories } from "@/lib/categories";
import { usePathname } from "next/navigation";
export default function Catbar() {
  const pathname = usePathname();
  const categories = getAllCategories();
  return (
    <div className="flex flex-col gap-1">
      <Link href="/books" className={pathname === "/books" ? "underline" : ""}>
        All
      </Link>
      {categories.map((cat) => (
        <Link
          href={`/books/categories/${cat.slug}`}
          key={cat.id}
          className={
            pathname === `/books/categories/${cat.slug}` ? "underline" : ""
          }
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
