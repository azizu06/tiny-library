export type RootProps = {
  children: React.ReactNode;
};

export type Book = {
  id: number;
  name: string;
  author: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type BookCategorySlug =
  | "fiction"
  | "non-fiction"
  | "romance"
  | "fantasy"
  | "thriller"
  | "horror"
  | "historical"
  | "biography"
  | "self-help";

export type Category = {
  id: number;
  slug: BookCategorySlug;
  label: string;
};

export type CategoryPageProps = {
  params: Promise<{ categoryName: BookCategorySlug }>;
};

export type BookProps = {
  params: Promise<{ id: string }>;
};

export type SearchProps = {
  searchParams: Promise<{ query?: string }>;
};

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
};
