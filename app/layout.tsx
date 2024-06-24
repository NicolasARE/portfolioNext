import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARENA Nicolas | Portfolio",
  description: "ARENA Nicolas, un développeur fullstack passionné par la création de sites web et d'applications web modernes et performantes.",
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
