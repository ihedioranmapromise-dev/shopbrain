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

export type StockLine = {
  id: string;
  name: string;
  sku: string;
  store: StoreId;
  qty: string;
  unit: string;
  low: boolean;
};

export const stores: { id: StoreId; name: string; city: string }[] = [
  { id: "shop-a", name: "Shop A — Ariaria", city: "Aba" },
  { id: "shop-b", name: "Shop B — Main Market", city: "Onitsha" },
  { id: "warehouse", name: "Warehouse", city: "Aba" },
];

export const stock: StockLine[] = [
  {
    id: "s1",
    name: "Ankara mixed (premium)",
    sku: "ANK-PX",
    store: "shop-a",
    qty: "14",
    unit: "bolts",
    low: true,
  },
  {
    id: "s2",
    name: "Guipure white",
    sku: "GIP-W",
    store: "warehouse",
    qty: "6",
    unit: "bales",
    low: true,
  },
  {
    id: "s3",
    name: "Lace — champagne",
    sku: "LCE-CH",
    store: "shop-b",
    qty: "120",
    unit: "yards",
    low: false,
  },
  {
    id: "s4",
    name: "Atiku plain navy",
    sku: "ATK-NV",
    store: "warehouse",
    qty: "28",
    unit: "bolts",
    low: false,
  },
  {
    id: "s5",
    name: "Ankara X (fast mover)",
    sku: "ANK-X",
    store: "shop-a",
    qty: "3",
    unit: "bolts",
    low: true,
  },
  {
    id: "s6",
    name: "Voile — sky",
    sku: "VOI-SK",
    store: "shop-b",
    qty: "45",
    unit: "yards",
    low: false,
  },
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
    voiceNote: true,
    voiceLabel: "Blessing · 0:09 — Loading for Shop A, need owner OK",
    time: "1 hr ago",
  },
];

export const dayBrief = {
  moneyIn: "₦420,000",
  depositsPending: 2,
  salesAccepted: 5,
  lowStock: ["Ankara X (Shop A)", "Guipure white (Warehouse)", "Ankara mixed (Shop A)"],
  storesOpen: 2,
};
