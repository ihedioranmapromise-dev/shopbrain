export type StoreId = "shop-a" | "shop-b" | "warehouse";

export type PendingItem = {
  id: string;
  type: "sale" | "deposit" | "stock";
  store: StoreId;
  staff: string;
  title: string;
  detail: string;
  amount?: string;
  voiceNote: boolean;
  voiceLabel: string;
  time: string;
};

export const stores: { id: StoreId; name: string; city: string }[] = [
  { id: "shop-a", name: "Shop A — Ariaria", city: "Aba" },
  { id: "shop-b", name: "Shop B — Main Market", city: "Onitsha" },
  { id: "warehouse", name: "Warehouse", city: "Aba" },
];

export const pending: PendingItem[] = [
  {
    id: "p1",
    type: "deposit",
    store: "shop-a",
    staff: "Ada",
    title: "Deposit — Chinedu Okeke",
    detail: "Ankara mixed · 12 bolts · balance after deposit",
    amount: "₦50,000",
    voiceNote: true,
    voiceLabel: "Ada · 0:12 — Customer paid transfer, waiting balance 30k",
    time: "12 min ago",
  },
  {
    id: "p2",
    type: "sale",
    store: "shop-b",
    staff: "Emeka",
    title: "Sale recorded",
    detail: "Lace — 40 yards · cash",
    amount: "₦180,000",
    voiceNote: true,
    voiceLabel: "Emeka · 0:08 — Full cash, goods leaving now",
    time: "34 min ago",
  },
  {
    id: "p3",
    type: "stock",
    store: "warehouse",
    staff: "Blessing",
    title: "Stock out request",
    detail: "Guipure white · 8 bales → Shop A",
    voiceNote: false,
    voiceLabel: "",
    time: "1 hr ago",
  },
];

export const dayBrief = {
  moneyIn: "₦420,000",
  depositsPending: 2,
  salesAccepted: 5,
  lowStock: ["Ankara X (Shop A)", "Guipure white (Warehouse)"],
  storesOpen: 2,
};
