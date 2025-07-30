import CustomCursor from "@/app/components/CustomCursor";
import type { Metadata } from "next";
import { Inter, Inter_Tight, Special_Elite } from "next/font/google";
import { Inter as InterMono } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', 
});

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  variable: '--font-inter-tight',
});

const inter_mono = InterMono({
  subsets: ["latin"],
  variable: '--font-mono',
  weight: "400"
});

const special_elite = Special_Elite({
  subsets: ["latin"],
  variable: '--font-typewriter',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Common Prep",
  description: "AI-Powered Test Preparation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter_tight.variable} ${inter_mono.variable} ${special_elite.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
