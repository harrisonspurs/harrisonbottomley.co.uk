import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Index", id: "projects", num: "01" },
    { label: "Bio", id: "about", num: "02" },
    { label: "Stack", id: "skills", num: "03" },
    { label: "Contact", id: "contact", num: "04" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-foreground/10" : ""
      }`}
    >
      <div className="container-wide py-5 flex items-center justify-between gap-8">
        <button onClick={() => scrollToSection("top")} className="text-left flex items-center gap-3 group">
          <span className="inline-flex h-7 w-7 items-center justify-center border border-foreground text-[11px] font-mono font-medium tracking-tight">
            HB
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-base">Harrison Bottomley</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground mt-1">
              Est. Halifax
            </span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-baseline gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-[9px] text-foreground/40 group-hover:text-foreground/70">{item.num}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-foreground/10">
          <nav className="container-wide py-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-2 font-serif text-2xl"
              >
                <span className="text-xs font-mono text-muted-foreground mr-3">{item.num}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
