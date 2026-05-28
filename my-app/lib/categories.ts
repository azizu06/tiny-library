import categories from "@/data/categories.json";
import type { BookCategorySlug, Category } from "@/types";

export const getAllCategories = (): Category[] => categories as Category[];

export const getCategoryBySlug = (slug: BookCategorySlug) =>
  categories.find((cat) => cat.slug === slug);
