"use client";

import { useState } from "react";
import { Menu, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0E1A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] rounded-lg">
          <CheckCircle className="h-6 w-6 text-indigo-400" />
          <span className="text-lg font-semibold tracking-tight text-slate-50">
            Cadence
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm text-slate-400 transition-colors hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]"
          >
            Log in
          </a>
          <Button className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]">
            Start free
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center md:hidden transition-colors hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] rounded-lg"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-slate-50" />
          ) : (
            <Menu className="h-6 w-6 text-slate-50" />
          )}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/5 transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#"
              className="block rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Log in
            </a>
          </li>
          <li>
            <Button className="mt-1 w-full cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/40 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]">
              Start free
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
