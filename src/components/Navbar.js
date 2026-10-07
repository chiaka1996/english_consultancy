"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ArrowRight, BookOpen } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Docs", href: "/docs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Utility Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6 text-xs font-medium">
            <a
              href="tel:+2348146450315"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-300" />
              <span>+234 814 645 0315</span>
            </a>
            <a
              href="mailto:englishlabconsultancy@gmail.com"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent-300" />
              <span>englishlabconsultancy@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="hidden sm:inline">In-Person (Lagos) &amp; Virtual Worldwide</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 font-semibold">Mon–Sat: 8AM–6PM WAT</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="English Lab Consultancy Home"
          >
            {/* <div className="w-11 h-11 rounded-md bg-navy-950 flex items-center justify-center text-white font-serif font-bold text-xl tracking-tight border border-navy-800 shadow-sm group-hover:bg-navy-900 transition-colors">
              <span className="text-accent-300 font-serif">E</span>
              <span className="text-slate-100 font-serif">L</span>
            </div> */}
            <div className="relative w-[50px] sm:w-[100px] h-[50px] sm:h-[70px]">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-navy-950 font-serif font-bold text-lg leading-tight tracking-tight">
                English Lab
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
                Consultancy
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent-800 font-semibold bg-accent-50"
                      : "text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/docs"
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-navy-950 px-3 py-2 flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Study Guides</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-accent-800 hover:bg-accent-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-800"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:text-navy-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent-800"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[117px] bottom-0 bg-navy-950/40 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 px-5 pt-4 pb-8 shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-accent-800 font-semibold bg-accent-50"
                        : "text-slate-700 hover:text-navy-950 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-md text-base font-semibold text-white bg-accent-800 hover:bg-accent-700 shadow-sm transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                <a
                  href="tel:+2348146450315"
                  className="flex items-center gap-2 py-1 text-slate-700 font-medium"
                >
                  <Phone className="w-4 h-4 text-accent-700" />
                  <span>+234 814 645 0315</span>
                </a>
                <a
                  href="mailto:englishlabconsultancy@gmail.com"
                  className="flex items-center gap-2 py-1 text-slate-700 font-medium"
                >
                  <Mail className="w-4 h-4 text-accent-700" />
                  <span>englishlabconsultancy@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
