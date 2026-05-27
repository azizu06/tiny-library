import type { RootProps } from "@/types";
import Catbar from "@/components/Catbar";

export default function Root({ children }: RootProps) {
  return (
    <html lang="en">
      <body className="flex gap-5">
        <Catbar />
        {children}
      </body>
    </html>
  );
}
