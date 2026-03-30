import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import coatOfArms from "@/app/images/Coats_of_arms_of_Chabany.png";

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
    icon: [{ url: coatOfArms.src, type: "image/png" }],
    shortcut: [{ url: coatOfArms.src, type: "image/png" }],
    apple: [{ url: coatOfArms.src, type: "image/png" }],
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
        className={`${fontProbaPro.className} flex min-h-full flex-col`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
