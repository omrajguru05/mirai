"use client";
import { useMemo, useState } from "react";

export default function UsersPage() {
  return (
    <main className="px-[10vw] sm:px-[12vw] py-20 space-y-12">
      <header className="max-w-[72ch] space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]">
          Work Out. Earn Credits. Enjoy Life.
        </h1>
        <p className="text-foreground/70">
          Motivate potential users to sign up, complete the free trial, and convert to paid plans by highlighting fairness, unlimited logging, and real rewards.
        </p>
        <div className="pt-2">
          <a href="#start-trial" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90">
            Start Your Free Trial
          </a>
        </div>
      </header>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Problems users face that we fix</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Motivation gap</strong>: Start strong then fade out.</li>
          <li><strong>Poor reward alignment</strong>: Most apps reward steps, not gym consistency.</li>
          <li><strong>Low real-world value</strong>: Rewards feel digital and unusable.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">What users get with Mirai</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Unlimited activity logging</strong>: Log unlimited workouts and diet entries.</li>
          <li><strong>Fair credit earning</strong>: Same earning rules for everyone for identical effort.</li>
          <li><strong>Real-world redemptions</strong>: Food, movies, spas, shopping, trips.</li>
          <li><strong>Transparent leaderboard</strong>: See local streak leaders and challenges.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Credits system primer</h2>
        <div className="space-y-3 text-foreground/80">
          <p className="font-semibold">Earning rules (pilot defaults):</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gym session verified by trainer = 10 credits</li>
            <li>Diet compliance log verified = 5 credits</li>
            <li>Monthly streak of 20 verified sessions = 200 bonus credits</li>
          </ul>
          <p className="font-semibold pt-2">Redemption examples:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Movie ticket at local cinema = 300 credits</li>
            <li>Coffee at partner cafe = 40 credits</li>
            <li>30 percent off at partner restaurant = variable credit cost depending on offer</li>
          </ul>
        </div>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Membership plans and what they unlock</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Basic Plan ₹199/month</strong>: Unlimited logging, redeem local rewards, run in-app challenges.</li>
          <li><strong>Pro Plan ₹499/month</strong>: All Basic features plus premium brand rewards and monthly bonus challenges.</li>
          <li><strong>Elite Plan ₹1,799/month</strong>: All Pro features plus quarterly covered trip, Elite hangouts, and exclusive experiences.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Upgrade trigger mechanics</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Earned-but-locked rewards</strong>: Free users can earn credits but some premium redemptions remain locked to paid tiers.</li>
          <li><strong>Credit expiry</strong>: Trial and free accounts may have shorter credit expiry rules.</li>
          <li><strong>Visible aspiration</strong>: Show exactly how many credits remain to unlock a reward and provide one-tap upgrade modal.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Onboarding flow for users</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>1-click join</strong> with gym code from trainer</li>
          <li><strong>7-day pro trial</strong> for new users from partner trainers</li>
          <li><strong>First 10 logs guaranteed reward</strong> to build immediate momentum</li>
          <li><strong>Clear dashboard</strong> that displays credits, next unlock, and partner offers</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Safety, privacy, and fairness</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Data privacy</strong>: Member data belongs to the member and the gym; platform stores only what is necessary for verification and rewards.</li>
          <li><strong>Fair play</strong>: All credits require trainer verification or device confirmation.</li>
          <li><strong>Customer support</strong>: In-app support for redemption disputes within 48 hours.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Visuals and interactive widgets for User Page</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Credits balance card</strong> showing earned, pending, and redeemed credits</li>
          <li><strong>Rewards gallery</strong> with filters for category and credit cost</li>
          <li><strong>Progress bar</strong> showing credits to next reward with upgrade CTA</li>
        </ul>
      </section>

      {/* Interactive: progress to next reward */}
      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">See how close you are</h2>
        <ProgressToReward />
      </section>

      <section id="lifecycle" className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Diagram: Credit Lifecycle for the User</h2>
        <pre className="bg-black/[.03] dark:bg-white/[.06] rounded-lg p-4 text-sm overflow-auto"><code>{`[User logs]  → verified by trainer → [User Credits Wallet] → User redeems → [Merchant fulfilment]
                    ↓
               trainer earns small commission`}</code></pre>
      </section>

      <footer id="start-trial" className="max-w-[72ch] pt-8 pb-24 border-t border-foreground/10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold">Start your free trial</h3>
            <p className="text-foreground/70">7-day Pro trial via your trainer. No card required.</p>
          </div>
          <a className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90" href="/start-trial">Start Your Free Trial</a>
        </div>
      </footer>
    </main>
  );
}

function ProgressToReward() {
  const [credits, setCredits] = useState<number>(180);
  const [target, setTarget] = useState<number>(300);
  const clampedTarget = Math.max(1, target || 1);
  const pct = useMemo(() => Math.min(100, Math.max(0, Math.round((credits / clampedTarget) * 100))), [credits, clampedTarget]);
  const remaining = Math.max(0, clampedTarget - Math.max(0, credits || 0));
  return (
    <div className="rounded-xl border border-foreground/10 p-4 sm:p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm text-foreground/70">Your current credits</span>
          <input
            type="number"
            min={0}
            value={credits}
            onChange={(e) => setCredits(parseInt(e.target.value || "0", 10))}
            className="mt-1 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="e.g., 180"
          />
        </label>
        <label className="block">
          <span className="block text-sm text-foreground/70">Reward cost (credits)</span>
          <input
            type="number"
            min={1}
            value={target}
            onChange={(e) => setTarget(parseInt(e.target.value || "1", 10))}
            className="mt-1 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="e.g., 300"
          />
        </label>
      </div>
      <div>
        <div className="h-3 w-full rounded-full bg-foreground/10 overflow-hidden">
          <div className="h-full bg-foreground" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-2 text-sm text-foreground/70 flex items-center justify-between">
          <span>{pct}% to reward</span>
          <span>{remaining} credits remaining</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a href="/pricing" className="inline-flex items-center justify-center rounded-full border border-foreground/15 px-4 py-1.5 text-sm font-medium hover:bg-foreground/5">See plans</a>
        <a href="/upgrade" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-4 py-1.5 text-sm font-semibold hover:opacity-90">Upgrade to unlock faster</a>
      </div>
    </div>
  );
}
