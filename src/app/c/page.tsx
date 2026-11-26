"use client";

import Link from "next/link";
import { useState } from "react";
import { Package, ShoppingBag } from "lucide-react";
import { stock, stores } from "@/lib/demo-data";

export default function CustomerCatalogPage() {
  const sellable = stock.filter((s) => s.sellable);
  const storeName = (id: string) => stores.find((x) => x.id === id)?.name ?? id;
  const [ordered, setOrdered] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-ink px-4 pb-10 pt-6">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
        Private buyer link · demo
      </p>
      <h1 className="mt-1 text-xl font-semibold">Ariaria Wholesale Desk</h1>
      <p className="mt-1 text-sm text-mute">
        Only goods the owner marked sellable. Your order waits for their OK — not a public mall.
      </p>

      <div className="mt-5 space-y-3">
        {sellable.map((s) => (
          <div key={s.id} className="card p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel text-accent">
                <Package size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{s.name}</p>
                <p className="text-xs text-mute">
                  {s.sku} · {storeName(s.store)}
                </p>
                <p className="mt-1 text-sm text-good">{s.price}</p>
                <p className="text-[11px] text-mute">
                  {s.low ? "Low stock · " : ""}
                  {s.qty} {s.unit} available
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3 w-full"
              onClick={() => setOrdered(s.id)}
            >
              <ShoppingBag size={16} /> Order (goes to owner Pending)
            </button>
            {ordered === s.id && (
              <p className="mt-2 text-center text-xs text-good">
                Demo order sent → owner must Accept.{" "}
                <Link href="/pending/p0" className="text-accent underline">
                  See pending
                </Link>
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-[11px] text-mute">
        Not indexed · not a marketplace · same ShopBrain book as the owner
      </p>
      <Link href="/" className="mt-3 block text-center text-xs text-accent">
        Owner demo home
      </Link>
    </main>
  );
}
