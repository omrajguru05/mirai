 "use client";
 import { useEffect, useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<"gyms" | "trainers" | "users" | null>(null);

  useEffect(() => {
    // Deep-link via hash (#gyms | #trainers | #users)
    const hash = (window.location.hash || "").replace("#", "");
    if (hash === "gyms" || hash === "trainers" || hash === "users") {
      setSelected(hash as typeof selected);
    }
  }, []);

  useEffect(() => {
    if (selected) {
      history.replaceState(null, "", `#${selected}`);
    } else {
      history.replaceState(null, "", window.location.pathname);
    }
  }, [selected]);

  const Pill = ({ id, label }: { id: "gyms" | "trainers" | "users"; label: string }) => (
    <button
      onClick={() => setSelected(id)}
      aria-expanded={selected === id}
      className="rounded-full border border-black/10 dark:border-white/20 bg-black/[.03] dark:bg-white/[.06] hover:bg-black/[.06] dark:hover:bg-white/[.1] px-5 py-2 text-sm font-semibold tracking-[-0.01em]"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="flex items-center justify-between px-[10vw] pt-20">
        <div className="flex items-center gap-3">
          <div className="size-4 rounded-full bg-foreground" aria-hidden />
          <span className="font-bold tracking-tight">Mirai</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-foreground/70">
          <button onClick={() => setSelected("gyms")} className="hover:text-foreground">For Gyms</button>
          <button onClick={() => setSelected("trainers")} className="hover:text-foreground">For Trainers</button>
          <button onClick={() => setSelected("users")} className="hover:text-foreground">For Users</button>
        </nav>
      </header>

      {/* Main */}
      <main className="px-[10vw] sm:px-[12vw] mt-16 sm:mt-24">
        <section className="max-w-[70ch]">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            Insanely simple fitness rewards.
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 mb-10">
            Mirai rewards consistency. Trainers verify workouts and diet; members earn credits. Credits turn into
            real-world rewards—food, entertainment, wellness. Minimal software, maximum clarity.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Pill id="gyms" label="For Gyms" />
            <Pill id="trainers" label="For Trainers" />
            <Pill id="users" label="For Users" />
          </div>
        </section>

        <section className="mt-20 border-t border-foreground/10 pt-12">
          {selected === "gyms" && (
            <article className="max-w-[72ch] animate-in fade-in slide-in-from-bottom-1 duration-200">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-4">Boost Retention. Increase Revenue. Zero Extra Effort.</h2>
              <ul className="space-y-3 text-sm sm:text-base text-foreground/80 mb-8">
                <li><strong className="text-foreground">+25%</strong> average member retention in first 3 months</li>
                <li>New member sign-ups via rewards from partner brands and local businesses</li>
                <li>Automated trainer logging system that eliminates manual tracking</li>
                <li>Flexible Pricing: Pay per active member or choose a flat monthly rate for unlimited members</li>
              </ul>
              <div className="flex gap-4 flex-wrap mb-10">
                <a href="#book-demo" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90">Book a Free Demo</a>
              </div>
              {/* Visuals (non-photo) */}
              <div className="grid gap-8 sm:grid-cols-3">
                {/* Minimalist chart */}
                <svg viewBox="0 0 200 120" className="w-full h-28 sm:h-32 border border-foreground/10 rounded-xl p-3">
                  <path d="M10 100 L70 80 L120 70 L190 40" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="3"/>
                  <circle cx="190" cy="40" r="3" fill="currentColor"/>
                </svg>
                {/* Gym dashboard mock UI */}
                <div className="border border-foreground/10 rounded-xl p-3 h-28 sm:h-32">
                  <div className="h-3 w-16 bg-foreground/20 rounded mb-2" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 bg-foreground/5 rounded" />
                    <div className="h-14 bg-foreground/5 rounded" />
                    <div className="h-14 bg-foreground/5 rounded" />
                  </div>
                </div>
                {/* Trainer logging illustration */}
                <div className="border border-foreground/10 rounded-xl p-3 h-28 sm:h-32 flex items-center justify-center">
                  <div className="w-14 h-24 border border-foreground/20 rounded-lg relative">
                    <div className="absolute inset-x-2 top-2 h-2 bg-foreground/10 rounded" />
                    <div className="absolute inset-x-2 top-6 h-2 bg-foreground/20 rounded" />
                    <div className="absolute inset-x-2 bottom-4 h-6 bg-foreground/10 rounded" />
                  </div>
                </div>
              </div>
            </article>
          )}

          {selected === "trainers" && (
            <article className="max-w-[72ch] animate-in fade-in slide-in-from-bottom-1 duration-200">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-4">Earn More. Keep Clients Motivated.</h2>
              <ul className="space-y-3 text-sm sm:text-base text-foreground/80 mb-8">
                <li><strong className="text-foreground">₹5–₹10</strong> per activity log tracked in the system</li>
                <li>Retention bonuses up to <strong className="text-foreground">₹500</strong> per client for consistent attendance</li>
                <li><strong className="text-foreground">₹1000</strong> referral reward for each gym brought onto the platform</li>
                <li>Ultra-fast logging: record attendance and diet compliance in under <strong className="text-foreground">10 seconds</strong> from your phone</li>
              </ul>
              <div className="flex gap-4 flex-wrap mb-10">
                <a href="#join-trainer" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90">Join as a Trainer</a>
              </div>
              {/* Visuals (non-photo) */}
              <div className="grid gap-8 sm:grid-cols-3">
                {/* Earnings/streaks mock */}
                <div className="border border-foreground/10 rounded-xl p-3 h-28 sm:h-32">
                  <div className="h-3 w-20 bg-foreground/20 rounded mb-2" />
                  <div className="h-16 bg-foreground/5 rounded" />
                </div>
                {/* Earnings calculator widget */}
                <div className="border border-foreground/10 rounded-xl p-3 h-28 sm:h-32">
                  <div className="h-3 w-24 bg-foreground/20 rounded mb-2" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 bg-foreground/10 rounded" />
                    <div className="h-6 bg-foreground/10 rounded" />
                    <div className="col-span-2 h-8 bg-foreground/5 rounded" />
                  </div>
                </div>
                {/* Icon high-five */}
                <svg viewBox="0 0 100 100" className="w-full h-28 sm:h-32 border border-foreground/10 rounded-xl p-3">
                  <path d="M20 70 C25 60, 30 50, 40 45" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M80 70 C75 60, 70 50, 60 45" stroke="currentColor" strokeWidth="4" fill="none" />
                  <circle cx="50" cy="35" r="6" fill="currentColor" />
                </svg>
              </div>
            </article>
          )}

          {selected === "users" && (
            <article className="max-w-[72ch] animate-in fade-in slide-in-from-bottom-1 duration-200">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-4">Work Out. Earn Credits. Enjoy Life.</h2>
              <ul className="space-y-3 text-sm sm:text-base text-foreground/80 mb-8">
                <li>Credits for every logged gym session and diet compliance</li>
                <li>Redeem at restaurants, movies, spas, and more with exclusive discounts</li>
                <li>Elite perks like free trips, premium events, and partner store vouchers</li>
                <li>Membership Plans: <strong className="text-foreground">Basic ₹149/month</strong>, <strong className="text-foreground">Elite ₹399/month</strong></li>
              </ul>
              <div className="flex gap-4 flex-wrap mb-10">
                <a href="#start-trial" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90">Start Your Free Trial</a>
              </div>
              {/* Visuals (non-photo) */}
              <div className="grid gap-8 sm:grid-cols-3">
                {/* Credits dashboard mock */}
                <div className="border border-foreground/10 rounded-xl p-3 h-28 sm:h-32">
                  <div className="h-3 w-28 bg-foreground/20 rounded mb-2" />
                  <div className="h-16 bg-foreground/5 rounded" />
                </div>
                {/* Partner brand logos grid */}
                <div className="border border-foreground/10 rounded-xl p-3 h-28 sm:h-32 grid grid-cols-3 gap-2 place-items-center">
                  <div className="size-6 rounded-full bg-foreground/20" />
                  <div className="size-6 rounded bg-foreground/20" />
                  <div className="size-6 rounded-full bg-foreground/20" />
                  <div className="size-6 rounded bg-foreground/20" />
                  <div className="size-6 rounded-full bg-foreground/20" />
                  <div className="size-6 rounded bg-foreground/20" />
                </div>
                {/* Illustration of user enjoying reward */}
                <svg viewBox="0 0 120 100" className="w-full h-28 sm:h-32 border border-foreground/10 rounded-xl p-3">
                  <circle cx="60" cy="30" r="10" fill="currentColor" />
                  <path d="M30 90 C30 70, 90 70, 90 90" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </article>
          )}

          {!selected && (
            <div className="text-foreground/50 text-sm">
              Select an audience above to see a focused explanation.
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="px-[10vw] sm:px-[12vw] py-24 border-t border-foreground/10 text-foreground/60">
        © {new Date().getFullYear()} Mirai
      </footer>
    </div>
  );
}
