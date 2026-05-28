import type { BookProps } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBookById } from "@/lib/books";

export default async function BookPage({ params }: BookProps) {
  const { id } = await params;
  const curBook = getBookById(id);
  if (!curBook) notFound();
  const dateAdded = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(curBook.dateAdded));
  return (
    <div className="detail-content">
      <Image
        src="/figma-assets/beach.jpg"
        alt={curBook.name}
        width={800}
        height={800}
        className="detail-cover"
        priority
      />
      <div className="detail-copy">
        <div className="detail-main">
          <div>
            <p className="detail-likes">
              <span className="heart" aria-hidden="true">
                ♡
              </span>
              {curBook.likes}
            </p>
            <h1 className="detail-title">{curBook.name}</h1>
          </div>
          <p className="pill">{curBook.category}</p>
          <p className="detail-author">{curBook.author}</p>
        </div>
        <p className="detail-date">Added on {dateAdded}</p>
      </div>
    </div>
  );
}
