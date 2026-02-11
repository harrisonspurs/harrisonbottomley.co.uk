import { Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Home", id: "top" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/harrisonspurs", label: "GitHub" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/harrison4_11", label: "Instagram" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:harrison11bottomley@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-[hsl(0_0%_6%)]">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue to-pink flex items-center justify-center font-bold text-xs text-white">
                HB
              </div>
              <span className="font-semibold text-foreground">Harrison Bottomley</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Creative Computing Student & Web Developer
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-blue hover:bg-blue/10 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Harrison Bottomley. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Middlesbrough / Salford, UK · Built with React & passion for code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
