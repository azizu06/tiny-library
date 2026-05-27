import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import type { RootLayoutProps } from "@/types";

export default function Root({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
