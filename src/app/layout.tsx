import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Bodoni_Moda, Dancing_Script } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sasha Elisabeth — Vaktherapie en Coaching",
  description: "Vaktherapie en coaching voor mensen die zichzelf willen ontdekken en groeien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${bodoni.variable} ${cormorant.variable} ${dancing.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
