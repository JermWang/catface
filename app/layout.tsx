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
    "Animal Planet, but corrupted by cats. A surreal broadcast field guide for CATFACE.",
  icons: {
    icon: "/catplanet.png"
  },
  openGraph: {
    title: "CATFACE Planet",
    description: "All animals. All cats. Even the planet.",
    siteName: "CATFACE Planet",
    images: [
      {
        url: "/catface planet.png",
        width: 1200,
        height: 630,
        alt: "CATFACE Planet"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CATFACE Planet",
    description: "All animals. All cats. Even the planet.",
    images: ["/catface planet.png"],
    creator: "@catfacesolana"
  }
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
