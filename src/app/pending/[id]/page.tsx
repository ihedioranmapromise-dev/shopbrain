"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Check, Lock, X } from "lucide-react";
import { pending } from "@/lib/demo-data";
import { VoicePill } from "@/components/VoicePill";

export default function PendingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const item = pending.find((p) => p.id === id) ?? pending[0];
  const [done, setDone] = useState<"accepted" | "rejected" | null>(null);
  const [pinOpen, setPinOpen] = useState(false);
  const [pin, setPin] = useState("");

  function tryAccept() {
    setPinOpen(true);
  }

  function confirmPin() {
    if (pin.length >= 4) {
      setDone("accepted");
      setPinOpen(false);
    }
  }

  const payLabel =
    item.payTag === "cash"
      ? "Cash"
      : item.payTag === "transfer"
        ? "Transfer"
        : item.payTag === "credit"
          ? "Credit"
          : null;

  return (
    <main className="px-4 pt-6">
      <Link href="/pending" className="inline-flex items-center gap-1 text-sm text-mute">
        <ArrowLeft size={16} /> Pending
      </Link>

      <h1 className="mt-4 text-xl font-semibold">{item.title}</h1>
      <p className="mt-1 text-sm text-mute">{item.detail}</p>

      <div className="card mt-5 space-y-3 p-4">
        <Row label="Staff" value={item.staff} />
        <Row label="Store" value={item.store.replace("-", " ")} />
        <Row label="When" value={item.time} />
        {item.amount && <Row label="Amount" value={item.amount} />}
        {payLabel && <Row label="Pay type" value={payLabel} />}
        {item.type === "sale" && (
          <Row label="Stock" value="Drops only after Accept" />
        )}
      </div>

      {item.voiceNote && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-mute">
            Staff voice note
          </p>
          <VoicePill label={item.voiceLabel} />
        </div>
      )}

      {pinOpen && !done && (
        <div className="card mt-4 p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Lock size={16} className="text-accent" /> Owner PIN to Accept
          </div>
          <p className="mt-1 text-xs text-mute">Stops staff using an unlocked owner phone.</p>
          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            placeholder="••••"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="mt-3 w-full rounded-xl border border-line bg-[#0f131a] px-3 py-3 text-center text-lg tracking-[0.4em] outline-none focus:border-accent"
          />
          <button type="button" className="btn btn-good mt-3 w-full" onClick={confirmPin}>
            Confirm Accept
          </button>
          <button type="button" className="btn btn-ghost mt-2 w-full" onClick={() => setPinOpen(false)}>
            Cancel
          </button>
        </div>
      )}

      {done ? (
        <div className="card mt-6 p-4 text-center">
          <p className="font-medium">
            {done === "accepted"
              ? item.type === "sale"
                ? "Accepted — money in · stock reduced"
                : "Accepted — books updated"
              : "Rejected — logged, no change"}
          </p>
          <p className="mt-1 text-sm text-mute">Demo · real app syncs all your stores</p>
          <button type="button" className="btn btn-ghost mt-3" onClick={() => router.push("/")}>
            Back home
          </button>
        </div>
      ) : (
        !pinOpen && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button type="button" className="btn btn-bad" onClick={() => setDone("rejected")}>
              <X size={16} /> Reject
            </button>
            <button type="button" className="btn btn-good" onClick={tryAccept}>
              <Check size={16} /> Accept
            </button>
          </div>
        )
      )}
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-mute">{label}</span>
      <span className="font-medium capitalize">{value}</span>
    </div>
  );
}
