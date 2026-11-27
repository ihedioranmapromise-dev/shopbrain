import Link from "next/link";
import { Check, Link2, Mail, Shield, Signal, Store, WifiOff } from "lucide-react";
import { everydayBenefits, onboardingSteps } from "@/lib/demo-data";

export default function AboutPage() {
  return (
    <main className="px-4 pt-6 pb-4">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-mute">About</p>
      <h1 className="mt-1 text-xl font-semibold">ShopBrain</h1>
      <p className="mt-2 text-sm leading-relaxed text-[#c5cddc]">
        Wholesale shops already sell on WhatsApp. The bottleneck is not marketing — it is{" "}
        <span className="text-white">money and stock truth</span> across stores, staff, and buyers.
        ShopBrain is a private desk: staff and customers can write in; nothing is real until you Accept.
      </p>

      <section className="card mt-5 border-accent/30 p-4">
        <div className="flex items-center gap-2">
          <WifiOff size={16} className="text-accent" />
          <h2 className="text-sm font-semibold">Weak network · still records</h2>
        </div>
        <p className="mt-2 text-sm text-[#c5cddc]">
          Sales and deposits do <span className="text-white">not</span> need strong internet every second.
          On the phone they save into a <span className="text-white">local queue</span>. When the network
          returns — even for a moment — they sync to your desk. You still Accept. Nothing is lost because
          the light blinked.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-[#d5dbe8]">
          <li className="flex gap-2">
            <Signal size={14} className="mt-0.5 shrink-0 text-good" />
            Staff can post sale / deposit offline or on bad data
          </li>
          <li className="flex gap-2">
            <Signal size={14} className="mt-0.5 shrink-0 text-good" />
            Queue shows “Waiting to sync” until the phone finds network
          </li>
          <li className="flex gap-2">
            <Signal size={14} className="mt-0.5 shrink-0 text-good" />
            After sync, it appears in your Pending — same as always
          </li>
        </ul>
        <Link href="/reliability" className="btn btn-primary mt-3 w-full">
          See how it works
        </Link>
      </section>

      <section className="card mt-4 p-4">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-accent" />
          <h2 className="text-sm font-semibold">You do not need to sit in the shop</h2>
        </div>
        <p className="mt-2 text-sm text-[#c5cddc]">
          ShopBrain is built for the owner’s phone — home, market, travel, anywhere with a phone.
          Staff work in the store. You see Pending and Accept (with PIN) from where you are.
          Presence in the shop is optional, not required.
        </p>
      </section>

      <section className="card mt-5 p-4">
        <h2 className="text-sm font-semibold">Everyday benefits</h2>
        <ul className="mt-3 space-y-2.5">
          {everydayBenefits.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-[#d5dbe8]">
              <Check size={16} className="mt-0.5 shrink-0 text-good" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card mt-5 p-4">
        <div className="flex items-center gap-2">
          <Link2 size={16} className="text-accent" />
          <h2 className="text-sm font-semibold">Private customer face</h2>
        </div>
        <p className="mt-2 text-sm text-[#c5cddc]">
          Trusted buyers get a private link. They see only sellable stock. Orders land in the same
          Pending queue — you still Approve. Not a public mall.
        </p>
        <Link href="/c" className="btn btn-ghost mt-3 w-full">
          Open sample buyer link
        </Link>
      </section>

      <section className="mt-5">
        <h2 className="text-sm font-semibold">Owner onboarding (real app)</h2>
        <p className="mt-1 text-xs text-mute">From email to live desk on your phone</p>
        <ol className="mt-3 space-y-2">
          {onboardingSteps.map((s) => (
            <li key={s.n} className="card flex gap-3 p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                {s.n}
              </span>
              <div>
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs text-mute">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="card mt-5 space-y-3 p-4">
        <div className="flex items-start gap-2">
          <Shield size={16} className="mt-0.5 text-accent" />
          <div>
            <p className="text-sm font-medium">Staff never share owner password</p>
            <p className="text-xs text-mute">Invite per store · Accept needs owner PIN</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Store size={16} className="mt-0.5 text-accent" />
          <div>
            <p className="text-sm font-medium">One book for staff and buyers</p>
            <p className="text-xs text-mute">Same control model — you stay the boss from anywhere</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Mail size={16} className="mt-0.5 text-accent" />
          <div>
            <p className="text-sm font-medium">Your data, exportable</p>
            <p className="text-xs text-mute">Weekly summary can go to your email</p>
          </div>
        </div>
      </section>

      <Link href="/" className="btn btn-primary mt-5 w-full">
        Back to demo home
      </Link>
      <Link href="/reliability" className="btn btn-ghost mt-2 w-full">
        Network & presence
      </Link>
    </main>
  );
}
