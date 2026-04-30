import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    { label: "Index", id: "top", num: "01" },
    { label: "Work", id: "projects", num: "02" },
    { label: "About", id: "about", num: "03" },
    { label: "Services", id: "services", num: "04" },
    { label: "Contact", id: "contact", num: "05" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-foreground/10" : "bg-transparent"
      }`}
    >
      <div className="container-wide py-5 flex items-center justify-between">
        <button onClick={() => scrollToSection("top")} className="text-left group">
          <p className="font-serif text-lg leading-none">Harrison <span className="serif-italic">Bottomley</span></p>
          <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground mt-1">
            Creative Computing · Salford
          </p>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-baseline gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              <span className="text-[10px] font-mono text-muted-foreground/60 group-hover:text-[hsl(var(--terracotta))] transition-colors">
                {item.num}
              </span>
              <span className="tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-foreground/10 overflow-hidden"
          >
            <nav className="container-wide py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-baseline gap-3 text-left"
                >
                  <span className="text-[10px] font-mono text-muted-foreground">{item.num}</span>
                  <span className="font-serif text-2xl">{item.label}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
