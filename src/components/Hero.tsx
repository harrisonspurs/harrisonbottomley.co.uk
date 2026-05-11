import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const meta = [
    { k: "Index", v: "01 / 04" },
    { k: "Discipline", v: "Creative dev" },
    { k: "Based", v: "Halifax · UK" },
    { k: "Year", v: "MMXXVI" },
  ];

  return (
    <section className="relative pt-36 md:pt-44 pb-16 overflow-hidden">
      <div className="container-wide">
        {/* Top meta strip */}
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground border-b border-foreground/15 pb-4">
          <span>§ Portfolio — Vol. 04</span>
          <span className="hidden sm:inline">No. 2026 / 01</span>
          <span>Halifax ↗ Worldwide</span>
        </div>

        {/* Hero type */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-2 hidden md:flex flex-col gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground pt-3">
            <span>Creative</span>
            <span>Developer</span>
            <span>·</span>
            <span>Digital</span>
            <span>Artist</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light leading-[0.92] tracking-[-0.035em]"
            >
              Harrison
              <br />
              <span className="serif-italic text-[hsl(var(--terracotta))]">Bottomley</span>
              <span className="text-foreground/30">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Sub */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-4 md:gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 md:col-span-5 md:col-start-3 text-base md:text-lg text-foreground/80 leading-relaxed max-w-md"
          >
            I make websites, interactive tools and generative things from a small studio in Halifax. Part developer, part digital artist — always building.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-3"
          >
            <button onClick={() => scrollTo("projects")} className="btn-ink justify-between">
              <span>See the work</span>
              <ArrowDown className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-outline justify-between">
              <span>Get in touch</span>
              <span>↗</span>
            </button>
          </motion.div>
        </div>

        {/* Meta row */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-foreground/15">
          {meta.map((m, i) => (
            <div
              key={m.k}
              className={`py-5 ${i !== 0 ? "md:border-l border-foreground/15 md:pl-6" : ""}`}
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                {m.k}
              </p>
              <p className="mt-2 font-serif text-xl md:text-2xl font-light tracking-tight">
                {m.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 md:mt-28 border-y border-foreground/15 py-5 overflow-hidden">
        <div className="marquee font-serif text-3xl md:text-5xl font-light italic">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              {[
                "Web ✦",
                "XR ✦",
                "Generative ✦",
                "Interactive ✦",
                "AI ✦",
                "Sound ✦",
                "Physical ✦",
                "Game dev ✦",
              ].map((w) => (
                <span key={w + k} className="text-foreground/85">{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
