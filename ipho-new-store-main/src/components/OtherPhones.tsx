import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import QuickViewModal from "./QuickViewModal";

const xiaomi: Phone[] = [
  { 
    name: "Xiaomi 14T Pro", 
    badge: "NOVO", 
    specs: "512GB · Lentes Profissionais Leica · Chip Dimensity 9300+", 
    model: "14T Pro",
    image: "/xiaomi14ultra.png" 
  },
  { 
    name: "Redmi Note 13 Pro", 
    badge: "NOVO", 
    specs: "256GB · Super Câmera 200MP · Carregamento Turbo 67W", 
    model: "N13P",
    image: "/redmi.note13pro.png"
  },
  { 
    name: "Redmi 13C", 
    badge: "NOVO", 
    specs: "128GB · Visualização Fluida 90Hz · Bateria de Longa Duração", 
    model: "13C",
    image: "/redmi-13C.png"
  },
];

const realme: Phone[] = [
  { 
    name: "Realme 12 Pro+", 
    badge: "NOVO", 
    specs: "256GB · Lente Teleobjetiva Periscópica · Design de Luxo Rolex", 
    model: "12P+",
    image: "/realme12.png"
  },
  { 
    name: "Realme C67", 
    badge: "NOVO", 
    specs: "128GB · Câmera Principal 108MP · Design Slim & Moderno", 
    model: "C67",
    image: "/Realme_c67.png"
  },
  { 
    name: "Realme Narzo 60", 
    badge: "NOVO", 
    specs: "128GB · Tela AMOLED Vibrante · Carregamento Ultra-Rápido SuperVOOC", 
    model: "N60",
    image: "/realme_narzo60.png"
  },
];

interface Phone { 
  name: string; 
  badge: string; 
  specs: string; 
  model: string; 
  highlight?: string;
  image?: string;
}

const PhoneCard = ({ p, i, onQuickView }: { p: Phone; i: number; onQuickView: (p: Phone) => void }) => {
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

      <div className="relative h-[50%] flex items-center justify-center overflow-hidden pt-8">
        <span className="font-cormorant text-[4rem] font-bold absolute text-foreground opacity-[0.04] select-none pointer-events-none">
          {p.model}
        </span>
        
        {p.image ? (
          <img 
            src={p.image} 
            alt={p.name} 
            loading="lazy"
            decoding="async"
            className="h-[80%] w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <svg width="100" height="150" viewBox="0 0 100 200" fill="none" className="relative z-10" style={{ opacity: 0.1 }}>
            <rect x="5" y="5" width="90" height="190" rx="16" stroke="currentColor" strokeWidth="1.2" className="text-foreground" />
          </svg>
        )}
        
        <div className="absolute w-24 h-24 rounded-full blur-[60px]" style={{ background: "hsl(var(--gold) / 0.12)" }} />
      </div>

      <div className="p-6 pt-2">
        <span
          className="font-dm-mono text-[0.75rem] uppercase tracking-[0.1em] px-3 py-1 rounded-full border inline-block mb-3"
          style={{ 
            borderColor: p.badge === "NOVO" ? "hsl(var(--gold) / 0.3)" : "hsl(var(--white-10))",
            color: p.badge === "NOVO" ? "hsl(var(--gold))" : "hsl(var(--white-40))",
          }}
        >
          {p.badge}
        </span>
        <h3 className="font-outfit font-semibold text-[1.2rem] text-foreground mb-1">{p.name}</h3>
        <p className="font-dm-mono text-[0.75rem] mb-4" style={{ color: "hsl(var(--white-40))" }}>{p.specs}</p>
        <div className="flex items-center justify-between mt-4">
          <a
            href={`https://wa.me/5563930002112?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit text-[0.9rem] font-medium text-primary relative inline-block group/link"
          >
            Ver detalhes →
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
          </a>

          <button
            onClick={() => onQuickView(p)}
            className="text-[0.85rem] uppercase tracking-wider font-medium px-3 py-1.5 rounded border border-white/10 text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

const OtherPhones = () => {
  const ref = useScrollReveal();
  const [selectedProduct, setSelectedProduct] = useState<Phone | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openQuickView = (product: Phone) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="android" ref={ref} className="py-24 relative overflow-hidden" style={{ background: "hsl(var(--bg))" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ background: "hsl(var(--gold) / 0.04)" }} />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <p className="font-dm-mono text-[0.75rem] uppercase tracking-[0.1em] text-primary mb-3">Android Premium</p>
        <h2 className="font-cormorant font-bold text-foreground text-[2.2rem] md:text-[3.5rem] tracking-[-0.02em] mb-2">
          Xiaomi &amp; Realme
        </h2>
        <p className="font-outfit font-light text-[1rem] mb-14" style={{ color: "hsl(var(--white-40))" }}>
          Tecnologia acessível com qualidade garantida.
        </p>

        <div className="mb-10">
          <p className="font-dm-mono text-[0.75rem] uppercase tracking-[0.08em] mb-5" style={{ color: "hsl(var(--white-40))" }}>Xiaomi</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {xiaomi.map((p, i) => <PhoneCard key={p.name} p={p} i={i} onQuickView={openQuickView} />)}
          </div>
        </div>

        <div>
          <p className="font-dm-mono text-[0.75rem] uppercase tracking-[0.08em] mb-5" style={{ color: "hsl(var(--white-40))" }}>Realme</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {realme.map((p, i) => <PhoneCard key={p.name} p={p} i={i} onQuickView={openQuickView} />)}
          </div>
        </div>

        <QuickViewModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-outfit text-[0.9rem] px-10 py-[14px] rounded-sm border transition-all duration-300"
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
