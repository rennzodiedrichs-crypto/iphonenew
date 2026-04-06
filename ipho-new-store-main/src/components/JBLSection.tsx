import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const jblProducts = [
  { name: "JBL Charge 5", specs: "40W · IPX7 · 20h bateria · PartyBoost" },
  { name: "JBL Flip 7", specs: "30W · IP67 · 12h bateria · Compacta" },
  { name: "JBL Go 4", specs: "Portátil · IP67 · 7h bateria · Ideal para viagens" },
];

const features = [
  "Bluetooth 5.3 de longo alcance",
  "Resistência à água IPX7",
  "Até 20h de bateria",
];

const JBLSection = () => {
  const scrollRef = useScrollReveal();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section 
      id="jbl" 
      ref={containerRef} 
      className="py-24 relative overflow-hidden" 
      style={{ background: "hsl(var(--surface))" }}
    >
      <div 
        ref={scrollRef} 
        className="absolute inset-0 pointer-events-none" 
      />
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: "hsl(var(--gold) / 0.06)" }} />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Editorial */}
          <div>
            <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary mb-4">Som Premium</p>
            <h2 className="font-cormorant font-bold text-foreground text-[2.5rem] md:text-[4rem] leading-[1.0] tracking-[-0.02em] mb-6">
              O som que<br />
              você <span className="text-primary">sente</span><br />
              de verdade.
            </h2>
            <p className="font-outfit font-light text-[1rem] leading-[1.75] mb-8" style={{ color: "hsl(var(--white-40))" }}>
              Caixas de som JBL com potência, qualidade e o estilo que combina com você. Bluetooth, à prova d'água e com bateria de longa duração.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="font-outfit text-[0.95rem]" style={{ color: "hsl(var(--white-70))" }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5563930002112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-outfit font-semibold text-sm px-9 py-[15px] rounded-sm bg-primary text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            >
              Ver caixas JBL
            </a>
          </div>

          <div className="space-y-4">
            {jblProducts.map((p, i) => (
              <motion.div
                key={p.name}
                className="group relative rounded-md border p-6 overflow-hidden transition-all duration-300"
                style={{
                  background: "hsl(var(--surface-2))",
                  borderColor: "hsl(var(--border))",
                  y: i % 2 === 0 ? y : 0, // Alternating parallax
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border-hover))";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="relative z-10 flex-1">
                    <h3 className="font-outfit font-semibold text-foreground text-[1.1rem] mb-1">{p.name}</h3>
                    <p className="font-dm-mono text-[0.7rem]" style={{ color: "hsl(var(--white-40))" }}>{p.specs}</p>
                    <a
                      href="https://wa.me/5563930002112"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-outfit text-[0.85rem] text-primary mt-3 inline-block hover:text-gold transition-colors"
                    >
                      Ver mais →
                    </a>
                  </div>

                  <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={`/jbl-${p.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                      alt={p.name}
                      className="w-full h-full object-contain relative z-10 drop-shadow-lg scale-125 transition-transform duration-500 group-hover:scale-150"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                    {/* Sound wave bg art (shown as fallback or decoration) */}
                    <svg className="absolute opacity-[0.08] text-primary group-hover:opacity-20 transition-opacity" width="80" height="80" viewBox="0 0 120 120" fill="none">
                      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="0.8" />
                      <circle cx="60" cy="60" r="36" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JBLSection;
