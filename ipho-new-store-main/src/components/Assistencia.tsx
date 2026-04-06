import { Smartphone, Battery, Settings, Cpu, Camera, Search } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Smartphone, title: "Troca de Tela", desc: "Telas originais com garantia de 90 dias. iPhone, Xiaomi e Realme." },
  { icon: Battery, title: "Troca de Bateria", desc: "Baterias certificadas. Autonomia como nova em 30 minutos." },
  { icon: Settings, title: "Software & Desbloqueio", desc: "Formatação, restauração e desbloqueio de operadora." },
  { icon: Cpu, title: "Reparo de Placa", desc: "Micro-soldagem e diagnóstico especializado." },
  { icon: Camera, title: "Troca de Câmera", desc: "Câmeras frontais e traseiras com peças originais." },
  { icon: Search, title: "Limpeza e Diagnóstico", desc: "Diagnóstico completo grátis. Orçamento sem compromisso." },
];

const Assistencia = () => {
  const ref = useScrollReveal();

  return (
    <section id="assistencia" ref={ref} className="py-24 relative" style={{ background: "hsl(var(--void))" }}>
      {/* Top and bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "hsl(var(--gold) / 0.15)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "hsl(var(--gold) / 0.15)" }} />

      <div className="container mx-auto px-5 lg:px-8">
        <p className="font-dm-mono text-[0.75rem] uppercase tracking-[0.1em] text-primary mb-3">Assistência Técnica</p>
        <h2 className="font-cormorant font-bold text-foreground text-[2.2rem] md:text-[3.2rem] tracking-[-0.02em] mb-14">
          Seu dispositivo em<br />boas mãos.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="p-6 rounded-lg border transition-all duration-300 animate-fade-slide-up"
              style={{
                background: "hsl(var(--surface))",
                borderColor: "hsl(var(--border))",
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                style={{ background: "hsl(var(--gold-glow))" }}
              >
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-outfit font-semibold text-foreground text-[1.1rem] mb-2">{s.title}</h3>
              <p className="font-outfit font-light text-[0.9rem]" style={{ color: "hsl(var(--white-40))" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-outfit font-semibold text-[0.95rem] px-9 py-[15px] rounded-sm bg-primary text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
          >
            Agendar Atendimento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Assistencia;
