import type { CatProps } from "@/types";
import books from "@/data/books.json";
import BookCard from "@/components/BookCard";

export default async function BooksInCat({ params }: CatProps) {
  const { catName } = await params;
  const filteredBooks = books.filter((book) => book.category === catName);
  return (
    <div className="flex flex-wrap gap-2">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
