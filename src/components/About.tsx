import { motion } from "framer-motion";

const About = () => {
  const focuses = [
    "AI & Machine Learning",
    "Full-Stack Web",
    "XR & Spatial Design",
    "Freelance Web Development",
    "Creative Coding",
    "Hardware / IoT",
  ];

  return (
    <section id="about" className="section relative">
      <div className="container-wide">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <p className="eyebrow">§ 03 — About</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-9 font-serif font-light"
          >
            A few words on <span className="serif-italic">who I am</span>, and what I'm trying to do.
          </motion.h2>
        </div>

        {/* Long-form */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 md:col-start-3 space-y-6 text-lg leading-relaxed text-ink-soft"
          >
            <p>
              <span className="float-left font-serif text-7xl leading-[0.8] mr-3 mt-1 text-[hsl(var(--terracotta))]">I</span>
              grew up in Middlesbrough and moved to Salford to study Creative Computing — a
              degree that, in practice, lets me jump between writing backend APIs one week
              and building XR scenes the next. I like that. The variety is the point.
            </p>
            <p>
              Most of my coursework lives at the messy intersection of code and design:
              generative art, machine-learning experiments, IoT prototypes, and the
              occasional Unreal Engine game shown to a public audience at MediaCityUK.
              I'd rather ship something honest and rough than nothing at all.
            </p>
            <p>
              Outside of university I run a small freelance practice building websites for
              local businesses — a record label, a haulage company, a vintage clothing
              wholesaler. It keeps me grounded in real briefs, real budgets, and real users.
            </p>
          </motion.div>
        </div>

        {/* Side-by-side meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 pt-10 border-t border-foreground/10 grid grid-cols-12 gap-4 md:gap-8"
        >
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-3">§ Based</p>
            <p className="font-serif text-xl">Middlesbrough <span className="serif-italic text-muted-foreground">/</span> Salford</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-3">§ Studying</p>
            <p className="font-serif text-xl">BSc Creative Computing</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">Salford · 2023 — 2026</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-3">§ Status</p>
            <p className="font-serif text-xl text-[hsl(var(--moss))]">
              Available
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-1">For freelance & collab</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-3">§ Year</p>
            <p className="font-serif text-xl">Second year</p>
          </div>
        </motion.div>

        {/* Focus list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-12 gap-4 md:gap-8"
        >
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">§ Working in</p>
          </div>
          <ul className="col-span-12 md:col-span-9 grid sm:grid-cols-2 gap-x-8 gap-y-1 font-serif text-2xl md:text-3xl">
            {focuses.map((f, i) => (
              <li key={f} className="border-b border-foreground/10 py-3 flex justify-between items-baseline">
                <span>{f}</span>
                <span className="text-[10px] font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
