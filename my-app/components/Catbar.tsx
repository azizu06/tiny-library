import Link from "next/link";
import categories from "@/data/categories.json";
export default function Catbar() {
  return (
    <div className="flex flex-col gap-1">
      {categories.map((cat) => (
        <Link href={`/books/${cat}`} key={cat}>
          {cat}
        </Link>
      ))}
    </div>
  );
}
