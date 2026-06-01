import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  variant?: "primary" | "outline";
  className?: string;
}

export function CTAButton({ href, children, size = "lg", variant = "primary", className = "" }: CTAButtonProps) {
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };
  const variants = {
    primary:
      "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02] hover:shadow-card",
    outline:
      "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-primary-foreground",
  };
  return (
    <a
      href={href ?? "#planos"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wide transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
