import { getAllCategories } from "@/lib/categories";
import NavLink from "./NavLink";
export default function Catbar() {
  const categories = getAllCategories();
  return (
    <nav className="catbar" aria-label="Book categories">
      <div className="catbar-inner">
        <NavLink href="/books" exact>
          All
        </NavLink>
        {categories.map((cat) => (
          <NavLink href={`/books/categories/${cat.slug}`} key={cat.id} exact>
            {cat.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
