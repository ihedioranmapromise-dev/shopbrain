"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { pending } from "@/lib/demo-data";
import { VoicePill } from "@/components/VoicePill";

export default function PendingDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const item = pending.find((p) => p.id === id) ?? pending[0];
  const [done, setDone] = useState<"accepted" | "rejected" | null>(null);

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
      </div>

      {item.voiceNote && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-mute">
            Staff voice note
          </p>
          <VoicePill label={item.voiceLabel} />
        </div>
      )}

      {done ? (
        <div className="card mt-6 p-4 text-center">
          <p className="font-medium">
            {done === "accepted" ? "Accepted — books updated" : "Rejected — logged, no change"}
          </p>
          <p className="mt-1 text-sm text-mute">Demo only · real app would sync all stores</p>
          <button type="button" className="btn btn-ghost mt-3" onClick={() => router.push("/")}>
            Back home
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button type="button" className="btn btn-bad" onClick={() => setDone("rejected")}>
            <X size={16} /> Reject
          </button>
          <button type="button" className="btn btn-good" onClick={() => setDone("accepted")}>
            <Check size={16} /> Accept
          </button>
        </div>
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
