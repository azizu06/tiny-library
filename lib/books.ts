import books from "@/data/books.json";
import type { Book, BookCategorySlug } from "@/types";

export const getAllBooks = (): Book[] => books;

export const getBookById = (id: string) =>
  books.find((book) => book.id.toString() === id);

export const getBooksByCategory = (category: BookCategorySlug): Book[] =>
  books.filter((book) => book.category === category);

export const filterBooksByQuery = (booksToFilter: Book[], query: string) => {
  const normalizedQuery = query.toLowerCase();

  return booksToFilter.filter(
    (book) =>
      book.name.toLowerCase().includes(normalizedQuery) ||
      book.author.toLowerCase().includes(normalizedQuery),
  );
};
