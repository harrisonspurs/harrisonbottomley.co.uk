import { motion } from "framer-motion";

const About = () => {
  const focusAreas = [
    "Web & full-stack",
    "Interactive & XR",
    "Generative / creative coding",
    "AI & computer vision",
    "Physical computing & IoT",
    "Game development",
  ];

  return (
    <section id="about" className="section border-t border-foreground/10">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              § About
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-9"
          >
            <h2 className="font-serif font-light leading-tight">
              I'm a Creative Computing student at the{" "}
              <span className="serif-italic">University of Salford</span>,
              working across the line where code meets design.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  My work moves between web, XR, generative visuals, AI and
                  hardware — wherever an idea pulls me. This site is the archive.
                </p>
                <p>
                  I care about craft. Things that load fast, read well, and feel
                  like a person made them. Less polish-for-polish-sake, more
                  intent.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
                {focusAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-background p-4 text-sm text-foreground/90"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground mr-2">
                      0{i + 1}
                    </span>
                    {area}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
