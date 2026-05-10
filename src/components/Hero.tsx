import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section pt-36 md:pt-44 pb-20">
      <div className="container-wide">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Portfolio
        </p>

        <h1 className="mt-6 max-w-5xl font-serif font-light">
          Harrison Bottomley
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-ink-soft">
          Creative Computing student in Halifax. I build web, XR and interactive projects.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button onClick={() => scrollTo("projects")} className="btn-ink">
            View projects
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-outline"
          >
            Contact
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {[
            { k: "Projects", v: "15" },
            { k: "Disciplines", v: "06" },
            { k: "Based", v: "Halifax" },
            { k: "Year", v: "2026" },
          ].map((item) => (
            <div key={item.k} className="bg-background p-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {item.k}
              </p>
              <p className="mt-2 font-serif text-2xl md:text-3xl font-light">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
