const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (id === "top") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-foreground/10 bg-card/40">
      <div className="container-wide py-10">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <p className="font-serif text-xl text-foreground">Harrison Bottomley</p>
            <p className="mt-1">Halifax, UK</p>
          </div>
          <nav className="flex gap-5 md:justify-center">
            <button onClick={() => scrollTo("top")} className="hover:text-primary transition-colors">Top</button>
            <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors">Work</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
          </nav>
          <div className="flex gap-5 md:justify-end">
            <a href="https://github.com/harrisonspurs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://instagram.com/harrison4_11" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="mailto:harrison11bottomley@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
        <p className="mt-8 border-t border-foreground/10 pt-5 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          © {year} Harrison Bottomley
        </p>
      </div>
    </footer>
  );
};

export default Footer;
