import { Coffee } from "lucide-react";

interface Props {
  src?: string;
  alt: string;
  className?: string;
}

/** Shows the image, or a gradient placeholder until you add one. */
export default function Img({ src, alt, className = "" }: Props) {
  if (src) return <img src={src} alt={alt} className={`size-full object-cover ${className}`} />;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grid size-full place-items-center bg-linear-to-br from-[#6b4a35] to-[#2a1d15] text-white/30 ${className}`}
    >
      <Coffee className="size-1/3 max-h-16 max-w-16" />
    </div>
  );
}
