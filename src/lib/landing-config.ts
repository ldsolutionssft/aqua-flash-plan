// Edite aqui para trocar links de checkout e imagens da landing.
import heroMockup from "@/assets/landing/hero.webp";
import flash1 from "@/assets/landing/flash-1.png";
import flash2 from "@/assets/landing/flash-2.png";
import flash3 from "@/assets/landing/flash-3.png";
import flash4 from "@/assets/landing/flash-4.png";
import print1 from "@/assets/landing/print-1.webp";
import print2 from "@/assets/landing/print-2.webp";

export const CHECKOUT = {
  basico: "https://pay.wiapy.com/xO1UxCQBEJ",
  premium: "https://pay.wiapy.com/vdXeyjDAP",
};

export const IMAGES = {
  heroMockup,
  heroMockupMobile: heroMockup,
  flashcards: [flash1, flash2, flash3, flash4],
  garantiaSelo: "",
  prints: [print1, print2],
};
