import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <main className="flex flex-col gap-3">
      <div className="flex gap-2">
        <Image src="#" alt="logo" />
        <div className="flex flex-col gap-2">
          <p>About</p>
          <h2>Small</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            esse quaerat odit voluptates consequuntur numquam quia beatae
            voluptatibus voluptate. At impedit totam cupiditate aliquam
            recusandae soluta distinctio doloribus ad cum.
          </p>
          <div className="border rounded-md flex justify-center">
            <Link href="/about/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <h2>Curated</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
            modi accusamus asperiores harum molestias, fugit mollitia impedit
            aliquid obcaecati possimus ullam, quae nulla aperiam voluptatibus
            minus. Eveniet, laboriosam accusantium!
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Easy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
            modi accusamus asperiores harum molestias, fugit mollitia impedit
            aliquid obcaecati possimus ullam, quae nulla aperiam voluptatibus
            minus. Eveniet, laboriosam accusantium!
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Readers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
            modi accusamus asperiores harum molestias, fugit mollitia impedit
            aliquid obcaecati possimus ullam, quae nulla aperiam voluptatibus
            minus. Eveniet, laboriosam accusantium!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Our Ethos</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga est
          veritatis sunt dicta tempora rerum ea sint consectetur distinctio
          obcaecati veniam, ipsum doloribus, odit sapiente? Optio iste quos
          facilis similique!
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
          adipisci eligendi culpa quia corrupti iusto inventore, doloribus hic
          non, ratione modi quisquam nisi praesentium perferendis iste sequi
          reprehenderit accusamus!
        </p>
      </div>
      <Image src="#" alt="logo" className="flex justify-center" />
    </main>
  );
}
