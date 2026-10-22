import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Bean, Bike, Heart, Milk, Star } from "lucide-react";
import BottomBar from "@/components/BottomBar";
import Button from "@/components/Button";
import Img from "@/components/Img";
import Screen from "@/components/Screen";
import TopBar from "@/components/TopBar";
import { useCart } from "@/context/CartContext";
import { coffees } from "@/data/coffees";
import { usd } from "@/lib/format";
import type { Size } from "@/types";

const sizes: Size[] = ["S", "M", "L"];

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const coffee = coffees.find((c) => c.id === id);
  const { add } = useCart();
  const navigate = useNavigate();
  const [size, setSize] = useState<Size>("M");
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!coffee) return <Navigate to="/home" replace />;

  const text = open ? coffee.description : `${coffee.description.slice(0, 110)}.. `;

  return (
    <Screen>
      <TopBar
        title="Detail"
        right={
          <button type="button" aria-label="Favourite" onClick={() => setLiked(!liked)}>
            <Heart className={liked ? "fill-red-500 text-red-500" : ""} />
          </button>
        }
      />
      <div className="mt-6 h-[202px] overflow-hidden rounded-2xl md:h-70">
        <Img src={coffee.image} alt={coffee.name} />
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">{coffee.name}</h2>
          <p className="text-xs text-muted">Ice/Hot</p>
          <div className="mt-3 flex items-center gap-1.5 text-base font-semibold">
            <Star className="size-5 fill-amber-400 text-amber-400" />
            {coffee.rating} <span className="text-sm font-normal text-muted">({coffee.reviews})</span>
          </div>
        </div>
        <div className="flex gap-3">
          {[Bike, Bean, Milk].map((Icon, i) => (
            <span key={i} className="grid size-11 place-items-center rounded-xl bg-[#f2f2f2] text-primary">
              <Icon className="size-5" />
            </span>
          ))}
        </div>
      </div>

      <hr className="mt-4 border-line" />
      <h3 className="mt-6 text-base font-semibold">Description</h3>
      <p className="mt-3 leading-relaxed text-[#9b9b9b]">
        {text}
        <button type="button" onClick={() => setOpen(!open)} className="font-semibold text-primary">
          {open ? "Show Less" : "Read More"}
        </button>
      </p>

      <h3 className="mt-6 text-base font-semibold">Size</h3>
      <div className="mb-6 mt-4 flex gap-3">
        {sizes.map((s) => (
          <button
            type="button"
            key={s}
            onClick={() => setSize(s)}
            className={`h-[43px] flex-1 rounded-xl border transition ${s === size ? "border-primary bg-[#fff5ee] text-primary" : "border-line bg-white hover:bg-[#f3ede8]"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <BottomBar>
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-muted">Price</p>
            <p className="text-lg font-semibold text-primary">{usd(coffee.price)}</p>
          </div>
          <Button
            onClick={() => {
              add(coffee, size);
              navigate("/order");
            }}
          >
            Buy Now
          </Button>
        </div>
      </BottomBar>
    </Screen>
  );
}
