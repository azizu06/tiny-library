import Link from "next/link";

export default function Home() {
  return (
    <main className="home-hero page-section">
      <div className="hero-copy">
        <div className="hero-text">
          <p className="kicker">Browse books</p>
          <h1 className="display-title">Find your next favourite book</h1>
          <p className="lead">
            Tiny Library is a cosy corner of the web where readers discover
            hand-picked titles across every genre, from timeless classics to
            hidden indie gems.
          </p>
        </div>
        <Link href="/books" className="figma-button">
          Browse Books
        </Link>
      </div>
      <div className="home-art" aria-hidden="true" />
    </main>
  );
}
