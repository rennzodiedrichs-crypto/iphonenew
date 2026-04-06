import { useScrollReveal } from "@/hooks/useScrollReveal";

const xiaomi = [
  { name: "Xiaomi 14T Pro", badge: "NOVO", specs: "512GB · Leica Camera · 5000mAh" },
  { name: "Redmi Note 13 Pro", badge: "NOVO", specs: "256GB · 200MP · 67W Fast Charge" },
  { name: "Redmi 13C", badge: "NOVO", specs: "128GB · Entrada ideal · Bateria 5000mAh" },
];

const realme = [
  { name: "Realme 12 Pro+", badge: "NOVO", specs: "256GB · Periscope Camera · 67W" },
  { name: "Realme C67", badge: "NOVO", specs: "128GB · 108MP · Design slim" },
  { name: "Realme Narzo 60", badge: "NOVO", specs: "128GB · AMOLED · 33W" },
];

const PhoneCard = ({ p, i }: { p: typeof xiaomi[0]; i: number }) => (
  <div
    className="group rounded-lg border p-5 transition-all duration-300 animate-fade-slide-up"
    style={{
      background: "linear-gradient(160deg, hsl(var(--surface-2)), hsl(var(--surface)))",
      borderColor: "hsl(var(--border))",
      animationDelay: `${i * 80}ms`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px hsl(var(--border-hover))";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <span
      className="font-dm-mono text-[0.6rem] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border inline-block mb-3"
      style={{ borderColor: "hsl(var(--gold) / 0.3)", color: "hsl(var(--gold))" }}
    >
      {p.badge}
    </span>
    <h3 className="font-outfit font-semibold text-foreground text-[1.05rem] mb-1">{p.name}</h3>
    <p className="font-dm-mono text-[0.7rem] mb-3" style={{ color: "hsl(var(--white-40))" }}>{p.specs}</p>
    <a
      href="https://wa.me/5563930002112"
      target="_blank"
      rel="noopener noreferrer"
      className="font-outfit text-[0.8rem] text-primary"
    >
      Ver detalhes →
    </a>
  </div>
);

const OtherPhones = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-24" style={{ background: "hsl(var(--bg))" }}>
      <div className="container mx-auto px-5 lg:px-8">
        <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary mb-3">Android Premium</p>
        <h2 className="font-outfit font-semibold text-foreground text-[2rem] md:text-[2.5rem] mb-14">
          Xiaomi & Realme
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Xiaomi */}
          <div className="relative">
            <span className="font-cormorant text-[6rem] font-bold absolute -top-8 left-0 text-foreground opacity-[0.04] select-none leading-none">Xiaomi</span>
            <div className="grid grid-cols-1 gap-4 pt-8">
              {xiaomi.map((p, i) => <PhoneCard key={p.name} p={p} i={i} />)}
            </div>
          </div>

          {/* Realme */}
          <div className="relative">
            <span className="font-cormorant text-[6rem] font-bold absolute -top-8 left-0 text-foreground opacity-[0.04] select-none leading-none">Realme</span>
            <div className="grid grid-cols-1 gap-4 pt-8">
              {realme.map((p, i) => <PhoneCard key={p.name} p={p} i={i + 3} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherPhones;
