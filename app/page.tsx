 "use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-[6vw] py-16">
      <div className="w-full max-w-[780px] text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em]">Mirai</h1>
        <p className="text-sm sm:text-base text-foreground/70">Choose who you are:</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/gyms"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-black/[.03] dark:bg-white/[.06] px-8 py-5 font-semibold hover:bg-black/[.06] dark:hover:bg-white/[.1]"
          >
            For Gyms
          </Link>
          <Link
            href="/trainers"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-black/[.03] dark:bg-white/[.06] px-8 py-5 font-semibold hover:bg-black/[.06] dark:hover:bg-white/[.1]"
          >
            For Trainers
          </Link>
          <Link
            href="/users"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/15 bg-black/[.03] dark:bg-white/[.06] px-8 py-5 font-semibold hover:bg-black/[.06] dark:hover:bg-white/[.1]"
          >
            For Users
          </Link>
        </div>
      </div>
    </main>
  );
}
