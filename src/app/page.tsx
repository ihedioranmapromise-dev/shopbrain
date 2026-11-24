import Link from "next/link";
import {
  Bell,
  ChevronRight,
  Info,
  Mic,
  Package,
  ShieldCheck,
  Store,
  Wallet,
} from "lucide-react";
import { dayBrief, pending, stock } from "@/lib/demo-data";

export default function HomePage() {
  const waiting = pending.length;
  const lowCount = stock.filter((s) => s.low).length;

  return (
    <main className="px-4 pt-6">
      <header className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
            Owner view
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">ShopBrain</h1>
          <p className="mt-1 text-sm text-mute">Your shops. Your money. Your stock.</p>
        </div>
        <Link
          href="/about"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel"
        >
          <Info size={18} className="text-mute" />
        </Link>
      </header>

      <section className="card mb-4 overflow-hidden">
        <div className="border-b border-line bg-gradient-to-r from-accent/20 to-transparent px-4 py-3">
          <p className="text-xs text-mute">Partner brief · right now</p>
          <p className="mt-1 text-[15px] font-medium leading-snug">
            {waiting} need your OK · {lowCount} stock lines low · in today{" "}
            {dayBrief.moneyIn}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-px bg-line">
          <div className="bg-panel px-3 py-3">
            <Wallet size={16} className="text-good" />
            <p className="mt-2 text-lg font-semibold">{dayBrief.moneyIn}</p>
            <p className="text-[11px] text-mute">In (accepted)</p>
          </div>
          <div className="bg-panel px-3 py-3">
            <ShieldCheck size={16} className="text-warn" />
            <p className="mt-2 text-lg font-semibold">{waiting}</p>
            <p className="text-[11px] text-mute">Need approve</p>
          </div>
          <div className="bg-panel px-3 py-3">
            <Package size={16} className="text-accent" />
            <p className="mt-2 text-lg font-semibold">{lowCount}</p>
            <p className="text-[11px] text-mute">Low stock</p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#e8ecf4]">Needs you</h2>
          <Link href="/pending" className="text-xs font-medium text-accent">
            See all
          </Link>
        </div>
        <div className="space-y-2">
          {pending.slice(0, 2).map((p) => (
            <Link
              key={p.id}
              href={`/pending/${p.id}`}
              className="card flex items-center gap-3 px-3 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warn/10 text-warn">
                {p.voiceNote ? <Mic size={18} /> : <ShieldCheck size={18} />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{p.title}</p>
                <p className="truncate text-xs text-mute">
                  {p.staff} · {p.time}
                  {p.amount ? ` · ${p.amount}` : ""}
                  {p.payTag ? ` · ${p.payTag}` : ""}
                </p>
              </div>
              <ChevronRight size={16} className="text-mute" />
            </Link>
          ))}
        </div>
      </section>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <Link href="/stock" className="card flex flex-col gap-2 p-3">
          <Package size={18} className="text-accent" />
          <span className="text-sm font-medium">Stock board</span>
          <span className="text-[11px] text-mute">Speak or snap adjust</span>
        </Link>
        <Link href="/about" className="card flex flex-col gap-2 p-3">
          <Info size={18} className="text-accent" />
          <span className="text-sm font-medium">Why ShopBrain</span>
          <span className="text-[11px] text-mute">Benefits & onboarding</span>
        </Link>
      </div>

      <section className="card p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-mute">
          <Store size={12} /> Multi-store
        </div>
        <p className="mt-1 text-sm text-[#c5cddc]">
          One account · staff limited per shop · Accept needs PIN · export to your email.
        </p>
        <Link href="/stores" className="btn btn-ghost mt-3 w-full">
          View stores
        </Link>
      </section>

      <p className="mt-6 text-center text-[11px] text-mute">
        Demo · sample data · setup is the paid package
      </p>
    </main>
  );
}
