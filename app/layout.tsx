import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import { CATFACE_TAGLINE } from "@/lib/copy";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CATFACE Planet",
  description: CATFACE_TAGLINE,
  icons: {
    icon: "/catplanet.png"
  },
  openGraph: {
    title: "CATFACE Planet",
    description: CATFACE_TAGLINE,
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
    description: CATFACE_TAGLINE,
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
