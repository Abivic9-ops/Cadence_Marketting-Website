import { Button } from "@/components/ui/button";
import { Check, Flame, BookOpen, Droplets } from "lucide-react";

function HabitRow({
  icon,
  label,
  streak,
  days,
}: {
  icon: React.ReactNode;
  label: string;
  streak: number;
  days: boolean[];
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/[0.06]">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>
      <span className="min-w-0 flex-1 text-sm font-medium text-slate-200">
        {label}
      </span>
      <div className="hidden items-center gap-1 sm:flex">
        {days.map((filled, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              filled ? "bg-indigo-400" : "bg-white/10"
            }`}
          />
        ))}
      </div>
      <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
        <Flame className="h-3 w-3" />
        {streak} day streak
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-slate-300">
          <span className="text-indigo-400">&#10024;</span>
          Small steps, every single day
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Build habits that{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            actually stick.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Cadence makes the daily stuff feel effortless — gentle reminders,
          streaks that forgive an off day, and progress you can actually see. No
          pressure. Just momentum.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button className="h-12 cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E1A]">
            Start your Cadence — it&apos;s free
          </Button>
          <p className="text-sm text-slate-500">
            No credit card. No guilt-trips.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 shadow-2xl backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-200">
              Today&apos;s progress
            </h3>
            <span className="text-xs text-slate-500">Today</span>
          </div>

          <div className="space-y-3">
            <HabitRow
              icon={<Check className="h-4 w-4" />}
              label="Morning workout"
              streak={12}
              days={[true, true, true, true, true, false, true]}
            />
            <HabitRow
              icon={<BookOpen className="h-4 w-4" />}
              label="Read 20 pages"
              streak={5}
              days={[true, false, true, true, false, true, true]}
            />
            <HabitRow
              icon={<Droplets className="h-4 w-4" />}
              label="Drink 8 glasses"
              streak={23}
              days={[true, true, true, true, true, true, true]}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#6366f1", "#10b981", "#8b5cf6", "#f59e0b"].map(
                (color, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A0E1A] text-[10px] font-semibold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {["EW", "VC", "SJ", "AK"][i]}
                  </span>
                ),
              )}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0A0E1A] bg-white/10 text-[10px] font-semibold text-slate-400">
                +2K
              </span>
            </div>
          </div>
          <p>
            Joined by 25,000+ people finding their rhythm{" "}
            <span className="text-amber-400">&#9733;</span> 4.9/5 from 2,400+
            reviews
          </p>
        </div>
      </div>
    </section>
  );
}
