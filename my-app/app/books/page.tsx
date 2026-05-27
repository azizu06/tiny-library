import BookCard from "@/components/BookCard";
import books from "@/data/books.json";

export default function BooksGrid() {
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
