import { Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border bg-card/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-semibold text-xs">
              HB
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Harrison Bottomley
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/harrisonspurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/harrison4_11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
