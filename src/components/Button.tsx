import type { ButtonHTMLAttributes } from "react";

export default function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`h-14 w-full rounded-2xl bg-primary text-base font-semibold text-white transition hover:brightness-105 active:scale-[.98] disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
