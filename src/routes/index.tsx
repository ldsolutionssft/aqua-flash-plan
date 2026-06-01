import { createFileRoute } from "@tanstack/react-router";
import {
  Zap, Layers, ListChecks, Clock, ShieldCheck, Smartphone,
  Check, Star, ShoppingCart, KeyRound, PlayCircle,
  Sparkles, Users, Building2, Waves, GraduationCap, Timer, Gift,
} from "lucide-react";
import { useState, useEffect } from "react";
import { CTAButton } from "@/components/landing/CTAButton";
import { Placeholder } from "@/components/landing/Placeholder";
import { CHECKOUT, IMAGES } from "@/lib/landing-config";
import bonusAquecimento from "@/assets/bonus-aquecimento.png";
import bonusVoltaCalma from "@/assets/bonus-volta-calma.png";
import bonusVariacoes from "@/assets/bonus-variacoes.png";
import bonusTematicas from "@/assets/bonus-tematicas.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`px-4 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <NotificacoesCompra />
      <Hero />
      <VejaComoFunciona />
      <Beneficios />
      <DorSolucao />
      <ParaQuem />
      <OQueRecebe />
      <BonusExclusivos />
      <Planos />
      <Depoimentos />
      <Garantia />
      <ComoFunciona />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}

/* ---------------- URGENCY BAR ---------------- */
function UrgencyBar() {
  const hoje = new Date().toLocaleDateString("pt-BR");
  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white text-center text-sm sm:text-base font-bold px-4 py-2.5 shadow-md">
      <span className="inline-flex items-center justify-center gap-2">
        <Timer className="size-4 animate-pulse" />
        OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {hoje}
      </span>
    </div>
  );
}

