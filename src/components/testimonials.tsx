const testimonials = [
  {
    quote:
      "Cadence helped me stay consistent in a way I never managed before. The streaks keep me motivated without the shame spiral.",
    name: "Emma Wilson",
    initials: "EW",
    color: "bg-indigo-500",
  },
  {
    quote:
      "The reminders actually fit my day instead of nagging me. It just works.",
    name: "Victor Chen",
    initials: "VC",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Our whole team uses Cadence for wellness challenges. It's genuinely brought us closer.",
    name: "Sarah Johnson",
    initials: "SJ",
    color: "bg-violet-500",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#111827] to-[#0A0E1A] p-6 sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
                Trusted by thousands finding their rhythm
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                Join a community quietly getting better, one day at a time.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {testimonials.map((t) => (
                    <span
                      key={t.name}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111827] text-[10px] font-semibold text-white ${t.color}`}
                    >
                      {t.initials}
                    </span>
                  ))}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#111827] bg-white/10 text-[10px] font-semibold text-slate-400">
                    +2K
                  </span>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                <span>&#9733;</span> 4.9/5 from 2,400+ reviews
              </div>
            </div>

            <div className="space-y-4 lg:col-span-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <p className="text-sm leading-relaxed text-slate-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white ${t.color}`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500">Verified user</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
