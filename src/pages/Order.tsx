import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import {
  BadgePercent,
  ChevronDown,
  ChevronRight,
  FileText,
  Minus,
  Plus,
  SquarePen,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import BottomBar from "@/components/BottomBar";
import Button from "@/components/Button";
import Img from "@/components/Img";
import Screen from "@/components/Screen";
import TopBar from "@/components/TopBar";
import { itemKey, useCart } from "@/context/CartContext";
import { usd } from "@/lib/format";

const modes = ["Deliver", "Pick Up"] as const;

function Pill({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-[26px] items-center gap-1.5 rounded-2xl border border-muted bg-white px-2.5 text-xs transition hover:bg-[#f3ede8]"
    >
      <Icon className="size-3.5" />
      {children}
    </button>
  );
}

export default function Order() {
  const { items, subtotal, changeQty } = useCart();
  const navigate = useNavigate();
  const [mode, setMode] = useState<(typeof modes)[number]>("Deliver");

  const deliver = mode === "Deliver";
  const fee = deliver ? 1 : 0;
  const total = subtotal + fee;

  return (
    <Screen>
      <TopBar title="Order" />
      <div className="mt-6 flex h-[50px] rounded-[14px] bg-chip p-1">
        {modes.map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 rounded-[10px] text-base transition ${m === mode ? "bg-primary font-semibold text-white" : ""}`}
          >
            {m}
          </button>
        ))}
      </div>

      {deliver && (
        <section className="mt-6">
          <h2 className="text-base font-semibold">Delivery Address</h2>
          <p className="mt-3 font-semibold">Jl. Kpg Sutoyo</p>
          <p className="text-xs text-muted">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</p>
          <div className="mt-3 flex gap-2">
            <Pill icon={SquarePen}>Edit Address</Pill>
            <Pill icon={FileText}>Add Note</Pill>
          </div>
        </section>
      )}
      <hr className="mt-4 border-line" />

      {items.length === 0 ? (
        <div className="py-10 text-center text-muted">
          Your cart is empty.{" "}
          <Link to="/home" className="font-semibold text-primary">
            Browse coffee
          </Link>
        </div>
      ) : (
        <ul>
          {items.map((i) => (
            <li key={itemKey(i)} className="mt-4 flex items-center gap-4">
              <div className="size-[54px] shrink-0 overflow-hidden rounded-xl">
                <Img src={i.coffee.image} alt={i.coffee.name} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold leading-snug">{i.coffee.name}</h3>
                <p className="text-xs text-muted">
                  {i.coffee.sub} · {i.size}
                </p>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <button
                  type="button"
                  aria-label="Less"
                  onClick={() => changeQty(itemKey(i), -1)}
                  className="grid size-7 place-items-center rounded-full border border-line bg-white"
                >
                  <Minus className="size-3.5" />
                </button>
                {i.qty}
                <button
                  type="button"
                  aria-label="More"
                  onClick={() => changeQty(itemKey(i), 1)}
                  className="grid size-7 place-items-center rounded-full border border-line bg-white"
                >
                  <Plus className="size-3.5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="-mx-6 mt-5 h-1 bg-[#fff1e7]" />
      <button
        type="button"
        className="mt-4 flex h-14 w-full items-center gap-3 rounded-2xl border border-[#eaeaea] bg-white px-4 text-primary transition hover:bg-[#f3ede8]"
      >
        <BadgePercent className="size-5" />
        <span className="flex-1 text-left font-semibold text-ink">1 Discount is Applies</span>
        <ChevronRight className="size-5 text-ink" />
      </button>

      <h2 className="mt-6 text-base font-semibold">Payment Summary</h2>
      <div className="mt-3 flex justify-between">
        <span>Price</span>
        <b className="font-semibold">{usd(subtotal)}</b>
      </div>
      <div className="mb-6 mt-3 flex justify-between">
        <span>Delivery Fee</span>
        <span>
          {deliver && <s className="mr-1.5 text-muted">$ 2.0</s>}
          <b className="font-semibold">$ {fee.toFixed(1)}</b>
        </span>
      </div>

      <BottomBar>
        <button type="button" className="mb-3 flex w-full items-center gap-3 text-left text-primary">
          <Wallet className="size-6" />
          <span className="flex-1">
            <b className="block font-semibold text-ink">Cash/Wallet</b>
            <span className="text-xs font-semibold">{usd(total)}</span>
          </span>
          <ChevronDown className="size-5 text-ink" />
        </button>
        <Button disabled={items.length === 0} onClick={() => navigate("/delivery")}>
          Order
        </Button>
      </BottomBar>
    </Screen>
  );
}
