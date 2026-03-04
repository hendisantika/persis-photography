"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Activities" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent group-hover:bg-accent transition-colors duration-300">
              <span className="font-serif text-lg font-bold text-accent group-hover:text-background transition-colors duration-300">
                P
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wide text-foreground">
                PERSIS
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                Photography
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full border border-accent px-6 py-2 text-sm uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-fit rounded-full border border-accent px-6 py-2 text-sm uppercase tracking-wider text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
