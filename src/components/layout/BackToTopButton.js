"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setVisible(scrollY >= pageHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Subir al inicio"
      className="fixed bottom-6 right-6 z-50 btn bg-[#a3509e] btn-circle shadow-xl w-14 h-14 border-none"
    >
      ↑
    </button> 
  );
}