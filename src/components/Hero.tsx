import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section pt-36 md:pt-48 pb-24 relative overflow-hidden">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground"
        >
          § Portfolio — Vol. 02 · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-5xl font-serif font-light leading-[0.95]"
        >
          Harrison <span className="serif-italic">Bottomley</span> — building
          <br className="hidden md:block" /> things that look good and{" "}
          <span className="serif-italic">work</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed"
        >
          Creative Computing student in Halifax. Web, XR, generative art,
          interaction design — a working archive of what I've shipped so far.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center gap-6"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-foreground"
          >
            <span className="relative">
              See the work
              <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground origin-left transition-transform duration-500 group-hover:scale-x-0" />
            </span>
            <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
