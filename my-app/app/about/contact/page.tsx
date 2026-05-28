import Image from "next/image";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-main">
        <div className="contact-text">
          <p className="kicker">Ways to reach us</p>
          <h1 className="display-title">Contact</h1>
          <ul>
            <li>Book suggestions: Tell us what we should add to the shelf.</li>
            <li>Corrections: Spotted an error? Let us know so we can fix it.</li>
            <li>
              Careers: Interested in joining Tiny Library? Send a short note and
              we’ll get back to you.
            </li>
          </ul>
          <div className="contact-email">
            <p>Email: hello@tinylibrary.example</p>
            <br />
            <p>
              We’re a small team, so we don’t list a phone number—email is best.
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/figma-assets/tinylibrary-logo.png"
        alt="Tiny Library"
        width={254}
        height={200}
        className="footer-logo"
      />
    </main>
  );
}
