import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald"
});

export const metadata: Metadata = {
  title: "CATFACE Planet",
  description:
    "Animal Planet, but corrupted by cats. A surreal broadcast field guide for CATFACE."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
