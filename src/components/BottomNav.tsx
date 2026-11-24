"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Inbox, Info, Mic, Package } from "lucide-react";
import clsx from "clsx";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/pending", label: "Pending", icon: Inbox },
  { href: "/stock", label: "Stock", icon: Package },
  { href: "/instruct", label: "Speak", icon: Mic },
  { href: "/about", label: "About", icon: Info },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[430px] justify-between px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active = path === href || (href !== "/" && path.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex flex-1 flex-col items-center gap-0.5 rounded-lg py-1 text-[10px] font-medium",
                active ? "text-accent" : "text-mute"
              )}
            >
              <Icon size={20} strokeWidth={active ? 2.4 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
