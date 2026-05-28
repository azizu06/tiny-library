import type { CatProps, SearchProps } from "@/types";
import BooksGrid from "@/components/BookGrid";
import Form from "next/form";
import { filterBooksByQuery, getBooksByCategory } from "@/lib/books";
import { getCategoryBySlug } from "@/lib/categories";

type FilterProps = CatProps & SearchProps;

export default async function BooksInCat({
  params,
  searchParams,
}: FilterProps) {
  const { catName } = await params;
  const { query } = await searchParams;
  const category = getCategoryBySlug(catName);
  let filteredBooks = getBooksByCategory(catName);

  if (query) {
    filteredBooks = filterBooksByQuery(filteredBooks, query);
  }

  return (
    <main className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <h1>{category?.label ?? catName}</h1>
        <Form action={`/books/categories/${catName}`}>
          <label htmlFor="query">
            <input
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
