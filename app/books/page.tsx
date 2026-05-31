import BooksGrid from "@/components/BookGrid";
import { filterBooksByQuery, getAllBooks } from "@/lib/books";
import Form from "next/form";
import type { SearchProps } from "@/types";

export default async function BooksView({ searchParams }: SearchProps) {
  const { query } = await searchParams;
  let filteredBooks = getAllBooks();

  if (query) {
    filteredBooks = filterBooksByQuery(filteredBooks, query);
  }

  return (
    <main className="books-content">
      <div className="books-header">
        <h1 className="books-title">Books</h1>
        <Form action="/books">
          <label htmlFor="query">
            <input
              className="search-input"
              id="query"
              type="text"
              name="query"
              placeholder="Search for a book"
              defaultValue={query}
            />
          </label>
        </Form>
      </div>
      <BooksGrid books={filteredBooks} />
    </main>
  );
}
