import { Plug, Battery, Headphones, Smartphone, Shield, Globe, Package, Gamepad2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pills = [
  { icon: Plug, name: "Carregadores" },
  { icon: Battery, name: "Baterias" },
  { icon: Headphones, name: "Fones" },
  { icon: Smartphone, name: "Capas" },
  { icon: Shield, name: "Películas" },
  { icon: Globe, name: "Starlink" },
  { icon: Package, name: "Suportes" },
  { icon: Gamepad2, name: "Outros" },
];

const accessories = [
  { name: "Carregador MagSafe 30W", specs: "Original Apple · USB-C" },
  { name: "Carregador Turbo 67W", specs: "Compatível Xiaomi/Realme" },
  { name: "Bateria iPhone 15", specs: "Certificada · 3877mAh" },
  { name: "Kit Starlink Residencial", specs: "Internet via satélite · Alta velocidade" },
];

const Accessories = () => {
  const ref = useScrollReveal();

  return (
    <section id="acessorios" ref={ref} className="py-24" style={{ background: "hsl(var(--surface))" }}>
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-outfit font-semibold text-foreground text-[1.8rem] md:text-[2.2rem]">
            Acessórios e Muito Mais
          </h2>
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit text-sm text-primary hidden md:inline"
          >
            Ver todos →
          </a>
        </div>

        {/* Pills scroll strip */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          {pills.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border whitespace-nowrap flex-shrink-0 transition-all duration-300 cursor-pointer"
              style={{
                background: "hsl(var(--surface-3))",
                borderColor: "hsl(var(--border))",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border-hover))"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; }}
            >
              <p.icon size={16} className="text-primary" />
              <span className="font-outfit font-medium text-sm text-foreground">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Accessory cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accessories.map((a, i) => (
            <div
              key={a.name}
              className="rounded-lg border p-5 transition-all duration-300 animate-fade-slide-up"
              style={{
                background: "hsl(var(--surface-2))",
                borderColor: "hsl(var(--border))",
                minHeight: 200,
                animationDelay: `${i * 80}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3 className="font-outfit font-semibold text-foreground text-[1rem] mb-2">{a.name}</h3>
              <p className="font-dm-mono text-[0.7rem]" style={{ color: "hsl(var(--white-40))" }}>{a.specs}</p>
              <a
                href="https://wa.me/5563930002112"
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit text-[0.8rem] text-primary mt-4 inline-block"
              >
                Ver detalhes →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
