import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    tagline: "Perfect for getting started",
    features: [
      "Up to 3 habits",
      "Basic reminders",
      "Simple analytics",
      "7-day history",
    ],
    button: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/ month",
    tagline: "Everything you need to grow",
    features: [
      "Unlimited habits",
      "Smart reminders",
      "Advanced insights",
      "Habit categories",
      "30-day history",
      "Priority support",
    ],
    button: "Start Pro trial",
    subline: "7-day free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$12",
    period: "/ month",
    tagline: "Build better habits together",
    features: [
      "Everything in Pro",
      "Team challenges",
      "Shared habits",
      "Team analytics",
      "Admin controls",
      "Priority support",
    ],
    button: "Start Team trial",
    subline: "7-day free trial",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400">
          PRICING
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Simple pricing for every goal.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] ${
                plan.highlighted
                  ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/[0.08] to-[#111827] shadow-lg shadow-indigo-500/10 lg:scale-105"
                  : "border-white/5 bg-[#111827]"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-0.5 text-xs font-semibold text-white shadow-lg">
                  Most popular
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-50">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-50">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{plan.tagline}</p>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3 w-3 text-emerald-400" />
                    </span>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full cursor-pointer rounded-xl py-5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A] ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {plan.button}
              </Button>
              {plan.subline && (
                <p className="mt-2 text-center text-xs text-slate-500">
                  {plan.subline}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
