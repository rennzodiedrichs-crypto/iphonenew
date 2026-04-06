import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Location = () => {
  const ref = useScrollReveal();

  return (
    <section id="contato" ref={ref} className="py-24" style={{ background: "hsl(var(--void))" }}>
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6">
          {/* Info card */}
          <div className="rounded-lg border p-10" style={{ background: "hsl(var(--surface))", borderColor: "hsl(var(--border))" }}>
            <p className="font-dm-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary mb-6">Onde Estamos</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-outfit font-medium text-sm text-foreground">
                  Galeria Office, ACSE 1, Rua de Pedestre, SE 03, Lote 23, Sala 3 — Plano Diretor Sul, Palmas / TO
                </p>
              </div>

              <div className="h-px" style={{ background: "hsl(var(--border))" }} />

              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/5563930002112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit font-medium text-sm text-primary hover:underline"
                >
                  +55 63 9300-2112
                </a>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="font-outfit text-sm" style={{ color: "hsl(var(--white-40))" }}>
                  <p>Seg–Sex: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Galeria+Office,+ACSE+1,+SE+03,+Lote+23,+Sala+3,+Plano+Diretor+Sul,+Palmas,+Tocantins"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-outfit text-sm mt-8 px-6 py-3 rounded-sm border transition-all duration-300"
              style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--gold))" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--gold))"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; }}
            >
              Abrir no Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border" style={{ borderColor: "hsl(var(--border))" }}>
            <iframe
              title="Localização iPhoneNew Store"
              src="https://maps.google.com/maps?q=Galeria+Office,+ACSE+1,+SE+03,+Lote+23,+Sala+3,+Plano+Diretor+Sul,+Palmas,+Tocantins&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 420, border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
