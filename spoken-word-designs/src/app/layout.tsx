import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spoken Word Designs | Luxury African Couture",
  description: "Bespoke luxury fashion, suits, and dresses by Spoken Word Designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable}`}>
      <body
        className="antialiased font-sans bg-[#FAFAF9] text-[#0C0A09]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
