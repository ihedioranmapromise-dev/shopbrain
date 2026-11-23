import Link from "next/link";
import {
  Bell,
  ChevronRight,
  Mic,
  ShieldCheck,
  Store,
  Wallet,
} from "lucide-react";
import { dayBrief, pending } from "@/lib/demo-data";

export default function HomePage() {
  const waiting = pending.length;

  return (
    <main className="px-4 pt-6">
      <header className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
            Owner view
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">ShopBrain</h1>
          <p className="mt-1 text-sm text-mute">Your shops. Your money. Your voice.</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel">
          <Bell size={18} className="text-mute" />
        </div>
      </header>

      <section className="card mb-4 overflow-hidden">
        <div className="border-b border-line bg-gradient-to-r from-accent/20 to-transparent px-4 py-3">
          <p className="text-xs text-mute">Partner brief · right now</p>
          <p className="mt-1 text-[15px] font-medium leading-snug">
            {waiting} actions waiting your OK · money in today {dayBrief.moneyIn}
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
            <Store size={16} className="text-accent" />
            <p className="mt-2 text-lg font-semibold">{dayBrief.storesOpen}</p>
            <p className="text-[11px] text-mute">Stores live</p>
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
                </p>
              </div>
              <ChevronRight size={16} className="text-mute" />
            </Link>
          ))}
        </div>
      </section>

      <section className="card p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-mute">
          Talk to ShopBrain
        </p>
        <p className="mt-1 text-sm text-[#c5cddc]">
          Give an instruction by voice. Staff moves stay pending until you accept.
        </p>
        <Link href="/instruct" className="btn btn-primary mt-3 w-full">
          <Mic size={16} />
          Hold to instruct
        </Link>
      </section>

      <p className="mt-6 text-center text-[11px] text-mute">
        Demo · sample wholesale data · setup by you after YES
      </p>
    </main>
  );
}
