import type { BookProps } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBookById } from "@/lib/books";

export default async function BookPage({ params }: BookProps) {
  const { id } = await params;
  const curBook = getBookById(id);
  if (!curBook) notFound();
  return (
    <div className="flex gap-2">
      <Image src={curBook.image} alt="book" />
      <div className="flex flex-col gap-2">
        <p>{curBook.likes}</p>
        <h2>{curBook.name}</h2>
        <p>{curBook.category}</p>
        <p>{curBook.author}</p>
        <p>Added on {curBook.dateAdded}</p>
      </div>
    </div>
  );
}
