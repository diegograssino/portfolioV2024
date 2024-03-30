import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Barlow, Epilogue, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const primaryFont = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});
const secondaryFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});
const codeFont = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Diego's Portfolio, Fullstack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${primaryFont.variable} ${secondaryFont.variable} ${codeFont.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`${secondaryFont.className} flex flex-col min-h-screen bg-white dark:bg-primary text-black dark:text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
