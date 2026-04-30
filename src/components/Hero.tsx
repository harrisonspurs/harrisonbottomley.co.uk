import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 overflow-hidden">
      <div className="container-wide relative">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12 md:mb-20 text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground"
        >
          <p>Vol. 01 — 2026</p>
          <p className="hidden sm:block">Middlesbrough · Salford · UK</p>
        </motion.div>

        {/* Editorial headline — asymmetric, broken across lines */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-10 font-serif font-light"
          >
            <span className="block">A second-year</span>
            <span className="block pl-[8%] md:pl-[18%]">
              <span className="serif-italic text-[hsl(var(--terracotta))]">creative</span> coder,
            </span>
            <span className="block">building things</span>
            <span className="block pl-[12%] md:pl-[28%]">
              that <span className="serif-italic">work</span>.
            </span>
          </motion.h1>
        </div>

        {/* Sub-paragraph + meta */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-12 md:col-span-5 md:col-start-2"
          >
            <p className="eyebrow mb-4">§ Introduction</p>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed">
              I'm Harrison. I study Creative Computing at the University of Salford —
              splitting my time between AI experiments, full-stack apps, XR sketches and
              the occasional Unreal Engine project. On weekends I build websites for small
              businesses around the North West.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:text-right space-y-6"
          >
            <div>
              <p className="eyebrow justify-end">§ Currently</p>
              <p className="font-serif text-xl mt-2 leading-snug">
                Open to <span className="serif-italic">freelance</span> & collaborative work.
              </p>
            </div>
            <div className="flex md:justify-end gap-3 pt-2">
              <button onClick={() => scrollTo("projects")} className="btn-ink">
                See the work
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-outline">
                Say hello
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom hairline + scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 pt-6 border-t border-foreground/10 flex justify-between items-center text-[10px] uppercase tracking-[0.25em] font-mono text-muted-foreground"
        >
          <span>Scroll</span>
          <span>10+ Projects · 3 Live Clients</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
