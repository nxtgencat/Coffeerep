import type { ReactNode } from "react";

/** Full-height page; a centred column on tablet/desktop. */
export default function Screen({ children }: { children: ReactNode }) {
  return <main className="mx-auto flex min-h-dvh w-full max-w-140 flex-col px-6 pt-10">{children}</main>;
}
