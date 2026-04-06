const footerLinks = ["Celulares", "JBL", "Assistência", "Acessórios", "Localização"];

const Footer = () => (
  <footer
    className="py-16 relative"
    style={{
      background: "hsl(var(--void))",
      borderTop: "1px solid hsl(var(--border))",
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}
  >
    <div className="container mx-auto px-5 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Logo + tagline */}
        <div>
          <a href="#inicio" className="inline-flex items-center mb-4">
            <span className="font-outfit font-semibold text-[1.3rem] text-foreground">iPHO</span>
            <span className="font-outfit font-bold italic text-[1.3rem] text-primary">NEW</span>
            <span className="font-outfit font-light text-[0.85rem] ml-[3px] tracking-[0.08em] text-muted-foreground">STORE</span>
          </a>
          <p className="font-outfit font-light text-sm" style={{ color: "hsl(var(--white-40))" }}>
            Qualidade, Garantia e Suporte Especializado em Palmas.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 md:justify-center md:items-start">
          {footerLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="font-outfit text-sm transition-colors duration-300"
              style={{ color: "hsl(var(--white-40))" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--gold))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--white-40))")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* WhatsApp + hours */}
        <div className="md:text-right">
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-outfit font-semibold text-sm px-5 py-2 rounded-sm border transition-all duration-300 mb-4"
            style={{ borderColor: "hsl(var(--gold))", color: "hsl(var(--gold))" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--gold))"; e.currentTarget.style.color = "hsl(var(--primary-foreground))"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "hsl(var(--gold))"; }}
          >
            WhatsApp
          </a>
          <p className="font-dm-mono text-[0.7rem]" style={{ color: "hsl(var(--white-40))" }}>
            Seg–Sex 9h–18h · Sáb 9h–13h
          </p>
        </div>
      </div>

      <div className="border-t pt-6" style={{ borderColor: "hsl(var(--border))" }}>
        <p className="font-dm-mono text-[0.65rem] text-center" style={{ color: "hsl(var(--white-10))" }}>
          © 2025 iPhoneNew Store · Palmas, Tocantins · Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
