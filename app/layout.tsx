import type { Metadata } from "next";
import {  Monoton, Aldrich, Nova_Round } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/views/Navigation";
import Footer from "@/components/views/Footer";

const novaRound = Nova_Round({
  variable: "--font-nova-round",
  subsets: ["latin"],
  weight: "400",
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight:  "400",
  display: "swap",
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${novaRound.variable} ${monoton.variable} ${aldrich.variable} px-28 m-auto container
		 antialiased`}
      >
		<Navigation />
        {children}
		<Footer />
      </body>
    </html>
  );
}
