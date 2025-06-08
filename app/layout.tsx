import type { Metadata } from "next";
import {  Monoton, Aldrich, Nova_Round, Saira_Stencil_One } from "next/font/google";
import Navigation from "@/components/views/global/Navigation";
import Footer from "@/components/views/global/Footer";
import "./globals.css";
// import Cursor from "@/components/ui/cursor";

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


const sairaStencilOne = Saira_Stencil_One({
  variable: "--font-saira-stencil-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
	title: "Portfolio | Utpal",
	authors: [{ name: "Utpal"}],
	keywords: ["portfolio", "web developer", "designer", "developer", "frontend developer", "Utpal"],
	creator: "Utpal",
	icons: {
		icon: "/favicon.png",
	},
	robots: {
		index: true,
		follow: true,
	},
	description: "This is my portfolio website showcasing my work and skills. I am a web developer and designer with a passion for creating immersive digital experiences. Let's create something extraordinary together. You can download my CV from here. Feel free to contact me for any queries or collaborations. I am always open to new opportunities and challenges. I hope you enjoy browsing through my portfolio and find it inspiring. Thank you for visiting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
	
    <html lang="en">
      <body
        className={`${novaRound.variable} ${monoton.variable} ${aldrich.variable} ${sairaStencilOne.variable} px-4 md:px-8 lg:px-20 xl:px-32 m-auto container antialiased`}>
			{/* <Cursor /> */}
		<Navigation />
        {children}
		<Footer />
      </body>
    </html>
  );
}
