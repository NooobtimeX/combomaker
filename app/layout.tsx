import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Combo Maker",
  description: "Craft your own combos and share them with the world!",
  keywords: ["combo", "maker", "game", "fighting", "games", "combos"],
  openGraph: {
    title: "Combo Maker",
    description: "Craft your own combos and share them with the world!",
    url: "https://combo-maker.com",
    type: "website",
    images: [
      {
        url: "https://combo-maker.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Combo Maker",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6034794215506479" />
        <meta name="genre" content="game" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6034794215506479"
          crossOrigin="anonymous"
        ></script>
        <GoogleTagManager gtmId="GTM-TQVQKQM9" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
