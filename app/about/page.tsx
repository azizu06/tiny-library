import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="about-hero page-section">
        <div className="framed-image about-image">
          <Image
            src="/figma-assets/beach.jpg"
            alt="Ocean shoreline"
            width={729}
            height={729}
            priority
          />
        </div>
        <div className="hero-copy">
          <div className="hero-text">
            <p className="kicker">About Tiny Library</p>
            <h1 className="display-title">Small shelf, big impact</h1>
            <p className="lead">
              Tiny Library started as a simple idea: make it easier for curious
              readers to actually find books they’ll love, not just scroll
              endless lists. Every title here is chosen with care, not
              algorithms.
            </p>
          </div>
          <Link href="/about/contact" className="figma-button">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="feature-row">
        <article className="feature-card">
          <div className="feature-heading">
            <span className="icon" aria-hidden="true">
              ≋
            </span>
            <h2>Curated, not crowded</h2>
          </div>
          <p>
            Tiny Library keeps the catalogue intentionally small so every book
            feels like a recommendation.
          </p>
        </article>
        <div className="feature-divider" />
        <article className="feature-card">
          <div className="feature-heading">
            <span className="icon" aria-hidden="true">
              ⊕
            </span>
            <h2>Easy to browse</h2>
          </div>
          <p>
            Clear categories and simple descriptions make it quick to choose
            what you actually want to read next.
          </p>
        </article>
        <div className="feature-divider" />
        <article className="feature-card">
          <div className="feature-heading">
            <span className="icon" aria-hidden="true">
              ⚐
            </span>
            <h2>Readers first</h2>
          </div>
          <p>
            Every part of Tiny Library is designed to help you spend less time
            searching and more time reading.
          </p>
        </article>
      </section>

      <section className="ethos-section">
        <div className="ethos-card">
          <h1>Our ethos</h1>
          <p>
            At Tiny Library, we believe a good book shouldn’t be hard to find.
            Our ethos is to create a small, carefully curated space where every
            title earns its place on the shelf and readers can trust that
            anything they pick up is worth their time.
          </p>
          <div className="ethos-rule" />
          <p>
            Instead of overwhelming you with thousands of options, Tiny Library
            focuses on a modest collection that feels personal and approachable.
            We want readers to feel like they’ve stepped into a cosy, well-loved
            library where someone has already done the hard work of sorting
            through the noise.
          </p>
        </div>
      </section>
    </main>
  );
}
