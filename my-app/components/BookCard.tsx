import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";

type BookCardProps = {
  book: Book;
};
export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="flex flex-col">
        <Image src={book.image} alt="book" />
        <div className="flex flex-col gap-1">
          <h2>{book.name}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <p>{book.likes}</p>
        </div>
      </div>
    </Link>
  );
}
