import type { CategoryPageProps, SearchProps } from "@/types";
import BooksGrid from "@/components/BookGrid";
import Form from "next/form";
import { filterBooksByQuery, getBooksByCategory } from "@/lib/books";
import { getCategoryBySlug } from "@/lib/categories";

type FilterProps = CategoryPageProps & SearchProps;

export default async function BooksInCat({
  params,
  searchParams,
}: FilterProps) {
  const { categoryName } = await params;
  const { query } = await searchParams;
  const category = getCategoryBySlug(categoryName);
  let filteredBooks = getBooksByCategory(categoryName);

  if (query) {
    filteredBooks = filterBooksByQuery(filteredBooks, query);
  }

  return (
    <main className="books-content">
      <div className="books-header">
        <h1 className="books-title">{category?.label ?? categoryName}</h1>
        <Form action={`/books/categories/${categoryName}`}>
          <label htmlFor="query">
            <input
              className="search-input"
              id="query"
              type="text"
              name="query"
              defaultValue={query}
              placeholder="Search for a book"
            />
          </label>
        </Form>
      </div>
      <BooksGrid books={filteredBooks} />
    </main>
  );
}
