 "use client";
import { useState } from "react";

export default function GymsPage() {
  return (
    <main className="px-[10vw] sm:px-[12vw] py-20 space-y-12">
      <header className="max-w-[72ch] space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]">
          Boost Retention. Increase Revenue. Zero Extra Effort.
        </h1>
        <p className="text-foreground/70">
          Help the gym decision-maker see direct financial impact, low risk, and fast time-to-value.
        </p>
        <div className="pt-2">
          <a href="#book-demo" className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90">
            Book a Free Demo
          </a>
        </div>
      </header>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Key gym problems we solve</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>High churn</strong>: Members drop after 2 to 3 months. This costs real revenue.</li>
          <li><strong>Trainer inconsistency</strong>: No standardized way to track trainer-driven engagement.</li>
          <li><strong>Marketing cost for new members</strong>: Gyms spend on acquisition but cannot easily convert trial users into retained members.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Core value propositions</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Retention lift</strong>: Proven retention improvement when members earn tangible rewards for attendance.</li>
          <li><strong>Revenue upside</strong>: Pay-per-active-member model aligns our incentives with the gym.</li>
          <li><strong>Operational simplicity</strong>: Trainers log activity in under 10 seconds. The gym does not need new hardware.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Features that matter to gyms</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Per-active-member billing</strong>: ₹40 per active member per month. Active equals at least one logged activity in the month.</li>
          <li><strong>Trainer dashboards</strong>: View client streaks, top performers, and red flags.</li>
          <li><strong>Member discovery widget</strong>: List the gym in local app searches for motivated users.</li>
          <li><strong>Partner rewards portal</strong>: Showcase partner offers and co-branded challenges.</li>
          <li><strong>Analytics & ROI reporting</strong>: Monthly retention delta, average sessions per member, uplift revenue estimate.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Pricing options presented clearly</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Per-active-member</strong>: ₹40 per active member per month.</li>
          <li><strong>Flat rates for convenience</strong>: Small gyms ₹3,000/month, Medium gyms ₹6,000/month, Large gyms ₹10,000/month.</li>
          <li><strong>Pilot plan</strong>: One-month free pilot for first-time partners limited to 200 members.</li>
        </ul>
      </section>

      {/* Per-active-member calculator */}
      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Per-active-member calculator</h2>
        <Calculator40 />
      </section>

      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Concrete ROI example (one-screen math)</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Assumptions</strong>: 200 members, average membership fee ₹1,200/month, baseline retention 6 months.</li>
          <li><strong>If Mirai increases retention by 10 percent</strong> the gym keeps 20 additional member-months per year.</li>
          <li><strong>Revenue impact</strong>: 20 member-months × ₹1,200 = ₹24,000 additional revenue in the year.</li>
          <li><strong>Cost to gym</strong>: If on per-active-member plan and 150 active members → 150 × ₹40 × 12 = ₹72,000/year.</li>
          <li><strong>Interpretation</strong>: Small retention gains create outsized long-term value. Use pilot data to prove local ROI and then scale.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Sales kit for a gym meeting</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>1-minute opener</strong>: &quot;We make your members come more and spend more by turning consistency into real value.&quot;</li>
          <li><strong>Demo flows to show</strong>: Trainer log → Member earns credits → Member redeems at local cafe → Dashboard shows reduced churn.</li>
          <li><strong>Proof points</strong>: Local pilot statistics, partner list, clear pricing.</li>
          <li><strong>Close ask</strong>: Book a pilot for one branch for 30 days.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Common objections and answers</h2>
        <ul className="list-disc pl-5 space-y-3 text-foreground/80">
          <li><strong>Objection</strong>: This is another app my staff must use.<br /><span className="text-foreground/70">Response: Trainers log in 10 seconds. We integrate with existing attendance systems if needed.</span></li>
          <li><strong>Objection</strong>: Who pays if credits are redeemed?<br /><span className="text-foreground/70">Response: Credits are redeemed via partner-funded discounts or platform-managed coupons. We only charge the gym the per-active-member fee or flat fee you chose.</span></li>
          <li><strong>Objection</strong>: Will this distract trainers from coaching?<br /><span className="text-foreground/70">Response: Trainers earn for properly logged activity so they are motivated to coach better, not less.</span></li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-6">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Implementation checklist for gyms</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Sign partnership</strong>: NDA + pilot terms.</li>
          <li><strong>Onboard 3 trainers</strong>: Short training script and 20-minute onboarding call.</li>
          <li><strong>Add partners</strong>: Local restaurant and one entertainment partner.</li>
          <li><strong>Run pilot</strong>: 30 days with weekly check-ins.</li>
          <li><strong>Measure</strong>: Attendance lift, retention delta, revenue estimate.</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">UX elements for the Gym Page</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Top CTA</strong>: Book a Free Demo</li>
          <li><strong>Three KPI cards</strong>: Current active members, average streak length, retention delta</li>
          <li><strong>Retention chart</strong>: Minimalist line chart showing baseline vs pilot trend</li>
          <li><strong>Pricing block</strong>: Per-active-member calculator (input number of active members, outputs monthly fee)</li>
        </ul>
      </section>

      <section className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Operational KPIs to track monthly</h2>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li><strong>Active members</strong></li>
          <li><strong>Average weekly sessions per member</strong></li>
          <li><strong>Retention at 3 months and 6 months</strong></li>
          <li><strong>Rewards redemptions by category</strong></li>
          <li><strong>Trainer engagement ratio</strong> (logs per trainer per week)</li>
        </ul>
      </section>

      <section id="money-flow" className="max-w-[72ch] space-y-4">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">Diagram: Money and value flow</h2>
        <pre className="bg-black/[.03] dark:bg-white/[.06] rounded-lg p-4 text-sm overflow-auto"><code>{`[Member]  → earns credits through trainer-verified logs → [Platform Credits Wallet]
[Platform Credits Wallet]  → redeems offers with → [Partner Merchants]
[Partner Merchants]  → pay commission for redemptions → [Platform Revenue Pool]
[Platform Revenue Pool]  → pays trainer incentives and covers operational costs
[Gyms]  → pay per-active-member fee → [Platform Revenue Pool]`}</code></pre>
      </section>

      <footer id="book-demo" className="max-w-[72ch] pt-8 pb-24 border-t border-foreground/10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold">Ready to see Mirai in action?</h3>
            <p className="text-foreground/70">Book a 30-minute walkthrough and pilot setup.</p>
          </div>
          <a className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-90" href="/demo">Book a Free Demo</a>
        </div>
      </footer>
    </main>
  );
}

function Calculator40() {
  const [active, setActive] = useState<number>(150);
  const monthly = Math.max(0, active || 0) * 40;
  const yearly = monthly * 12;
  return (
    <div className="rounded-xl border border-foreground/10 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
        <label className="flex-1">
          <span className="block text-sm text-foreground/70">Active members this month</span>
          <input
            type="number"
            min={0}
            value={active}
            onChange={(e) => setActive(parseInt(e.target.value || "0", 10))}
            className="mt-1 w-full rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="e.g., 150"
          />
        </label>
        <div className="flex-1 w-full">
          <div className="text-sm text-foreground/70">Estimated cost</div>
          <div className="mt-1 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-foreground/10 p-3">
              <div className="text-xs text-foreground/60">Monthly</div>
              <div className="text-xl font-semibold">₹{monthly.toLocaleString("en-IN")}</div>
            </div>
            <div className="rounded-lg border border-foreground/10 p-3">
              <div className="text-xs text-foreground/60">Yearly</div>
              <div className="text-xl font-semibold">₹{yearly.toLocaleString("en-IN")}</div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground/70">Assumes ₹40 per active member per month. “Active” means at least one verified activity logged in the month.</p>
    </div>
  );
}
