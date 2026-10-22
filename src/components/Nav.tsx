import { NavLink } from "react-router";
import { Bell, Heart, House, ShoppingBag, type LucideIcon } from "lucide-react";
import { useCart } from "@/context/CartContext";

const items: { to?: string; icon: LucideIcon; label: string; badge?: boolean }[] = [
  { to: "/home", icon: House, label: "Home" },
  { icon: Heart, label: "Favourites" },
  { to: "/order", icon: ShoppingBag, label: "Cart", badge: true },
  { to: "/delivery", icon: Bell, label: "Tracking" },
];

const base = "relative flex h-10 flex-col items-center gap-1.5 text-muted transition hover:text-primary";

/** Bottom bar on mobile, left rail on md+. */
export default function Nav() {
  const { count } = useCart();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around rounded-t-3xl bg-white px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 shadow-[0_-4px_24px_rgba(0,0,0,.05)] md:inset-y-0 md:right-auto md:w-22 md:flex-col md:items-center md:justify-start md:gap-7 md:rounded-none md:px-0 md:pt-10">
      {items.map(({ to, icon: Icon, label, badge }) => {
        const content = (
          <>
            <Icon className="size-6" />
            {badge && count > 0 && (
              <span className="absolute -right-2 -top-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </>
        );
        return to ? (
          <NavLink
            key={label}
            to={to}
            aria-label={label}
            className={({ isActive }) =>
              `${base} ${isActive ? "text-primary after:h-1 after:w-2.5 after:rounded-full after:bg-primary" : ""}`
            }
          >
            {content}
          </NavLink>
        ) : (
          <button type="button" key={label} aria-label={label} className={base}>
            {content}
          </button>
        );
      })}
    </nav>
  );
}
