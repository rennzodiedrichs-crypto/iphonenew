import { useEffect, useRef, useState } from "react";

const counters = [
  { value: 500, suffix: "+", label: "Clientes Atendidos" },
  { value: 100, suffix: "%", label: "Garantia nos Produtos" },
  { value: 5, suffix: "★", label: "Avaliação no Google" },
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
      <p className="font-cormorant font-bold text-[3rem] md:text-[4rem] text-primary leading-none">
        {count}{suffix}
      </p>
      <p className="font-outfit font-light text-[0.9rem] mt-3" style={{ color: "hsl(var(--white-40))" }}>
        {label}
      </p>
    </div>
  );
};

const SocialProof = () => (
  <section className="py-24" style={{ background: "hsl(var(--void))" }}>
    <div className="container mx-auto px-5 lg:px-8">
      <div className="flex flex-wrap justify-center items-center gap-0">
        {counters.map((c, i) => (
          <div key={c.label} className="flex items-center">
            <AnimatedCounter target={c.value} suffix={c.suffix} label={c.label} />
            {i < counters.length - 1 && (
              <div className="hidden md:block w-px h-16 mx-4" style={{ background: "hsl(var(--gold) / 0.2)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
