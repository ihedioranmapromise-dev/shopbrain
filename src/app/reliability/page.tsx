"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  CloudOff,
  MapPin,
  RefreshCw,
  Shield,
  Smartphone,
  Wifi,
  WifiOff,
} from "lucide-react";

export default function ReliabilityPage() {
  const [phase, setPhase] = useState<"offline" | "syncing" | "done">("offline");

  function runDemo() {
    setPhase("syncing");
    setTimeout(() => setPhase("done"), 1600);
  }

  return (
    <main className="px-4 pt-6 pb-8">
      <Link href="/about" className="inline-flex items-center gap-1 text-sm text-mute">
        <ArrowLeft size={16} /> About
      </Link>

      <h1 className="mt-4 text-xl font-semibold">Network & presence</h1>
      <p className="mt-1 text-sm text-mute">
        Built for real shops — weak data, owner not always on site
      </p>

      <section className="card mt-5 p-4">
        <div className="flex items-center gap-2">
          <WifiOff size={18} className="text-warn" />
          <h2 className="font-semibold">1. Will it record sales when network is bad?</h2>
        </div>
        <p className="mt-2 text-sm text-[#c5cddc]">
          Yes. The phone keeps a <span className="text-white">local queue</span>. Staff taps sale or
          deposit — it saves on the device first. When data returns, it uploads. You then see it in
          Pending and Accept. Bad network does not erase the sale.
        </p>

        <div className="mt-4 rounded-xl border border-line bg-[#0f131a] p-3">
          {phase === "offline" && (
            <>
              <div className="flex items-center gap-2 text-sm">
                <CloudOff size={16} className="text-warn" />
                <span className="font-medium">Shop phone · no signal</span>
              </div>
              <p className="mt-2 text-xs text-mute">
                Staff recorded: Sale · Lace 20 yards · ₦84,000 · cash
              </p>
              <p className="mt-1 text-xs text-warn">Saved on this phone · waiting to sync</p>
              <button type="button" className="btn btn-primary mt-3 w-full" onClick={runDemo}>
                <Wifi size={16} /> Simulate network back
              </button>
            </>
          )}
          {phase === "syncing" && (
            <div className="flex items-center gap-2 py-4 text-sm text-accent">
              <RefreshCw size={16} className="animate-spin" />
              Syncing queue to owner desk…
            </div>
          )}
          {phase === "done" && (
            <>
              <div className="flex items-center gap-2 text-sm text-good">
                <Check size={16} />
                <span className="font-medium">Synced · on your Pending</span>
              </div>
              <p className="mt-2 text-xs text-mute">
                Sale is not final until you Accept (PIN). Stock drops only then.
              </p>
              <Link href="/pending" className="btn btn-good mt-3 w-full">
                Open Pending
              </Link>
              <button
                type="button"
                className="btn btn-ghost mt-2 w-full"
                onClick={() => setPhase("offline")}
              >
                Replay demo
              </button>
            </>
          )}
        </div>
      </section>

      <section className="card mt-4 p-4">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-accent" />
          <h2 className="font-semibold">2. Must you be in the shop?</h2>
        </div>
        <p className="mt-2 text-sm text-[#c5cddc]">
          No. You work from <span className="text-white">anywhere</span> your phone works — house,
          another market, travel. Staff stay in the shop. You get Pending alerts and Accept with your
          PIN. Being present is a choice, not a requirement.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
          <div className="rounded-xl border border-line bg-panel p-3">
            <Smartphone size={18} className="mx-auto text-accent" />
            <p className="mt-2 font-medium">Owner phone</p>
            <p className="text-mute">Anywhere · Accept</p>
          </div>
          <div className="rounded-xl border border-line bg-panel p-3">
            <MapPin size={18} className="mx-auto text-good" />
            <p className="mt-2 font-medium">Staff in shop</p>
            <p className="text-mute">Record · queue · sync</p>
          </div>
        </div>
      </section>

      <section className="card mt-4 p-4">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-accent" />
          <h2 className="font-semibold">What stays true</h2>
        </div>
        <ul className="mt-2 space-y-2 text-sm text-[#d5dbe8]">
          <li className="flex gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-good" />
            Sale is saved on the device even offline
          </li>
          <li className="flex gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-good" />
            Sync when network returns — nothing silent-lost
          </li>
          <li className="flex gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-good" />
            Owner Accept still required (PIN)
          </li>
          <li className="flex gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-good" />
            Owner can be outside the shop
          </li>
        </ul>
      </section>

      <Link href="/" className="btn btn-primary mt-5 w-full">
        Owner home
      </Link>
    </main>
  );
}
