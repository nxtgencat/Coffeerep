import { useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import CoffeeCard from "@/components/CoffeeCard";
import Img from "@/components/Img";
import Nav from "@/components/Nav";
import { categories, coffees } from "@/data/coffees";

export default function Home() {
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");

  const list = coffees.filter(
    (c) =>
      (category === categories[0] || c.category === category) &&
      c.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="min-h-dvh pb-28 md:pb-10 md:pl-22">
      <header className="bg-linear-to-b from-[#111] to-[#313131] pb-[70px] md:pb-[110px]">
        <div className="mx-auto max-w-290 px-6 pt-10 md:px-10">
          <p className="text-xs text-muted">Location</p>
          <button type="button" className="flex items-center gap-1 text-sm font-semibold text-[#e3e3e3]">
            Bilzen, Tanjungbalai <ChevronDown className="size-4" />
          </button>
          <div className="mt-5 flex gap-4">
            <label className="flex h-13 flex-1 items-center gap-3 rounded-2xl bg-[#2a2a2a] px-4 text-[#e3e3e3]">
              <Search className="size-5" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search coffee"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
            </label>
            <button
              type="button"
              aria-label="Filter"
              className="grid size-13 place-items-center rounded-[14px] bg-primary text-white"
            >
              <SlidersHorizontal className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto -mt-[70px] max-w-290 px-6 md:-mt-[110px] md:px-10">
        <section className="relative h-35 overflow-hidden rounded-2xl bg-[#b58a62] md:h-55">
          <div className="absolute inset-0">
            <Img src="/images/promo.jpg" alt="Promo" />
          </div>
          <div className="absolute left-6 top-3.5 md:left-10 md:top-7">
            <span className="rounded-lg bg-[#ed5151] px-3 py-1 text-sm font-semibold text-white">Promo</span>
            <h2 className="mt-2.5 max-w-57 text-[32px] font-bold leading-10 text-white md:max-w-md md:text-[40px] md:leading-[50px]">
              <span className="box-decoration-clone bg-[#222] px-1">Buy one get</span>
              <br />
              <span className="box-decoration-clone bg-[#222] px-1">one FREE</span>
            </h2>
          </div>
        </section>

        <div className="-mx-6 mt-6 flex gap-4 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:px-0">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setCategory(c)}
              className={`h-9 shrink-0 rounded-md px-3 text-sm transition ${c === category ? "bg-primary font-semibold text-white" : "bg-chip text-[#2f4b4e] hover:bg-[#e4ddd7]"}`}
            >
              {c}
            </button>
          ))}
        </div>

        {list.length ? (
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] md:gap-5">
            {list.map((c) => (
              <CoffeeCard key={c.id} coffee={c} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted">No coffee found.</p>
        )}
      </div>
      <Nav />
    </div>
  );
}
