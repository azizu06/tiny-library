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

export type CatProps = {
  params: Promise<{ catName: string }>;
};

export type BookProps = {
  params: Promise<{ id: string }>;
};

export type SearchProps = {
  searchParams: Promise<{ q?: string }>;
};
