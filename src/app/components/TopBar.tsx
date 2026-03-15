"use client";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm border-b border-gray-200 bg-white/90"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <span className="font-grotesk font-semibold text-gray-900 text-lg tracking-tight">
          nabil
          <sup className="text-[#3b82f6] text-xs ml-0.5">©</sup>
        </span>

        {/* Nav pills */}
        <nav className="flex items-center gap-2">
          {["about", "work", "xp"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#3b82f6] text-white hover:bg-blue-600 transition-colors"
          >
            hire me
          </button>
        </nav>
      </div>
    </header>
  );
}
