import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Menu from "./components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://blog.ginigo.dev"
  ),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Gabriel Inigo - Blog",
    template: "%s | Gabriel Inigo",
  },
  description:
    "Personal blog where I will talk about experiences and world IT opinions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight  dark:bg-slate-950 bg-white text-gray-900 dark:text-zinc-200">
        <div className="flex flex-col-reverse sm:flex-row-reverse justify-center">
          <header className="h-[100px] sm:pt-20 pl-10">
            <Menu />
          </header>
          <div className="flex flex-col justify-between pt-0 md:pt-8 p-8">
            <main className="md:w-xl max-w-[60ch] w-full space-y-6 overflow-hidden">
              {children}
            </main>
          </div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    // { name: "@johnsmith", url: "https://x.com/johnsmith" },
    // { name: "youtube", url: "https://www.youtube.com/@johnsmith" },
    { name: "linkedin", url: "https://www.linkedin.com/in/gabriel-inigo" },
    { name: "github", url: "https://github.com/ginigo-arg" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
