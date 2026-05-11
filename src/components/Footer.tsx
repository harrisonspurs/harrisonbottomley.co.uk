const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/20 mt-12">
      {/* Massive type signature */}
      <div className="container-wide pt-16 pb-8">
        <p className="font-serif text-[18vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] font-light tracking-[-0.04em] text-foreground/90 select-none">
          Harrison
          <span className="serif-italic text-foreground/30"> Bottomley</span>
        </p>
      </div>

      <div className="container-wide pb-10 border-t border-foreground/15 pt-8">
        <div className="grid gap-6 md:grid-cols-12 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <div className="md:col-span-4">
            <p>Halifax · UK</p>
            <p className="mt-1">© {year} — All rights reserved</p>
          </div>
          <nav className="md:col-span-4 flex gap-6 md:justify-center">
            <button onClick={() => scrollTo("top")} className="hover:text-foreground transition-colors">↑ Top</button>
            <button onClick={() => scrollTo("projects")} className="hover:text-foreground transition-colors">Work</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-foreground transition-colors">Contact</button>
          </nav>
          <div className="md:col-span-4 flex gap-6 md:justify-end">
            <a href="https://github.com/harrisonspurs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GH</a>
            <a href="https://instagram.com/harrison4_11" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">IG</a>
            <a href="mailto:harrison11bottomley@gmail.com" className="hover:text-foreground transition-colors">Mail</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
