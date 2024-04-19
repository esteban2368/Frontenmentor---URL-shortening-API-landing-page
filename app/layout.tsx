import type { Metadata } from "next";
import { poppins } from "@/fonts";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "URL shortening - Shortly",
  description: "More than just shorter links - This is landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="containerRoot">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
