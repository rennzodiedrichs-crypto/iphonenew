import { useScrollReveal } from "@/hooks/useScrollReveal";

const xiaomi = [
  { name: "Xiaomi 14T Pro", badge: "NOVO", specs: "512GB · Leica Camera · 5000mAh", model: "14T Pro" },
  { name: "Redmi Note 13 Pro", badge: "NOVO", specs: "256GB · 200MP · 67W Fast Charge", model: "N13P" },
  { name: "Redmi 13C", badge: "NOVO", specs: "128GB · Entrada ideal · Bateria 5000mAh", model: "13C" },
];

const realme = [
  { name: "Realme 12 Pro+", badge: "NOVO", specs: "256GB · Periscope Camera · 67W", model: "12P+" },
  { name: "Realme C67", badge: "NOVO", specs: "128GB · 108MP · Design slim", model: "C67" },
  { name: "Realme Narzo 60", badge: "NOVO", specs: "128GB · AMOLED · 33W", model: "N60" },
];

type Phone = { name: string; badge: string; specs: string; model: string; highlight?: string };

const PhoneCard = ({ p, i }: { p: Phone; i: number }) => {
  const waText = encodeURIComponent(`Olá! Tenho interesse no ${p.name} ${p.specs.split(" · ")[0]}. Poderia me passar mais informações?`);
  return (
    <div
      className="group relative rounded-lg border overflow-hidden transition-all duration-300 animate-fade-slide-up"
      style={{
        background: "linear-gradient(160deg, hsl(var(--surface-2)), hsl(var(--surface)))",
        borderColor: "hsl(var(--border))",
        minHeight: 380,
        animationDelay: `${i * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px hsl(var(--border-hover))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {p.highlight && (
        <span
          className="absolute top-3 right-3 z-20 font-dm-mono text-[0.6rem] uppercase tracking-wide px-2 py-1 rounded-full"
          style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))", border: "1px solid hsl(var(--gold) / 0.3)" }}
        >
          {p.highlight}
        </span>
      )}

      <div className="relative h-[50%] flex items-center justify-center overflow-hidden">
        <span className="font-cormorant text-[4rem] font-bold absolute text-foreground opacity-[0.04] select-none">
          {p.model}
        </span>
        <svg width="100" height="200" viewBox="0 0 100 200" fill="none" className="relative z-10" style={{ opacity: 0.07 }}>
          <rect x="5" y="5" width="90" height="190" rx="16" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
          <rect x="14" y="28" width="72" height="148" rx="3" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
        </svg>
        <div className="absolute w-24 h-24 rounded-full blur-[60px]" style={{ background: "hsl(var(--gold) / 0.12)" }} />
      </div>

      <div className="p-6">
        <span
          className="font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] px-3 py-1 rounded-full border inline-block mb-3"
          style={{ borderColor: "hsl(var(--gold) / 0.3)", color: "hsl(var(--gold))" }}
        >
          {p.badge}
        </span>
        <h3 className="font-outfit font-semibold text-[1.15rem] text-foreground mb-1">{p.name}</h3>
        <p className="font-dm-mono text-[0.7rem] mb-4" style={{ color: "hsl(var(--white-40))" }}>{p.specs}</p>
        <a
          href={`https://wa.me/5563930002112?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-outfit text-[0.85rem] text-primary relative inline-block group/link"
        >
          Ver detalhes →
          <span className="absolute bottom-0 left-0 w-full h-px bg-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const OtherPhones = () => {
  const ref = useScrollReveal();

  return (
    <section id="android" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "hsl(var(--bg))" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ background: "hsl(var(--gold) / 0.04)" }} />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary mb-3">Android Premium</p>
        <h2 className="font-cormorant font-bold text-foreground text-[2.2rem] md:text-[3.5rem] tracking-[-0.02em] mb-2">
          Xiaomi &amp; Realme
        </h2>
        <p className="font-outfit font-light text-[1rem] mb-14" style={{ color: "hsl(var(--white-40))" }}>
          Tecnologia acessível com qualidade garantida.
        </p>

        <div className="mb-10">
          <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.08em] mb-5" style={{ color: "hsl(var(--white-40))" }}>Xiaomi</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {xiaomi.map((p, i) => <PhoneCard key={p.name} p={p} i={i} />)}
          </div>
        </div>

        <div>
          <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.08em] mb-5" style={{ color: "hsl(var(--white-40))" }}>Realme</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realme.map((p, i) => <PhoneCard key={p.name} p={p} i={i} />)}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-outfit text-sm px-10 py-[14px] rounded-sm border transition-all duration-300"
            style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--white-40))" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--gold))"; e.currentTarget.style.color = "hsl(var(--gold))"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.color = "hsl(var(--white-40))"; }}
          >
            Ver todos os Android
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherPhones;
