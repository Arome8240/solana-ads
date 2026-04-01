"use client";
import { useState } from "react";
import { HambergerMenu, CloseSquare } from "iconsax-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-gray-900 text-lg">SolanaAds</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a
            href="#how-it-works"
            className="hover:text-gray-900 transition-colors"
          >
            How it works
          </a>
          <a href="#features" className="hover:text-gray-900 transition-colors">
            Features
          </a>
          <a
            href="#developers"
            className="hover:text-gray-900 transition-colors"
          >
            Developers
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Docs
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="text-sm bg-gradient-to-r from-violet-600 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <CloseSquare size={22} color="#374151" variant="Bulk" />
          ) : (
            <HambergerMenu size={22} color="#374151" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm text-gray-700">
          <a href="#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#features" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#developers" onClick={() => setOpen(false)}>
            Developers
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Docs
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-violet-600 to-blue-500 text-white px-4 py-2 rounded-lg text-center font-medium"
          >
            Get started
          </a>
        </div>
      )}
    </nav>
  );
}
