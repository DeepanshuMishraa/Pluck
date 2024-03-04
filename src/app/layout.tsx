import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Rubik,Manrope } from '@next/font/google';

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });
const manrope = Manrope({subsets:["latin"],weight: ['400', '700'],})

export const metadata: Metadata = {
  title: "Pluck",
  description: "your one stop for all your product needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black font-bold text-gray-200 ${manrope.className}`}>
        {children}
        
      </body>
    </html>
  );
}
