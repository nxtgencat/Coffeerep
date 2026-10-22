import { Link } from "react-router";
import { Plus, Star } from "lucide-react";
import Img from "@/components/Img";
import { useCart } from "@/context/CartContext";
import { usd } from "@/lib/format";
import type { Coffee } from "@/types";

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const { add } = useCart();
  return (
    <article className="rounded-2xl bg-white p-1 pb-3 transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link to={`/coffee/${coffee.id}`} className="block">
        <div className="relative aspect-[140/128] overflow-hidden rounded-xl">
          <Img src={coffee.image} alt={coffee.name} />
          <span className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-black/45 px-2 py-0.5 text-[10px] font-semibold text-white">
            <Star className="size-2.5 fill-amber-400 text-amber-400" />
            {coffee.rating}
          </span>
        </div>
        <h3 className="mx-2 mt-2 text-base font-semibold leading-snug">{coffee.name}</h3>
        <p className="mx-2 text-xs text-muted">{coffee.sub}</p>
      </Link>
      <div className="mx-2 mt-3 flex items-center justify-between">
        <b className="text-lg font-semibold">{usd(coffee.price)}</b>
        <button
          type="button"
          aria-label={`Add ${coffee.name}`}
          onClick={() => add(coffee)}
          className="grid size-8 place-items-center rounded-lg bg-primary text-white transition active:scale-90"
        >
          <Plus className="size-4" />
        </button>
      </div>
    </article>
  );
}
