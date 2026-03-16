"use client";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
        ? "backdrop-blur-sm border-b border-gray-200 bg-white/90"
        : "bg-white"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <span className="font-grotesk font-semibold text-gray-900 text-lg tracking-tight relative z-50">
          Nabil
          <sup className="text-[#3b82f6] text-xs ml-0.5">©</sup>
        </span>

        {/* Desktop Nav pills */}
        <nav className="hidden md:flex items-center gap-2">
          {["about", "work", "xp"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors capitalize"
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-[100%] opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-8">
          {["about", "work", "xp"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => scrollTo(item), 300);
              }}
              className="text-3xl font-grotesk font-bold text-gray-800 hover:text-[#3b82f6] transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setTimeout(() => scrollTo("contact"), 300);
            }}
            className="mt-6 px-10 py-4 rounded-full text-xl font-medium bg-[#3b82f6] text-white hover:bg-blue-600 transition-colors shadow-lg"
          >
            hire me
          </button>
        </div>
      </div>
    </header>
  );
}
