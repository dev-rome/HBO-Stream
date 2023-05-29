import { Inter } from "next/font/google";
import { HBOStreamProvider } from "@/src/context/HBOProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HBO Stream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HBOStreamProvider>{children}</HBOStreamProvider>
      </body>
    </html>
  );
}
