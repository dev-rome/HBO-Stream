import { Inter } from "next/font/google";
import { MenuProvider } from "@/src/context/menu"
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
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
