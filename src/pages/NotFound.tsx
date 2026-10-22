import { useNavigate } from "react-router";
import { Coffee } from "lucide-react";
import Button from "@/components/Button";
import Screen from "@/components/Screen";

/** Shown for any URL that does not match a route. */
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Screen>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="grid size-16 place-items-center rounded-2xl bg-[#f2f2f2] text-primary">
          <Coffee className="size-8" />
        </div>
        <h1 className="mt-6 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 max-w-xs text-sm text-muted">
          That cup is not on the menu. Head back and pick another brew.
        </p>
        <Button onClick={() => navigate("/home")} className="mt-8 md:mx-auto md:max-w-90">
          Back to home
        </Button>
      </div>
    </Screen>
  );
}
