import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";
import Sendme from "@/components/Sendme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RAA POLYPLAST",
  description: "Leading Manufacturer and Supplier of High-Quality Plastic Granules and Polymer Solutions",
  keywords: "plastic granules, polymer, manufacturer, supplier, RAA POLYPLAST, high-quality plastics, custom plastic solutions",
   verification: {
    google: "1JnWw0myGKuzvNByAFSwlwr-idNxHepP0aTNGYCpY6o", // ← Yeh line important hai
  }, 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        <Sendme />
        <WhatsappIcon />
        {children}
        <Footer />
      </body>
    </html>
  );
}
