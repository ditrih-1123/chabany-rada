import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import siteFavicon from "@/app/images/new-favicon.png";

import { fontProbaPro } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Чабанівська територіальна громада",
  description: "Офіційний вебпортал Чабанівської територіальної громади",
  icons: {
    icon: [{ url: siteFavicon.src, type: "image/png" }],
    shortcut: [{ url: siteFavicon.src, type: "image/png" }],
    apple: [{ url: siteFavicon.src, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${fontProbaPro.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${fontProbaPro.className} flex min-h-full w-full min-w-0 flex-col`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
