import { motion } from "framer-motion";

const About = () => {
  const focusAreas = [
    "Web & full-stack",
    "Interactive / XR",
    "Generative visuals",
    "AI & computer vision",
    "Physical / IoT",
    "Game dev",
  ];

  return (
    <section id="about" className="section border-t border-foreground/15">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">02 — Bio</p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light leading-[1.05] tracking-[-0.02em]"
            >
              Builder, tinkerer,
              <br />
              <span className="serif-italic text-[hsl(var(--terracotta))]">part-time artist.</span>
            </motion.h2>

            <div className="mt-14 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed text-lg max-w-2xl">
                <p>
                  I&apos;m based in Halifax and study Creative Computing at the University of Salford.
                  My work moves between client websites, university research projects and the kind of
                  small experimental builds that don&apos;t really fit a brief.
                </p>
                <p>
                  Mostly I care about how things <em className="serif-italic">feel</em>. Clean
                  interfaces, considered typography, code that doesn&apos;t fight you back. A bit of
                  texture, a bit of humour.
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-5">
                  ¶ Disciplines
                </p>
                <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
                  {focusAreas.map((area, i) => (
                    <motion.li
                      key={area}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="py-3 flex items-baseline gap-4 text-foreground/90"
                    >
                      <span className="font-mono text-[10px] text-muted-foreground w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl">{area}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
