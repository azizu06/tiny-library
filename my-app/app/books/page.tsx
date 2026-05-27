import BooksGrid from "@/components/BookGrid";
import books from "@/data/books.json";
import Form from "next/form";
import type { SearchProps } from "@/types";

export default async function BooksView({ searchParams }: SearchProps) {
  const { search } = await searchParams;
  let filteredBooks = [...books];
  if (search)
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(search.toLowerCase()),
    );
  return (
    <main className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <h1>Books</h1>
        <Form action="/books">
          <label htmlFor="search">
            <input type="text" name="search" placeholder="Search for a book" />
          </label>
        </Form>
      </div>
      <BooksGrid books={filteredBooks} />
    </main>
  );
}
