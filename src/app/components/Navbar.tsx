"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 189 35.32"
            className="h-[18px] w-auto transition-colors duration-300"
            style={{ fill: scrolled ? "#1d1d1f" : "#ffffff" }}
          >
            <g>
              <path
                d="M22.73,8.64h5.08l12,31.17H35.58L33,33H17.57L15,39.81H10.73ZM31.58,29.3,25.29,12.73,19,29.3Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M45.39,39.81V8.64H56.33a18.58,18.58,0,0,1,6.58,1.11A14.64,14.64,0,0,1,68,12.92a13.72,13.72,0,0,1,3.26,4.91,17.13,17.13,0,0,1,1.14,6.4,17.38,17.38,0,0,1-1.14,6.42A13.42,13.42,0,0,1,68,35.55a14.89,14.89,0,0,1-5.07,3.15,18.58,18.58,0,0,1-6.58,1.11Zm4-3.72h7a13.91,13.91,0,0,0,4.88-.81A10.62,10.62,0,0,0,65,32.93a10.42,10.42,0,0,0,2.4-3.75,14,14,0,0,0,.83-4.95,14.1,14.1,0,0,0-.83-5A10.42,10.42,0,0,0,65,15.52a10.62,10.62,0,0,0-3.75-2.35,13.91,13.91,0,0,0-4.88-.81h-7Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M79.36,39.81V8.64H90.3a18.58,18.58,0,0,1,6.58,1.11A14.64,14.64,0,0,1,102,12.92a13.85,13.85,0,0,1,3.26,4.91,17.13,17.13,0,0,1,1.14,6.4,17.38,17.38,0,0,1-1.14,6.42,13.55,13.55,0,0,1-3.26,4.9,14.89,14.89,0,0,1-5.07,3.15,18.58,18.58,0,0,1-6.58,1.11Zm4-3.72h7a14,14,0,0,0,4.88-.81,10.62,10.62,0,0,0,3.75-2.35,10.4,10.4,0,0,0,2.39-3.75,13.82,13.82,0,0,0,.84-4.95,13.87,13.87,0,0,0-.84-5,10.4,10.4,0,0,0-2.39-3.75,10.62,10.62,0,0,0-3.75-2.35,14,14,0,0,0-4.88-.81h-7Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M113.33,8.64h21.4v3.72H117.28V22.55h14.85V26H117.28V36.09h17.45v3.72h-21.4Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M143.57,24.23a11.92,11.92,0,0,1,.93-4.68,12.16,12.16,0,0,1,6.35-6.47,11.36,11.36,0,0,1,4.59-.95,11.24,11.24,0,0,1,4.6.95c.26.11.5.24.74.37.95-1,1.94-2,2.95-2.95a16.33,16.33,0,0,0-2-1.07,16.13,16.13,0,0,0-12.5,0,16.24,16.24,0,0,0-5.12,3.44A16.41,16.41,0,0,0,140.64,18a16.11,16.11,0,0,0,0,12.49,16.69,16.69,0,0,0,1.22,2.29c.5-.43,1-.87,1.51-1.28s1.16-.9,1.74-1.35a13,13,0,0,1-.61-1.24A11.91,11.91,0,0,1,143.57,24.23Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M169.79,31.46a15.53,15.53,0,0,0,1.7-7.23A15.6,15.6,0,0,0,170.23,18a17.18,17.18,0,0,0-1.46-2.71c-1.05,1-2.09,1.94-3.05,3a11.4,11.4,0,0,1,.65,1.31,12.17,12.17,0,0,1-2.56,13.21A12.25,12.25,0,0,1,160,35.37a11.24,11.24,0,0,1-4.6,1,11.36,11.36,0,0,1-4.59-1l-.7-.35c-.65.52-1.33,1-2,1.54-.47.38-.93.78-1.39,1.17A17.49,17.49,0,0,0,149.2,39a16,16,0,0,0,9.56.91,16.5,16.5,0,0,0,3.1-1l3.91,4.56h4.93L165.21,37A16.32,16.32,0,0,0,169.79,31.46Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M184.57,12.36H173.35V8.64h26.38v3.72H188.52V39.81h-4Z"
                transform="translate(-10.73 -8.17)"
              />
              <path
                d="M148.55,22.93h5.89V17h2.74v5.89h5.89v2.74h-5.89v5.89h-2.74V25.67h-5.89Z"
                transform="translate(-10.73 -8.17)"
              />
            </g>
          </svg>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#tjanster"
            className={`text-[12px] font-normal transition-colors ${
              scrolled
                ? "text-gray-500 hover:text-[#1d1d1f]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Tjänster
          </Link>
          <Link
            href="#process"
            className={`text-[12px] font-normal transition-colors ${
              scrolled
                ? "text-gray-500 hover:text-[#1d1d1f]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Process
          </Link>
          <Link
            href="#om-oss"
            className={`text-[12px] font-normal transition-colors ${
              scrolled
                ? "text-gray-500 hover:text-[#1d1d1f]"
                : "text-white/70 hover:text-white"
            }`}
          >
            Om oss
          </Link>
          <Link
            href="#kontakt"
            className="bg-[#242748] text-white px-4 py-1.5 rounded-full text-[11px] font-medium hover:bg-[#1a1d36] transition-colors"
          >
            Boka möte
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 ${
            scrolled ? "text-[#1d1d1f]" : "text-white"
          }`}
          aria-label="Meny"
        >
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[1.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.06] px-6 py-8 space-y-6">
          <Link
            href="#tjanster"
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-gray-600 hover:text-[#1d1d1f]"
          >
            Tjänster
          </Link>
          <Link
            href="#process"
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-gray-600 hover:text-[#1d1d1f]"
          >
            Process
          </Link>
          <Link
            href="#om-oss"
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-gray-600 hover:text-[#1d1d1f]"
          >
            Om oss
          </Link>
          <Link
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="block bg-[#242748] text-white px-5 py-3 rounded-full text-sm font-medium text-center"
          >
            Boka möte
          </Link>
        </div>
      )}
    </nav>
  );
}
