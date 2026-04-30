const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/10 bg-paper-deep">
      <div className="container-wide py-16 md:py-24">
        {/* Big colophon */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow mb-4">§ Colophon</p>
            <p className="font-serif text-3xl md:text-5xl font-light leading-tight">
              Set in <span className="serif-italic">Fraunces</span> &amp; Inter. Built in
              React with care, by hand, in <span className="serif-italic">Salford</span>.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right text-sm text-ink-soft space-y-2">
            <p>Harrison Bottomley</p>
            <p>Middlesbrough / Salford, UK</p>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground pt-2">
              MMXXVI · Vol. 01
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-foreground/10 pt-6 grid grid-cols-12 gap-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
          <p className="col-span-12 md:col-span-4">© {year} Harrison Bottomley</p>
          <nav className="col-span-12 md:col-span-4 flex gap-5 md:justify-center">
            <button onClick={() => scrollTo("top")} className="hover:text-foreground transition-colors">Top</button>
            <button onClick={() => scrollTo("projects")} className="hover:text-foreground transition-colors">Work</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-foreground transition-colors">Contact</button>
          </nav>
          <div className="col-span-12 md:col-span-4 flex gap-5 md:justify-end">
            <a href="https://github.com/harrisonspurs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://instagram.com/harrison4_11" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="mailto:harrison11bottomley@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
