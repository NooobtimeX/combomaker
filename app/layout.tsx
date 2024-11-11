"use client";

import "./globals.css";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import Script from "next/script";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Load Google Adsense after page load to prevent blocking the main thread
  useEffect(() => {
    const loadAdsenseScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6034794215506479";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("load", loadAdsenseScript);
    }

    return () => window.removeEventListener("load", loadAdsenseScript);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6034794215506479" />
        <meta name="genre" content="game" />
      </head>
      <body>
        {/* Google Tag Manager script loaded after page interaction */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TQVQKQM9"
          strategy="afterInteractive"
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TQVQKQM9');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
