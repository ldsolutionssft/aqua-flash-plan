// Edite aqui para trocar links de checkout e imagens da landing.
import heroMockup from "@/assets/landing/hero.webp";
import heroMockupMobile from "@/assets/landing/hero-mobile.webp";
import bigMockup from "@/assets/landing/big-mockup.webp";
import garantiaSelo from "@/assets/landing/garantia.webp";
import flash1 from "@/assets/landing/flash-1.webp";
import flash2 from "@/assets/landing/flash-2.webp";
import flash3 from "@/assets/landing/flash-3.webp";
import flash4 from "@/assets/landing/flash-4.webp";
import flash5 from "@/assets/landing/flash-5.webp";
import flash6 from "@/assets/landing/flash-6.webp";
import print1 from "@/assets/landing/print-1.webp";
import print2 from "@/assets/landing/print-2.webp";

export const CHECKOUT = {
  basico: "https://pay.wiapy.com/0S2Yv7HRrH",
  premium: "https://pay.wiapy.com/brCITP2700",
};

export const IMAGES = {
  heroMockup,
  heroMockupMobile,
  flashcards: [flash1, flash2, flash3, flash4, flash5, flash6],
  bigMockup,
  garantiaSelo,
  prints: [print1, print2],
  depoimentos: [
    { nome: "Professora Ana", texto: "Economizei horas no planejamento das minhas aulas!", foto: "" },
    { nome: "Professor Carlos", texto: "Meus alunos adoraram a variedade de exercícios.", foto: "" },
    { nome: "Personal Júlia", texto: "Material claro, organizado e prático. Recomendo!", foto: "" },
  ],
};
