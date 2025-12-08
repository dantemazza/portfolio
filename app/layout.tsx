import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dante Mazza | Software Engineer",
  description: "Software Engineer II at Splunk. Building scalable systems and solving hard problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased bg-[#1c2128] text-[#c9d1d9] min-h-screen`}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
          <Header />
          <Navigation />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
