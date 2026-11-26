export type StoreId = "shop-a" | "shop-b" | "warehouse";

export type PendingItem = {
  id: string;
  type: "sale" | "deposit" | "stock" | "customer";
  store: StoreId;
  staff: string;
  title: string;
  detail: string;
  amount?: string;
  payTag?: "cash" | "transfer" | "credit";
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
  sellable: boolean;
  price?: string;
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
    sellable: true,
    price: "₦18,500 / bolt",
  },
  {
    id: "s2",
    name: "Guipure white",
    sku: "GIP-W",
    store: "warehouse",
    qty: "6",
    unit: "bales",
    low: true,
    sellable: true,
    price: "₦95,000 / bale",
  },
  {
    id: "s3",
    name: "Lace — champagne",
    sku: "LCE-CH",
    store: "shop-b",
    qty: "120",
    unit: "yards",
    low: false,
    sellable: true,
    price: "₦4,200 / yard",
  },
  {
    id: "s4",
    name: "Atiku plain navy",
    sku: "ATK-NV",
    store: "warehouse",
    qty: "28",
    unit: "bolts",
    low: false,
    sellable: false,
    price: "₦22,000 / bolt",
  },
  {
    id: "s5",
    name: "Ankara X (fast mover)",
    sku: "ANK-X",
    store: "shop-a",
    qty: "3",
    unit: "bolts",
    low: true,
    sellable: true,
    price: "₦12,000 / bolt",
  },
  {
    id: "s6",
    name: "Voile — sky",
    sku: "VOI-SK",
    store: "shop-b",
    qty: "45",
    unit: "yards",
    low: false,
    sellable: true,
    price: "₦2,800 / yard",
  },
];

export const pending: PendingItem[] = [
  {
    id: "p0",
    type: "customer",
    store: "shop-a",
    staff: "Buyer · Chinedu",
    title: "Customer order — Chinedu Okeke",
    detail: "Ankara mixed · 8 bolts · from private buyer link",
    amount: "₦148,000",
    payTag: "transfer",
    voiceNote: false,
    voiceLabel: "",
    time: "just now (demo)",
  },
  {
    id: "p1",
    type: "deposit",
    store: "shop-a",
    staff: "Ada",
    title: "Deposit — Chinedu Okeke",
    detail: "Ankara mixed · 12 bolts · balance after deposit",
    amount: "₦50,000",
    payTag: "transfer",
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
    detail: "Lace — 40 yards · goods out when you Accept",
    amount: "₦180,000",
    payTag: "cash",
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

export const everydayBenefits = [
  "One truth for money across every shop — not scattered WhatsApp chats",
  "Staff work fast; nothing serious counts until you Accept",
  "Voice on the action — hear what happened, not only text",
  "Stock by store; speak or snap adjust still needs your OK",
  "Accepted sales can drop stock — goods and money stay linked",
  "Cash · transfer · credit tagged so collection matches real life",
  "Day brief + optional weekly export to your email",
  "Staff locked to their shop — they don’t see the whole empire",
  "Private buyer link — customers see only sellable stock & prices",
  "Customer orders land in the same Pending queue — you still Approve",
];

export const onboardingSteps = [
  { n: 1, title: "Your email", body: "Create owner account — magic link or password." },
  { n: 2, title: "Business name", body: "The name staff and reports will show." },
  { n: 3, title: "First store", body: "Name + address. Add more stores anytime." },
  { n: 4, title: "Opening stock", body: "Rough lines from your phone — name, qty, unit, store. Mark sellable when ready." },
  { n: 5, title: "Invite staff", body: "Name, phone/email, which store, role Seller. They get their own login." },
  { n: 6, title: "Owner PIN", body: "Required on Accept — staff can’t use an unlocked owner phone." },
  { n: 7, title: "Buyer links (optional)", body: "Share a private link with trusted buyers so they order without WhatsApp chaos." },
  { n: 8, title: "You’re live", body: "Home shows pending (staff + customers), low stock, and day brief." },
];
