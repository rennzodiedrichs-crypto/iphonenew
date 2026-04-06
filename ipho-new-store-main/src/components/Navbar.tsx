import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Celulares", href: "#celulares" },
  { label: "JBL", href: "#jbl" },
  { label: "Assistência", href: "#assistencia" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 animate-slide-down"
      style={{
        height: 68,
        background: scrolled ? "rgba(7,7,7,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[51]"
        style={{ scaleX }}
      />
      <div className="container mx-auto h-full flex items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-0">
          <span className="font-outfit font-semibold text-[1.3rem] tracking-[-0.01em] text-foreground">iPHO</span>
          <span className="font-outfit font-bold italic text-[1.3rem] text-primary">NEW</span>
          <span className="font-outfit font-light text-[0.85rem] ml-[3px] tracking-[0.08em] text-muted-foreground">STORE</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-outfit font-medium text-sm transition-colors duration-300 relative group"
              style={{ color: "hsl(var(--white-70))" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--gold))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--white-70))")}
            >
              {l.label}
              <span
                className="absolute bottom-[-4px] left-0 h-[1px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
              />
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center font-outfit font-semibold text-sm px-5 py-2 rounded-sm border transition-all duration-300"
            style={{ borderColor: "hsl(var(--gold))", color: "hsl(var(--gold))", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--gold))"; e.currentTarget.style.color = "hsl(var(--primary-foreground))"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "hsl(var(--gold))"; }}
          >
            WhatsApp
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 top-[68px] z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "hsl(var(--void))" }}
        >
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-outfit text-2xl font-semibold text-foreground animate-fade-slide-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5563930002112"
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit font-semibold text-lg px-8 py-3 border rounded-sm animate-fade-slide-up"
            style={{ borderColor: "hsl(var(--gold))", color: "hsl(var(--gold))", animationDelay: "400ms" }}
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
