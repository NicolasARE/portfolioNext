import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARENA Nicolas | Portfolio",
  description: "ARENA Nicolas, un développeur fullstack passionné par la création de sites web et d'applications web modernes et performantes.",
  url: "https://nguyen-minh.dev",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
      "Creative Web Developer France",
      "Web Developer Portfolio",
      "Next.js Portfolio",
      "React Portfolio",
      "Arena Nicolas Web Apps",
      "Fullstack Developer",
      "Creative Developer",
      "Creative Developer Strasbourg",
      "Next.js portfolio",
      "React portfolio",
      "arena nicolas portfolio",
  ],
  image: "/images/computer.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "scroll-smooth")}>
        {children}
      </body>
    </html>
  );
}
