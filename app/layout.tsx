import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import type { RootProps } from "@/types";

export default function Root({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
