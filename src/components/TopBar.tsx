import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function TopBar({ title, right }: { title: string; right?: ReactNode }) {
  const navigate = useNavigate();
  return (
    <header className="flex h-11 items-center justify-between">
      <button type="button" aria-label="Back" onClick={() => navigate(-1)} className="size-6">
        <ChevronLeft />
      </button>
      <h1 className="text-base font-semibold">{title}</h1>
      <div className="size-6">{right}</div>
    </header>
  );
}
