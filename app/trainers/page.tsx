"use client";
import { useState } from "react";

export default function TrainersPage() {
  return (
    <main className="px-[10vw] sm:px-[12vw] py-20 space-y-12">
      <header className="max-w-[72ch] space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]">
          Earn More. Keep Clients Motivated.
        </h1>
        <p className="text-foreground/70">
          Show trainers a clear path to extra income, higher client results, and professional differentiation.
        </p>
        <div className="pt-2">
          <a href="#join-trainer" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90">
            Join as a Trainer
          </a>
        </div>
      </header>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Trainer problems we solve</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Irregular income</strong> from PT sessions and commissions.</li>
          <li><strong>Client churn</strong> that reduces monthly earnings.</li>
          <li><strong>No simple way to prove client progress</strong> to gyms or brands.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Core trainer value propositions</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Paid logging</strong>: Earn ₹5 to ₹10 for each valid activity logged.</li>
          <li><strong>Retention bonuses</strong>: Earn up to ₹500 when a client hits a month-long streak.</li>
          <li><strong>Referral rewards</strong>: Earn ₹1,000 when you bring a new gym live on Mirai.</li>
          <li><strong>Faster client results</strong>: Consistency tracking helps you show measurable progress to clients.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Features that matter to trainers</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Quick log widget</strong>: Tap client name, tap session type, confirm. Under 10 seconds.</li>
          <li><strong>Earnings dashboard</strong>: Weekly and monthly payout preview, pending vs paid.</li>
          <li><strong>Client timeline</strong>: See client attendance, nutrition checkmarks, and streak status.</li>
          <li><strong>Referral link</strong>: One-click share to onboard new clients or gyms.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Earnings calculator examples</h2>
        <div className="space-y-3 text-foreground/80">
          <p><strong>Conservative case</strong>: 10 clients, each 12 logged sessions in a month, ₹5 per log.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><em>Monthly logs</em>: 10 × 12 = 120 logs</li>
            <li><em>Trainer payout</em>: 120 × ₹5 = ₹600/month</li>
          </ul>
          <p className="pt-2"><strong>Active case</strong>: 20 clients, each 20 logged sessions in a month, ₹8 per log.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><em>Monthly logs</em>: 20 × 20 = 400 logs</li>
            <li><em>Trainer payout</em>: 400 × ₹8 = ₹3,200/month plus retention bonuses</li>
          </ul>
        </div>
      </section>

      {/* Interactive earnings calculator */}
      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Try your own earnings</h2>
        <EarningsCalculator />
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Why trainers mobilize the gym</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Personal upside</strong>: More client consistency yields more training sessions and platform payouts.</li>
          <li><strong>Low barrier</strong>: Trainers start with their existing clients and zero supply investment.</li>
          <li><strong>Leadership position</strong>: Trainers who deliver results can claim higher private rates and brand deals.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Onboarding script for trainers</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Two-line opener</strong>: "We pay you for logging your clients and give your clients real rewards for showing up."</li>
          <li><strong>Demo flow</strong>: Show the 10-second log on your phone, show earnings page, show redemption example.</li>
          <li><strong>Close ask</strong>: "Bring three clients onto the app this week and start earning immediately."</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Anti-abuse and verification</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Trainer verification</strong>: Trainers sign up with gym code to ensure authenticity.</li>
          <li><strong>Member confirmation</strong>: Members get a notification of each log and can confirm within 24 hours.</li>
          <li><strong>Random audit</strong>: Platform flags suspicious patterns for review.</li>
          <li><strong>Wearable integration</strong> planned to further harden verification.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Trainer CTA flows and incentives plan</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Quick Join</strong>: Sign up with gym code and get first 10 logs paid instantly upon first payroll cycle.</li>
          <li><strong>Monthly leaderboard</strong>: Top 10 trainers get bonus pool payouts.</li>
          <li><strong>Referral sprint</strong>: Time-limited program to onboard new gyms and earn elevated referral bonus.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Visual components for the Trainer Page</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Earnings calculator widget</strong> with input fields: number of clients, logs per client, per-log rate</li>
          <li><strong>Client timeline mockup</strong> showing streaks and redeemable credit counts</li>
          <li><strong>One-click referral card</strong> with prefilled message for WhatsApp</li>
        </ul>
      </section>

      <section id="flow" className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Diagram: Trainer ⇄ Member ⇄ Platform flow</h2>
        <pre className="bg-black/[.03] dark:bg-white/[.06] rounded-lg p-4 text-sm overflow-auto"><code>{`[Trainer] → logs activity for client → [Member Credits Wallet]
[Member] → sees credits and redeems → [Partner Merchant]
[Platform] → pays trainer from platform revenue pool`}</code></pre>
      </section>

      <footer id="join-trainer" className="max-w-[72ch] pt-8 pb-24 border-t border-foreground/10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold">Start earning with Mirai</h3>
            <p className="text-foreground/70">Join with your gym code and log your first 10 sessions.</p>
          </div>
          <a className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90" href="/trainers/apply">Join as a Trainer</a>
        </div>
      </footer>
    </main>
  );
}

function EarningsCalculator() {
  const [clients, setClients] = useState<number>(15);
  const [logsPerClient, setLogsPerClient] = useState<number>(12);
  const [rate, setRate] = useState<number>(6);
  const totalLogs = Math.max(0, (clients || 0) * (logsPerClient || 0));
  const monthly = totalLogs * (rate || 0);
  return (
    <div className="rounded-xl border border-foreground/10 p-4 sm:p-6 space-y-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <label className="block">
          <span className="block text-sm text-foreground/70">Number of clients</span>
          <input
            type="number"
            min={0}
            value={clients}
            onChange={(e) => setClients(parseInt(e.target.value || "0", 10))}
            className="mt-1 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="e.g., 15"
          />
        </label>
        <label className="block">
          <span className="block text-sm text-foreground/70">Logs per client (per month)</span>
          <input
            type="number"
            min={0}
            value={logsPerClient}
            onChange={(e) => setLogsPerClient(parseInt(e.target.value || "0", 10))}
            className="mt-1 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="e.g., 12"
          />
        </label>
        <label className="block">
          <span className="block text-sm text-foreground/70">Payout per valid log (₹)</span>
          <input
            type="number"
            min={0}
            value={rate}
            onChange={(e) => setRate(parseInt(e.target.value || "0", 10))}
            className="mt-1 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="e.g., 6"
          />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg border border-foreground/10 p-3">
          <div className="text-xs text-foreground/60">Total logs (monthly)</div>
          <div className="text-xl font-semibold">{totalLogs.toLocaleString("en-IN")}</div>
        </div>
        <div className="rounded-lg border border-foreground/10 p-3">
          <div className="text-xs text-foreground/60">Estimated payout (monthly)</div>
          <div className="text-xl font-semibold">₹{monthly.toLocaleString("en-IN")}</div>
        </div>
      </div>
      <p className="text-sm text-foreground/70">Assumes each log passes verification. Retention and referral bonuses are additional.</p>
    </div>
  );
}
