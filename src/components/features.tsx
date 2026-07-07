import { Flame, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Flame,
    label: "Daily Streaks",
    description:
      "Watch small wins stack up. Your streak celebrates consistency — and quietly forgives the days life gets in the way.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Bell,
    label: "Smart Reminders",
    description:
      "Nudges that land at the right moment, not the annoying one. Tuned to your routine, not the other way around.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    icon: BarChart3,
    label: "Progress Insights",
    description:
      "See the patterns behind your progress. Clear, honest stats that show how far you've actually come.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400">
          FEATURES
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          Everything you need to keep going.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <a
                key={feature.label}
                href="#"
                className="group rounded-2xl border border-white/5 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-lg hover:shadow-indigo-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {feature.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-all group-hover:gap-2">
                  Learn more &rarr;
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