/* ---------------- NOTIFICAÇÕES COMPRA ---------------- */
function NotificacoesCompra() {
  const compradores = [
    { nome: "Ana", local: "São Paulo, SP", tempo: "1 minuto atrás" },
    { nome: "Carlos", local: "Rio de Janeiro, RJ", tempo: "3 minutos atrás" },
    { nome: "Mariana", local: "Belo Horizonte, MG", tempo: "5 minutos atrás" },
    { nome: "João", local: "Curitiba, PR", tempo: "7 minutos atrás" },
    { nome: "Fernanda", local: "Salvador, BA", tempo: "9 minutos atrás" },
    { nome: "Pedro", local: "Fortaleza, CE", tempo: "12 minutos atrás" },
    { nome: "Juliana", local: "Brasília, DF", tempo: "15 minutos atrás" },
    { nome: "Lucas", local: "Porto Alegre, RS", tempo: "18 minutos atrás" },
    { nome: "Camila", local: "Recife, PE", tempo: "21 minuto atrás" },
    { nome: "Rafael", local: "Manaus, AM", tempo: "24 minutos atrás" },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      setVisible(true);
      setIndex((prev) => (prev + 1) % compradores.length);
      setTimeout(() => setVisible(false), 4000);
    };

    const delay = Math.random() * 3000 + 2000;
    const timeout = setTimeout(show, delay);

    const interval = setInterval(() => {
      show();
    }, 8000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const atual = compradores[index];

  return (
    <div
      className={`fixed top-12 right-3 z-[60] transition-all duration-500 ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
      <div className="flex items-center gap-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-border/60 px-4 py-3 max-w-[280px]">
        <div className="shrink-0 grid place-items-center size-9 rounded-full bg-green-100 text-green-600">
          <ShoppingCart className="size-4" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">{atual.nome} — {atual.local}</p>
          <p className="text-[10px] text-muted-foreground">Comprou o Hidro Aula Pronta · {atual.tempo}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 -left-20 size-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-96 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
          <div className="relative">
            <Placeholder label="mockup_principal" src={IMAGES.heroMockup} srcMobile={IMAGES.heroMockupMobile} aspect="aspect-[4/5]" priority width={1024} height={1280} />
          </div>
        </div>

        <div className="animate-fade-up order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            <Sparkles className="size-4" /> Material exclusivo para professores
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
            <span className="text-primary">140</span> Flashcards Visuais para <span className="text-primary">Planejamento</span> de Aulas de Hidroginástica
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Mais agilidade, variedade e segurança para suas aulas sem perder horas planejando exercícios.
          </p>

          <ul className="mt-6 space-y-2.5">
            {["140 exercícios visuais organizados", "Acesso imediato e vitalício", "Funciona no celular, tablet e PC"].map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-foreground/90">
                <span className="grid place-items-center size-5 rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <CTAButton href="#planos" size="xl">Quero Acesso Imediato</CTAButton>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-primary" /> Garantia de 7 dias</span>
            <span className="flex items-center gap-1.5"><Zap className="size-4 text-primary" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><Smartphone className="size-4 text-primary" /> 100% responsivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VEJA COMO FUNCIONA ---------------- */
function VejaComoFunciona() {
  return (
    <Section id="como-funciona">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Veja como funciona</h2>
        <p className="mt-3 text-muted-foreground">Exercícios visuais prontos para consultar e aplicar nas aulas.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {IMAGES.flashcards.map((src, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-2xl shadow-soft bg-white transition-all duration-300 hover:shadow-card hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <Placeholder label={`imagem_flashcards_${i + 1}`} src={src} aspect="aspect-square" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- BENEFICIOS ---------------- */
function Beneficios() {
  const items = [
    { icon: Timer, t: "Mais rapidez no planejamento", d: "Encontre exercícios em segundos." },
    { icon: Layers, t: "Mais variedade nas aulas", d: "140 movimentos diferentes." },
    { icon: ListChecks, t: "Exercícios organizados", d: "Categorizados por objetivo." },
    { icon: Clock, t: "Menos tempo criando aulas", d: "Aulas montadas em minutos." },
    { icon: ShieldCheck, t: "Mais segurança", d: "Execução correta dos movimentos." },
    { icon: Smartphone, t: "Fácil de usar", d: "Material visual em qualquer dispositivo." },
  ];
  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Tudo o que você ganha</h2>
        <p className="mt-3 text-muted-foreground">Benefícios pensados para o dia a dia do professor.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="group rounded-2xl bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 border border-border/50">
            <div className="size-12 rounded-xl bg-gradient-accent grid place-items-center text-accent-foreground transition-transform group-hover:scale-110">
              <Icon className="size-6" />
            </div>
            <h3 className="mt-4 font-bold text-lg">{t}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- DOR / SOLUCAO ---------------- */
function DorSolucao() {
  return (
    <Section>
      <div className="rounded-3xl overflow-hidden shadow-card bg-gradient-primary text-primary-foreground p-8 sm:p-14 text-center">
        <p className="text-xl sm:text-2xl font-semibold opacity-90">
          Quantas vezes você ainda vai perder tempo procurando exercícios para repetir nas aulas?
        </p>
        <div className="my-6 h-px bg-primary-foreground/20" />
        <p className="text-2xl sm:text-3xl font-bold">
          Com o Hidro Aula Pronta você tem exercícios organizados e prontos para aplicar.
        </p>
        <div className="mt-8">
          <CTAButton href="#planos" size="lg" variant="outline" className="bg-white">
            Quero Acesso Agora
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- PARA QUEM ---------------- */
function ParaQuem() {
  const items = [
    { icon: GraduationCap, t: "Professores de hidroginástica" },
    { icon: Building2, t: "Academias e clubes" },
    { icon: Users, t: "Personal aquático" },
    { icon: Sparkles, t: "Iniciantes na área" },
    { icon: Timer, t: "Quem quer ganhar tempo" },
  ];
  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Para quem é</h2>
        <p className="mt-3 text-muted-foreground">Feito para quem leva as aulas a sério.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map(({ icon: Icon, t }) => (
          <div key={t} className="rounded-2xl bg-card p-5 text-center shadow-soft border border-border/50 hover:shadow-card transition-all">
            <Icon className="size-8 text-primary mx-auto" />
            <p className="mt-3 font-semibold text-sm">{t}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- O QUE RECEBE ---------------- */
function OQueRecebe() {
  const itens = [
    "140 flashcards visuais de exercícios",
    "Organização por objetivo da aula",
    "Material 100% digital",
    "Acesso imediato após a compra",
    "Atualizações futuras inclusas",
    "Compatível com celular, tablet e PC",
  ];
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-accent opacity-30 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-card">
            <Placeholder label="mockup_grande_produto" src={IMAGES.bigMockup} aspect="aspect-[4/3]" />
          </div>
          <span className="absolute -top-3 -right-3 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-glow">
            BÔNUS INCLUSO
          </span>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">O que você vai receber</h2>
          <p className="mt-3 text-muted-foreground">Um kit completo para transformar suas aulas hoje mesmo.</p>
          <ul className="mt-6 space-y-3">
            {itens.map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center size-6 rounded-full bg-gradient-primary text-primary-foreground shrink-0">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{it}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton href="#planos">Garantir o meu acesso</CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- BÔNUS EXCLUSIVOS ---------------- */
function BonusExclusivos() {
  const bonus = [
    {
      img: bonusAquecimento,
      tag: "Bônus #1",
      titulo: "20 Sequências de Aquecimento",
      desc: "Opções prontas de aquecimento com movimentos progressivos para preparar a turma antes da parte principal.",
      itens: [] as string[],
    },
    {
      img: bonusVoltaCalma,
      tag: "Bônus #2",
      titulo: "20 Sequências de Volta à Calma",
      desc: "Sugestões de encerramento com movimentos leves, respiração, mobilidade e relaxamento.",
      itens: [] as string[],
    },
    {
      img: bonusVariacoes,
      tag: "Bônus #3",
      titulo: "50 Variações Rápidas de Exercícios",
      desc: "Banco extra de variações para transformar qualquer exercício usando:",
      itens: ["Direção", "Ritmo", "Braços", "Pernas", "Deslocamento", "Resistência da água", "Flutuação"],
    },
    {
      img: bonusTematicas,
      tag: "Bônus #4",
      titulo: "12 Aulas Temáticas Prontas",
      desc: "Sequências completas com temas variados:",
      itens: [
        "Aula para idosos", "Aula funcional", "Coordenação",
        "Resistência", "Equilíbrio", "Relaxamento",
        "Aula intensa", "Aula com música lenta",
      ],
    },
  ];

  return (
    <Section id="bonus" className="bg-gradient-to-b from-accent/5 via-background to-background">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
          <Gift className="size-4" /> Bônus exclusivos do Premium
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
          Leve <span className="text-accent">4 bônus</span> que valem mais que o próprio material
        </h2>
        <p className="mt-3 text-muted-foreground">
          Inclusos automaticamente ao escolher o Plano Premium.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {bonus.map((b) => (
          <div
            key={b.titulo}
            className="group relative rounded-3xl bg-card border border-border shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 shadow-soft">
                <Gift className="size-3.5" /> {b.tag}
              </span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/10 overflow-hidden">
              <img
                src={b.img}
                alt={b.titulo}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold leading-tight">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              {b.itens.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {b.itens.map((it) => (
                    <li
                      key={it}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton href={CHECKOUT.premium}>Quero o Premium com os 4 bônus</CTAButton>
        <p className="mt-3 text-xs text-muted-foreground">Acesso imediato · Garantia de 7 dias</p>
      </div>
    </Section>
  );
}

/* ---------------- PLANOS ---------------- */
function Planos() {
  return (
    <Section id="planos" className="bg-gradient-hero">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Escolha seu acesso</h2>
        <p className="mt-3 text-muted-foreground">Oferta por tempo limitado.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <PlanoCard
          titulo="Plano Básico"
          preco="R$ 17,90"
          beneficios={["140 flashcards visuais", "Acesso imediato", "Compatível com celular", "Garantia de 7 dias"]}
          href={CHECKOUT.basico}
          cta="Quero o Básico"
        />
        <PlanoCard
          titulo="Plano Premium"
          preco="R$ 27,90"
          beneficios={[
            "Tudo do plano básico",
            "20 Sequências de Aquecimento",
            "20 Sequências de Volta à Calma",
            "50 Variações Rápidas de Exercícios",
            "12 Aulas Temáticas Prontas",
            "Atualizações futuras",
            "Suporte prioritário",
          ]}
          href={CHECKOUT.premium}
          cta="Quero o Premium"
          destaque
        />
      </div>
    </Section>
  );
}

function PlanoCard({
  titulo, preco, beneficios, href, cta, destaque,
}: { titulo: string; preco: string; beneficios: string[]; href: string; cta: string; destaque?: boolean }) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        destaque
          ? "bg-gradient-primary text-primary-foreground shadow-glow scale-100 md:scale-105 border-2 border-primary"
          : "bg-card shadow-card border border-border"
      }`}
    >
      {destaque && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-soft">
          ⭐ MAIS ESCOLHIDO
        </span>
      )}
      <h3 className="text-xl font-bold">{titulo}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-extrabold">{preco}</span>
        <span className={destaque ? "text-primary-foreground/70" : "text-muted-foreground"}>à vista</span>
      </div>
      <ul className="mt-6 space-y-2.5">
        {beneficios.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Check className={`size-5 mt-0.5 shrink-0 ${destaque ? "text-accent" : "text-primary"}`} strokeWidth={3} />
            <span className="text-sm font-medium">{b}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] ${
          destaque
            ? "bg-white text-primary shadow-soft hover:shadow-card"
            : "bg-gradient-primary text-primary-foreground shadow-soft"
        }`}
      >
        <ShoppingCart className="size-5" />
        {cta}
      </a>
    </div>
  );
}

/* ---------------- DEPOIMENTOS ---------------- */
function Depoimentos() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Professores aprovam</h2>
        <p className="mt-3 text-muted-foreground">Veja o que estão dizendo.</p>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {IMAGES.prints.map((p, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-soft border border-border/50">
            <Placeholder label={`print_${i + 1}`} src={p} aspect="aspect-video" />
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- GARANTIA ---------------- */
function Garantia() {
  return (
    <Section className="bg-muted/40">
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center max-w-3xl mx-auto bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border/50">
        <div className="mx-auto md:mx-0">
          {IMAGES.garantiaSelo ? (
            <img src={IMAGES.garantiaSelo} alt="Garantia 7 dias" className="size-32 object-contain" loading="lazy" />
          ) : (
            <div className="size-32 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow">
              <div className="text-center">
                <div className="text-3xl font-extrabold leading-none">7</div>
                <div className="text-[10px] uppercase tracking-wider">dias</div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Garantia incondicional de 7 dias</h2>
          <p className="mt-3 text-muted-foreground">
            Se em até 7 dias você não estiver satisfeito, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- COMO FUNCIONA ACESSO ---------------- */
function ComoFunciona() {
  const steps = [
    { icon: ShoppingCart, t: "Compra", d: "Pagamento 100% seguro." },
    { icon: KeyRound, t: "Recebe Acesso", d: "Liberação imediata por e-mail." },
    { icon: PlayCircle, t: "Comece a Usar", d: "Aplique nas suas aulas hoje." },
  ];
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Como funciona o acesso</h2>
        <p className="mt-3 text-muted-foreground">Em 3 passos simples.</p>
      </div>
      <div className="mt-12 relative grid sm:grid-cols-3 gap-8">
        <div className="hidden sm:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 via-accent to-primary/30" />
        {steps.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className="relative text-center">
            <div className="mx-auto size-20 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow relative z-10">
              <Icon className="size-8" />
            </div>
            <div className="mt-2 text-xs font-bold text-primary">PASSO {i + 1}</div>
            <h3 className="mt-1 font-bold text-lg">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const itens = [
    { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail." },
    { q: "Funciona no celular?", a: "Sim. O material é compatível com celular, tablet e computador." },
    { q: "O acesso é vitalício?", a: "Sim. Você compra uma vez e tem acesso permanente ao material." },
    { q: "Tem atualizações?", a: "Sim. Atualizações futuras estão incluídas, sem custo adicional." },
    { q: "Posso imprimir os flashcards?", a: "Sim. O material foi pensado para uso digital e impresso." },
    { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar. Se não gostar, devolvemos 100% do valor." },
  ];
  return (
    <Section className="bg-muted/40">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">Perguntas frequentes</h2>
      </div>
      <div className="mt-10 max-w-3xl mx-auto space-y-3">
        {itens.map((item, i) => <FAQItem key={i} {...item} />)}
      </div>
    </Section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left p-5 font-semibold hover:bg-muted/30 transition-colors"
      >
        <span>{q}</span>
        <span className={`shrink-0 size-7 rounded-full bg-primary text-primary-foreground grid place-items-center transition-transform ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CTAFinal() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary text-primary-foreground p-10 sm:p-16 text-center shadow-glow">
        <div className="absolute top-0 right-0 size-64 bg-accent/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 size-64 bg-white/10 blur-3xl rounded-full" />
        <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            Comece hoje a montar aulas mais rápidas, organizadas e profissionais.
          </h2>
          <div className="mt-8">
            <CTAButton href={CHECKOUT.premium} size="xl" variant="outline" className="bg-white">
              Quero Acesso Agora
            </CTAButton>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/90">
            <span className="flex items-center gap-1.5"><Zap className="size-4" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4" /> Garantia 7 dias</span>
            <span className="flex items-center gap-1.5"><ShoppingCart className="size-4" /> Pagamento seguro</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4">
        © {new Date().getFullYear()} Hidro Aula Pronta — Todos os direitos reservados.
      </div>
    </footer>
  );
}
