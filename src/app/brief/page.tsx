import { AlertTriangle, Banknote, CheckCircle2 } from "lucide-react";
import { dayBrief } from "@/lib/demo-data";

export default function BriefPage() {
  return (
    <main className="px-4 pt-6">
      <h1 className="text-xl font-semibold">Day brief</h1>
      <p className="mt-1 text-sm text-mute">What ShopBrain would tell you tonight</p>

      <div className="card mt-5 p-4">
        <p className="text-sm leading-relaxed text-[#dce3f0]">
          Today you took in <span className="font-semibold text-good">{dayBrief.moneyIn}</span> across{" "}
          {dayBrief.storesOpen} live stores. {dayBrief.depositsPending} deposits still need your OK.{" "}
          {dayBrief.salesAccepted} sales already accepted.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="card flex gap-3 p-4">
          <Banknote className="shrink-0 text-good" size={20} />
          <div>
            <p className="font-medium">Money</p>
            <p className="text-sm text-mute">Accepted in · {dayBrief.moneyIn}</p>
          </div>
        </div>
        <div className="card flex gap-3 p-4">
          <CheckCircle2 className="shrink-0 text-accent" size={20} />
          <div>
            <p className="font-medium">Approvals</p>
            <p className="text-sm text-mute">{dayBrief.depositsPending} still pending your voice or tap</p>
          </div>
        </div>
        <div className="card flex gap-3 p-4">
          <AlertTriangle className="shrink-0 text-warn" size={20} />
          <div>
            <p className="font-medium">Low stock</p>
            <ul className="mt-1 space-y-0.5 text-sm text-mute">
              {dayBrief.lowStock.map((x) => (
                <li key={x}>· {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
