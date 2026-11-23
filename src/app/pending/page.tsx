import Link from "next/link";
import { ChevronRight, Mic, Package, Wallet } from "lucide-react";
import { pending } from "@/lib/demo-data";

const iconFor = {
  deposit: Wallet,
  sale: Package,
  stock: Package,
};

export default function PendingPage() {
  return (
    <main className="px-4 pt-6">
      <h1 className="text-xl font-semibold">Pending approvals</h1>
      <p className="mt-1 text-sm text-mute">
        Nothing serious counts until you accept.
      </p>

      <div className="mt-5 space-y-3">
        {pending.map((p) => {
          const Icon = iconFor[p.type];
          return (
            <Link key={p.id} href={`/pending/${p.id}`} className="card block p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-panel border border-line">
                  <Icon size={18} className="text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate font-medium">{p.title}</p>
                    {p.voiceNote && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] text-accent">
                        <Mic size={10} /> Voice
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-mute">{p.detail}</p>
                  <p className="mt-2 text-xs text-mute">
                    {p.staff} · {p.store.replace("-", " ")} · {p.time}
                  </p>
                </div>
                <div className="text-right">
                  {p.amount && (
                    <p className="text-sm font-semibold text-good">{p.amount}</p>
                  )}
                  <ChevronRight size={16} className="ml-auto mt-2 text-mute" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
