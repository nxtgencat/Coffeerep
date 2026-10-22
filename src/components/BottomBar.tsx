import type { ReactNode } from "react";

export default function BottomBar({ children }: { children: ReactNode }) {
  return (
    <div className="sticky bottom-0 -mx-6 mt-auto rounded-t-3xl bg-white px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 shadow-[0_-4px_24px_rgba(0,0,0,.04)] md:bottom-5 md:mx-0 md:mb-5 md:rounded-3xl md:pb-4 md:shadow-xl">
      {children}
    </div>
  );
}
