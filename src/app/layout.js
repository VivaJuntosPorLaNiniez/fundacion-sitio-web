import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/layout/BackToTopButton";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-28 sm:pt-32">{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}