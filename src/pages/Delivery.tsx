import { useNavigate } from "react-router";
import { Bike, ChevronLeft, LocateFixed, Phone } from "lucide-react";
import Img from "@/components/Img";

const mapBtn = "absolute top-10 z-10 grid size-11 place-items-center rounded-xl bg-chip transition hover:bg-[#e4ddd7]";

export default function Delivery() {
  const navigate = useNavigate();
  return (
    <main className="relative h-dvh overflow-hidden">
      {/* Placeholder map: replace with Mapbox / Google Maps / Leaflet */}
      <div className="map-grid absolute inset-0">
        <svg className="size-full" viewBox="0 0 375 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <path d="M250 330V170H120v28H96v37H78" fill="none" stroke="#c67c4e" strokeWidth="4" />
          <circle cx="78" cy="224" r="9" fill="#c67c4e" />
          <circle cx="250" cy="330" r="17" fill="#fff" />
          <circle cx="250" cy="330" r="6" fill="#c67c4e" />
        </svg>
      </div>
      <button
        type="button"
        aria-label="Back"
        onClick={() => navigate(-1)}
        className={`${mapBtn} left-6`}
      >
        <ChevronLeft />
      </button>
      <button type="button" aria-label="Locate me" className={`${mapBtn} right-6`}>
        <LocateFixed />
      </button>

      <section className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white px-6 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-3.5 text-center shadow-[0_-4px_24px_rgba(0,0,0,.05)] md:inset-x-auto md:bottom-6 md:left-6 md:w-105 md:rounded-3xl md:pt-6 md:shadow-2xl">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-line md:hidden" />
        <h2 className="text-lg font-semibold">10 minutes left</h2>
        <p className="text-xs text-muted">
          Delivery to <b className="font-semibold text-ink">Jl. Kpg Sutoyo</b>
        </p>

        <div className="my-5 flex gap-2">
          {[1, 1, 1, 0].map((on, i) => (
            <i key={i} className={`h-1 flex-1 rounded-full ${on ? "bg-success" : "bg-[#e4e4e4]"}`} />
          ))}
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-[#e6e6e6] p-3 text-left">
          <div className="grid size-[54px] shrink-0 place-items-center rounded-[14px] border border-[#e6e6e6] text-primary">
            <Bike className="size-7" />
          </div>
          <div>
            <b className="block text-sm font-semibold">Delivered your order</b>
            <p className="text-xs leading-relaxed text-muted">
              We will deliver your goods to you in the shortes possible time.
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-left">
          <div className="size-[54px] shrink-0 overflow-hidden rounded-[14px]">
            <Img src="/images/courier.jpg" alt="Courier" />
          </div>
          <div className="flex-1">
            <b className="block text-base font-semibold leading-snug">Brooklyn Simmons</b>
            <span className="text-xs text-muted">Personal Courier</span>
          </div>
          <button
            type="button"
            aria-label="Call courier"
            className="grid size-11 place-items-center rounded-xl border border-line transition hover:bg-[#f3ede8]"
          >
            <Phone className="size-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
