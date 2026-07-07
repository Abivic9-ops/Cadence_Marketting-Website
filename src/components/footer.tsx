import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

const footerLinks = {
  Product: ["Features", "How it works", "Pricing", "Changelog"],
  Company: ["About", "Careers", "Privacy", "Terms"],
  Support: ["Help Center", "Contact", "FAQs", "Status"],
};

export default function Footer() {
  return (
    <footer id="faqs" className="border-t border-white/5 px-4 pt-16 pb-8 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-indigo-400" />
              <span className="text-lg font-semibold tracking-tight text-slate-50">
                Cadence
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              The gentle way to build habits that last — one day at a time.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {["X", "IG", "FB", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-xs font-medium text-slate-400 transition-all duration-200 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold text-slate-200">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-3 text-sm font-semibold text-slate-200">
              Stay updated
            </h4>
            <p className="mb-3 text-sm text-slate-500">
              Get tips and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-9 border-white/10 bg-white/[0.03] text-sm text-slate-200 placeholder:text-slate-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
              />
              <Button className="h-9 shrink-0 cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 text-xs font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <p className="text-center text-xs text-slate-600">
            &copy; 2026 Cadence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
