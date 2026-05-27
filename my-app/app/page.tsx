import Link from "next/link";
import Image from "next/image";

export default function Home() {
  <main className="flex gap-2">
    <div className="flex flex-col gap-1">
      <p>Browse</p>
      <h1>Find your</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum
        ducimus vel officiis at natus. Harum dignissimos consequuntur rem saepe,
        officia, impedit eaque minus ducimus repudiandae atque, quam at. Ut?
      </p>
      <div className="border rounded-md ">
        <Link href="/books">Browse Books</Link>
      </div>
    </div>
    <Image src="#" alt="home" />
  </main>;
}
