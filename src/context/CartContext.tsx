import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import type { CartItem, Coffee, Size } from "@/types";

type Action =
  | { type: "add"; coffee: Coffee; size: Size }
  | { type: "qty"; key: string; delta: number };

interface CartValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (coffee: Coffee, size?: Size) => void;
  changeQty: (key: string, delta: number) => void;
}

const CartContext = createContext<CartValue | null>(null);

/** Stable identity for a cart line, so quantity changes target the right row. */
export const itemKey = (item: CartItem) => `${item.coffee.id}-${item.size}`;

function reducer(items: CartItem[], action: Action): CartItem[] {
  if (action.type === "add") {
    const existing = items.find((i) => i.coffee.id === action.coffee.id && i.size === action.size);
    return existing
      ? items.map((i) => (i === existing ? { ...i, qty: i.qty + 1 } : i))
      : [...items, { coffee: action.coffee, size: action.size, qty: 1 }];
  }

  return items
    .map((i) => (itemKey(i) === action.key ? { ...i, qty: i.qty + action.delta } : i))
    .filter((i) => i.qty > 0);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);

  const value = useMemo<CartValue>(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.qty * i.coffee.price, 0),
      add: (coffee, size = "M") => dispatch({ type: "add", coffee, size }),
      changeQty: (key, delta) => dispatch({ type: "qty", key, delta }),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
