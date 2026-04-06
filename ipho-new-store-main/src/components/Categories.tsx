import { Smartphone, Volume2, Wrench, Package, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    name: "iPhones",
    desc: "Novos e seminovos com garantia",
    icon: Smartphone,
    span: "md:col-span-2",
    bgArt: (
      <svg className="absolute top-4 right-4 opacity-[0.06]" width="180" height="280" viewBox="0 0 180 280" fill="none">
        <rect x="10" y="10" width="160" height="260" rx="32" stroke="currentColor" strokeWidth="1.5" />
        <rect x="24" y="50" width="132" height="200" rx="4" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    name: "JBL Audio",
    desc: "Caixas de som Bluetooth premium",
    icon: Volume2,
    bgArt: (
      <svg className="absolute top-1/2 right-6 -translate-y-1/2 opacity-[0.07]" width="160" height="160" viewBox="0 0 160 160" fill="none">
        <circle cx="80" cy="80" r="30" stroke="currentColor" strokeWidth="1" />
        <circle cx="80" cy="80" r="50" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    name: "Xiaomi",
    desc: "Linha completa, custo-benefício",
    icon: Smartphone,
    bgArt: (
      <svg className="absolute top-4 right-4 opacity-[0.06]" width="140" height="140" viewBox="0 0 140 140" fill="none">
        <polygon points="70,10 130,40 130,100 70,130 10,100 10,40" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <polygon points="70,30 110,50 110,90 70,110 30,90 30,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  },
  {
    name: "Realme",
    desc: "Tecnologia acessível e moderna",
    icon: Smartphone,
    bgArt: (
      <svg className="absolute top-4 right-4 opacity-[0.07]" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <line x1="0" y1="0" x2="120" y2="120" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="0" x2="120" y2="100" stroke="currentColor" strokeWidth="0.5" />
        <line x1="40" y1="0" x2="120" y2="80" stroke="currentColor" strokeWidth="0.5" />
        <line x1="60" y1="0" x2="120" y2="60" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    name: "Assistência",
    desc: "Telas, baterias, software",
    icon: Wrench,
    bgArt: (
      <svg className="absolute top-1/2 right-6 -translate-y-1/2 opacity-[0.07]" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Acessórios & Mais",
    desc: "Carregadores, capas, películas, Starlink",
    icon: Package,
    span: "md:col-span-2",
    bgArt: (
      <svg className="absolute top-4 right-4 opacity-[0.06]" width="160" height="120" viewBox="0 0 160 120" fill="none">
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 10 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={10 + c * 16} cy={10 + r * 14} r="1.2" fill="currentColor" />
          ))
        )}
      </svg>
    ),
  },
];

const Categories = () => {
  const ref = useScrollReveal();

  return (
    <section id="categorias" ref={ref} className="py-24" style={{ background: "hsl(var(--bg))" }}>
      <div className="container mx-auto px-5 lg:px-8">
        <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary mb-3">Nossas Categorias</p>
        <h2 className="font-outfit font-semibold text-foreground text-[2rem] md:text-[2.8rem] mb-14">
          Encontre o que você procura
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          {categories.slice(0, 3).map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} delay={i * 80} tall />
          ))}
          {/* Row 2 */}
          {categories.slice(3).map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} delay={(i + 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ cat, delay, tall }: { cat: typeof categories[0]; delay: number; tall?: boolean }) => (
  <div
    className={`group relative overflow-hidden rounded-lg border text-foreground transition-all duration-[350ms] cursor-pointer animate-fade-slide-up ${cat.span || ""}`}
    style={{
      background: "linear-gradient(160deg, hsl(var(--surface)), hsl(var(--surface-2)))",
      borderColor: "hsl(var(--border))",
      minHeight: tall ? 320 : 240,
      animationDelay: `${delay}ms`,
      transition: "border-color 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "hsl(var(--border-hover))";
      e.currentTarget.style.boxShadow = "0 0 40px hsl(var(--gold-glow)), 0 20px 60px rgba(0,0,0,0.4)";
      e.currentTarget.style.transform = "scale(1.005)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "hsl(var(--border))";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {cat.bgArt}
    <div className="absolute bottom-0 left-0 p-7 z-10">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-4 border"
        style={{ background: "hsl(var(--gold-glow))", borderColor: "hsl(var(--border))" }}
      >
        <cat.icon size={20} className="text-primary" />
      </div>
      <h3 className="font-outfit font-semibold text-[1.4rem] text-foreground mb-1">{cat.name}</h3>
      <p className="font-outfit font-light text-[0.85rem]" style={{ color: "hsl(var(--white-40))" }}>{cat.desc}</p>
      <ChevronRight
        size={18}
        className="text-primary mt-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100"
      />
    </div>
  </div>
);

export default Categories;
