import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";

type BookCardProps = {
  book: Book;
};
export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="book-card">
      <div>
        <Image
          src="/figma-assets/beach.jpg"
          alt={book.name}
          width={800}
          height={800}
          className="book-cover"
        />
        <div className="book-card-body">
          <h2 className="book-card-title">{book.name}</h2>
          <p className="book-author">{book.author}</p>
          <p className="pill">{book.category}</p>
          <p className="likes">
            <span className="heart" aria-hidden="true">
              ♡
            </span>
            {book.likes}
          </p>
        </div>
      </div>
    </Link>
  );
}
