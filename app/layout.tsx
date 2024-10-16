import type { Metadata as NextMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

interface Metadata extends NextMetadata {
  image?: string;
}

export const metadata: Metadata = {
  title: "ARENA Nicolas | Portfolio",
  description: "ARENA Nicolas, un développeur fullstack passionné par la création de sites web et d'applications web modernes et performantes.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  image: "/images/computer.jpg",
  robots: "all",
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
  openGraph: {
    title: "Mon portfolio | Nicolas ARENA",
    description:
      "ARENA Nicolas, un développeur fullstack passionné par la création de sites web et d'applications web modernes et performantes.",
    images: "/images/computer.jpg",
    url: "https://www.nicolas-arena.fr/",
    type: "website",
    siteName: "Mon portfolio | Nicolas ARENA",
  },
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