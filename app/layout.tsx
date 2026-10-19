import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic",
});

const siteTitle = `${profile.name} | ${profile.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.intro,
  openGraph: {
    title: siteTitle,
    description: profile.intro,
    locale: "ar_SA",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable} ${ibmPlexSansArabic.className}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.reveal,.stagger-item,.hero-item,.photo-enter{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
