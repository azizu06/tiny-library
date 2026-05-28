import BookCard from "@/components/BookCard";
import { Book } from "@/types";
type BooksGridProps = {
  books: Book[];
};

export default function BooksGrid({ books }: BooksGridProps) {
  return (
    <section>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
