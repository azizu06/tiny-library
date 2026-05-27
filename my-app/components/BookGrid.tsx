import BookCard from "@/components/BookCard";
import { Book } from "@/types";
type BooksGridProps = {
  books: Book[];
};

export default function BooksGrid({ books }: BooksGridProps) {
  return (
    <main className="flex flex-col gap-2">
      <h1>Books</h1>
      <div className="flex flex-wrap gap-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
