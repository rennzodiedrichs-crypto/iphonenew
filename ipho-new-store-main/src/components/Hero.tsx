import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  const anim = (delay: number) =>
    loaded
      ? { animation: `fadeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`, opacity: 0 }
      : { opacity: 0 };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden noise-overlay"
      style={{ minHeight: "100svh", background: "hsl(var(--void))" }}
    >
      {/* Atmospheric layers */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 70% 60% at 20% 80%, rgba(245,168,0,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 50% 45% at 80% 10%, rgba(255,255,255,0.025) 0%, transparent 45%),
          repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px)
        `,
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 lg:px-8 flex items-center min-h-[100svh]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full gap-12 pt-24 lg:pt-0">
          {/* Left column */}
          <div className="lg:w-[60%]">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] mb-8 px-[14px] py-[6px] rounded-full border"
              style={{ ...anim(100), color: "hsl(var(--gold))", borderColor: "hsl(var(--border))" }}
            >
              Palmas · Tocantins · Desde 2021
            </div>

            {/* Headlines */}
            <h1
              className="font-cormorant font-bold text-[2.8rem] md:text-[5rem] lg:text-[7.5vw] leading-[0.92] tracking-[-0.02em] text-foreground"
              style={anim(300)}
            >
              Tecnologia
            </h1>
            <h1
              className="font-cormorant font-bold text-[2.8rem] md:text-[5rem] lg:text-[7.5vw] leading-[0.92] tracking-[-0.02em] text-foreground"
              style={anim(450)}
            >
              de alto
            </h1>
            <h1
              className="font-cormorant font-bold text-[2.8rem] md:text-[5rem] lg:text-[7.5vw] leading-[0.92] tracking-[-0.02em] text-primary"
              style={anim(600)}
            >
              padrão.
            </h1>

            {/* Divider */}
            <div
              className="h-[1px] bg-primary mt-7 mb-7 animate-draw-line"
              style={{ ...anim(750) }}
            />

            {/* Subtext */}
            <p
              className="font-outfit font-light text-[1.05rem] max-w-[460px] leading-[1.75]"
              style={{ ...anim(850), color: "hsl(var(--white-70))" }}
            >
              iPhones, JBL, Xiaomi, Realme e acessórios premium. Qualidade garantida e suporte especializado para você em Palmas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10" style={anim(1000)}>
              <a
                href="#celulares"
                className="font-outfit font-semibold text-sm px-9 py-[15px] rounded-sm bg-primary text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              >
                Ver Produtos
              </a>
              <a
                href="https://wa.me/5563930002112"
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit font-semibold text-sm px-9 py-[15px] rounded-sm border text-foreground transition-all duration-300"
                style={{ borderColor: "hsl(var(--white-10))" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--gold))"; e.currentTarget.style.color = "hsl(var(--gold))"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--white-10))"; e.currentTarget.style.color = "hsl(var(--foreground))"; }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Right column — geometric composition */}
          <div
            className="hidden lg:flex flex-1 justify-center items-center"
            style={anim(1100)}
          >
            <div className="animate-float relative w-[360px] h-[400px]">
              {/* Glow orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-[40px]" style={{ background: "hsl(var(--gold) / 0.15)" }} />
              {/* Outer rectangle */}
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-lg border-2 rotate-[12deg]" style={{ borderColor: "hsl(var(--gold) / 0.2)" }} />
              {/* Inner rectangle */}
              <div className="absolute top-16 left-16 right-16 bottom-16 rounded-md border rotate-[-4deg]" style={{ borderColor: "hsl(var(--white-10))" }} />
              {/* Horizontal lines */}
              <div className="absolute top-[30%] left-0 right-0 h-px" style={{ background: "hsl(var(--white-10))" }} />
              <div className="absolute top-[50%] left-0 right-0 h-px" style={{ background: "hsl(var(--white-05))" }} />
              <div className="absolute top-[70%] left-0 right-0 h-px" style={{ background: "hsl(var(--white-10))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
