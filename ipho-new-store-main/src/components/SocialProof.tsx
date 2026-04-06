import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ricardo Santos",
    text: "Atendimento impecável! Comprei meu iPhone 16 Pro Max e a entrega foi super rápida aqui em Palmas. Recomendo demais pela confiança.",
    rating: 5,
    date: "Há 2 dias",
  },
  {
    name: "Juliana Mendes",
    text: "Minha JBL Go 4 é original e o som é absurdo. O pessoal da iPHONEW entende muito de tecnologia e me ajudou na escolha perfeita.",
    rating: 5,
    date: "Há 1 semana",
  },
  {
    name: "Marcos Oliveira",
    text: "Levei meu iPhone para trocar a bateria e o serviço foi feito na hora. Preço justo e peças de qualidade. Melhor assistência da cidade.",
    rating: 5,
    date: "Há 2 semanas",
  },
  {
    name: "Ana Paula Silva",
    text: "Aparelhos seminovos com cara de novos! Comprei um iPhone 13 impecável com 100% de bateria. Estão de parabéns pelo critério.",
    rating: 5,
    date: "Há 1 mês",
  },
];

const counters = [
  { value: 500, suffix: "+", label: "Clientes Atendidos" },
  { value: 100, suffix: "%", label: "Garantia nos Produtos" },
  { value: 4.7, suffix: "★", label: "Avaliação no Google" },
  { value: 3, suffix: "", label: "Anos em Palmas" },
];

const AnimatedCounter = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        // For decimal values like 4.7, animate to floor and show static
        if (!Number.isInteger(target)) {
          setCount(target);
          return;
        }
        const duration = 1500;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center px-6">
      <p className="font-cormorant font-bold text-[2.5rem] md:text-[3rem] text-primary leading-none">
        {Number.isInteger(target) ? count : target}{suffix}
      </p>
      <p className="font-outfit font-light text-[0.9rem] mt-2 opacity-40 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

const SocialProof = () => (
  <section className="py-24 relative overflow-hidden" style={{ background: "hsl(var(--void))" }}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px]" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.1), transparent)" }} />
    
    <div className="container mx-auto px-5 lg:px-8">
      <div className="text-center mb-16">
        <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />
        <h2 className="font-cormorant font-bold text-foreground text-[2.5rem] md:text-[3.5rem] tracking-[-0.02em]">
          O que dizem os nossos clientes
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mb-24">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <div className="bg-surface-2 border border-border rounded-xl p-8 h-full relative overflow-hidden group hover:border-gold/30 transition-colors duration-500">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating).keys()].map((s) => (
                        <Star key={s} size={16} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="font-outfit font-light text-[1.1rem] leading-relaxed text-white/80 mb-6 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center font-outfit font-bold text-gold border border-gold/20">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-outfit font-semibold text-base text-foreground">{t.name}</h4>
                        <p className="text-[0.8rem] text-white/30 uppercase tracking-wider">{t.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0 bg-transparent border-white/10 hover:border-gold hover:text-gold transition-all" />
            <CarouselNext className="static translate-y-0 bg-transparent border-white/10 hover:border-gold hover:text-gold transition-all" />
          </div>
        </Carousel>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-y-12">
        {counters.map((c, i) => (
          <div key={c.label} className="flex items-center">
            <AnimatedCounter target={c.value} suffix={c.suffix} label={c.label} />
            {i < counters.length - 1 && (
              <div className="hidden lg:block w-px h-12 mx-4 bg-white/5" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
