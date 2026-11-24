import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import { stores } from "@/lib/demo-data";

export default function StoresPage() {
  return (
    <main className="px-4 pt-6">
      <h1 className="text-xl font-semibold">Stores</h1>
      <p className="mt-1 text-sm text-mute">One account · end of day syncs together</p>

      <div className="mt-5 space-y-3">
        {stores.map((s, i) => (
          <div key={s.id} className="card p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{s.name}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-mute">
                  <MapPin size={12} /> {s.city}
                </p>
              </div>
              <span className="rounded-full bg-good/15 px-2 py-0.5 text-[10px] font-medium text-good">
                Live
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-mute">
              <Users size={12} />{" "}
              {i === 0 ? "Ada · Seller (this shop only)" : i === 1 ? "Emeka · Seller (this shop only)" : "Blessing · Warehouse"}
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-4 p-4 text-sm text-[#c5cddc]">
        Staff are limited to their store. They never see the full multi-shop picture — only the owner does.
        Setup includes invites, PIN, and approval rules.
      </div>

      <Link href="/about" className="btn btn-ghost mt-4 w-full">
        How onboarding works
      </Link>
    </main>
  );
}
