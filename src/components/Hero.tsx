import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section pt-36 md:pt-44 pb-20">
      <div className="container-wide">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Creative Computing · University of Salford
        </p>

        <h1 className="mt-6 max-w-4xl font-serif font-light">
          Clean, useful digital work by a developer based in Halifax.
        </h1>

        <p className="mt-7 max-w-2xl text-base md:text-lg text-muted-foreground">
          I'm Harrison Bottomley. I design and build websites, interactive experiences and
          software projects across university, freelance briefs and personal experiments.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button onClick={() => scrollTo("projects")} className="btn-ink">
            View projects
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-outline">
            Contact me
          </button>
        </div>

        <div className="mt-14 grid gap-4 border-t border-foreground/10 pt-6 text-sm text-muted-foreground sm:grid-cols-3">
          <p>14+ projects shipped</p>
          <p>Web, XR, AI and backend work</p>
          <p>Available for freelance work</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
