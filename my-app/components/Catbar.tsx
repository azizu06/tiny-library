"use client";
import Link from "next/link";
import categories from "@/data/categories.json";
import { usePathname } from "next/navigation";
export default function Catbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1">
      <Link href="/books">All</Link>
      {categories.map((cat) => (
        <Link href={`/books/${cat}`} key={cat}>
          {cat}
        </Link>
      ))}
    </div>
  );
}
