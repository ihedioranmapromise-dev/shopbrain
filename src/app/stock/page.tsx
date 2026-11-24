import Link from "next/link";
import { AlertTriangle, Camera, Mic, Package } from "lucide-react";
import { stock, stores } from "@/lib/demo-data";

export default function StockPage() {
  const low = stock.filter((s) => s.low);
  const storeName = (id: string) => stores.find((x) => x.id === id)?.name ?? id;

  return (
    <main className="px-4 pt-6">
      <header className="mb-5">
        <h1 className="text-xl font-semibold">Stock</h1>
        <p className="mt-1 text-sm text-mute">
          All stores · nothing moves without your OK
        </p>
      </header>

      {low.length > 0 && (
        <div className="card mb-4 flex gap-3 border-warn/30 p-3">
          <AlertTriangle className="shrink-0 text-warn" size={18} />
          <div>
            <p className="text-sm font-medium">{low.length} lines low</p>
            <p className="text-xs text-mute">
              {low.map((l) => l.name).join(" · ")}
            </p>
          </div>
        </div>
      )}

      <div className="mb-4 grid grid-cols-2 gap-2">
        <Link href="/stock/adjust?mode=voice" className="btn btn-primary">
          <Mic size={16} /> Speak adjust
        </Link>
        <Link href="/stock/adjust?mode=snap" className="btn btn-ghost">
          <Camera size={16} /> Snap adjust
        </Link>
      </div>

      <div className="space-y-2">
        {stock.map((s) => (
          <div key={s.id} className="card flex items-center gap-3 p-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                s.low
                  ? "border-warn/40 bg-warn/10 text-warn"
                  : "border-line bg-panel text-accent"
              }`}
            >
              <Package size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{s.name}</p>
              <p className="truncate text-[11px] text-mute">
                {s.sku} · {storeName(s.store)}
              </p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-semibold ${s.low ? "text-warn" : ""}`}>
                {s.qty}
              </p>
              <p className="text-[10px] text-mute">{s.unit}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-[11px] text-mute">
        Speak or snap → pending → you accept. Sales can drop qty when accepted.
      </p>

      <Link href="/stores" className="mt-3 block text-center text-xs text-accent">
        Manage stores
      </Link>
    </main>
  );
}
