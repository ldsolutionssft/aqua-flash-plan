import { ImageIcon } from "lucide-react";

interface PlaceholderProps {
  label: string;
  src?: string;
  srcMobile?: string;
  alt?: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function Placeholder({
  label,
  src,
  srcMobile,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
  priority = false,
  width = 1024,
  height = 1024,
}: PlaceholderProps) {
  if (src) {
    const img = (
      <img
        src={src}
        alt={alt ?? label}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={`w-full h-full object-cover ${className}`}
      />
    );
    if (srcMobile) {
      return (
        <picture>
          <source media="(max-width: 640px)" srcSet={srcMobile} type="image/webp" />
          {img}
        </picture>
      );
    }
    return img;
  }
  return (
    <div
      data-placeholder={label}
      className={`${aspect} w-full flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/10 text-primary/70 ${className}`}
    >
      <ImageIcon className="size-8 opacity-60" />
      <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}
