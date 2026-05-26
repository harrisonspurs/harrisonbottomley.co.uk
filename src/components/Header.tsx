import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goWork = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#projects");
      return;
    }
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md" : ""
      }`}
    >
      <div className="container-wide py-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-base tracking-tight">
          Harrison Bottomley
        </Link>

        <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-foreground/70">
          <a href="/#projects" onClick={goWork} className="hover:text-foreground transition-colors">
            Work
          </a>
          <Link to="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
