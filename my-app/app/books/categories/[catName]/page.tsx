import type { CatProps, SearchProps } from "@/types";
import books from "@/data/books.json";
import BooksGrid from "@/components/BookGrid";
import Form from "next/form";

type FilterProps = CatProps & SearchProps;

export default async function BooksInCat({
  params,
  searchParams,
}: FilterProps) {
  const { catName } = await params;
  const { search } = await searchParams;
  let filteredBooks = books.filter((book) => book.category === catName);
  if (search)
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(search.toLowerCase()),
    );
  return (
    <main className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <h1>{catName}</h1>
        <Form action={`/books/categories/${catName}`}>
          <label htmlFor="search">
            <input type="text" name="search" placeholder="Search for a book" />
          </label>
        </Form>
      </div>
      <BooksGrid books={filteredBooks} />
    </main>
  );
}
