import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between p-2">
      <Link href="/">
        <Image src="#" alt="logo" />
      </Link>
      <div className="flex gap-2">
        <Link href="/books">Books</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
