"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["Home", "About", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled ? "bg-black/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="my-name text-xl font-semibold text-white">
              Eslam ELngar
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link}`}
                className="nav-link text-lg text-white rounded-md px-3 py-2 transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center p-2 rounded-md md:hidden text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500"
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={` md:hidden transition-max-height duration-300 overflow-hidden ${open ? "max-h-96 backdrop-blur-md shadow-lg": "max-h-0"} ${
          scrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              className="block px-3 py-2 rounded-md text-gray-200"
              style={{
                borderColor: "var(--niceColor)",
                borderWidth: "0 0 1px 0",
                marginBottom: "5px",
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
