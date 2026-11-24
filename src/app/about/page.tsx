import Link from "next/link";
import { Check, Mail, Shield } from "lucide-react";
import { everydayBenefits, onboardingSteps } from "@/lib/demo-data";

export default function AboutPage() {
  return (
    <main className="px-4 pt-6 pb-4">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-mute">About</p>
      <h1 className="mt-1 text-xl font-semibold">ShopBrain</h1>
      <p className="mt-2 text-sm leading-relaxed text-[#c5cddc]">
        Wholesale shops already sell on WhatsApp. The bottleneck is not marketing — it is{" "}
        <span className="text-white">money and stock truth</span> across stores, staff, and credit.
        ShopBrain is a private desk: staff work fast; you stay in control.
      </p>

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
            <p className="text-xs text-mute">
              Invite per store. Seller only sees their shop. Accept needs owner PIN.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Mail size={16} className="mt-0.5 text-accent" />
          <div>
            <p className="text-sm font-medium">Your data, exportable</p>
            <p className="text-xs text-mute">
              Business stays in your locked account. Weekly summary can go to your email.
            </p>
          </div>
        </div>
      </section>

      <Link href="/" className="btn btn-primary mt-5 w-full">
        Back to demo home
      </Link>
      <Link href="/brief" className="btn btn-ghost mt-2 w-full">
        Day brief
      </Link>
    </main>
  );
}
