import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

const focusAreas = [
  "Web & full-stack",
  "Interactive / XR",
  "Generative visuals",
  "AI & computer vision",
  "Physical / IoT",
  "Game dev",
];

const skillGroups = [
  { title: "Languages", skills: ["HTML / CSS", "JavaScript / TypeScript", "Python", "C++", "GLSL"] },
  { title: "Frameworks", skills: ["React", "Node.js", "Express", "p5.js", "Three.js", "TensorFlow"] },
  { title: "Tools", skills: ["VS Code", "Git", "Figma", "Blender", "Unreal Engine 5", "Arduino"] },
  { title: "Specialisms", skills: ["Generative Art", "Backend / APIs", "UI / UX", "Machine Learning", "3D", "XR"] },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <section className="container-wide relative">
          {/* Wobbly blob */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-4 md:right-16 w-56 h-56 md:w-80 md:h-80 bg-[hsl(var(--terracotta))]/90"
            style={{ animation: "blob 9s ease-in-out infinite" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/60 mb-6"
          >
            ✦ About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif leading-[0.95] max-w-5xl relative z-10"
          >
            Hey — I&apos;m{" "}
            <span className="inline-block text-[hsl(var(--terracotta))] wobble">Harrison.</span>
          </motion.h1>

          <div className="mt-16 md:mt-24 grid gap-16 md:grid-cols-12 relative z-10">
            <div className="md:col-span-7 md:col-start-2 space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
              <p>
                Halifax-based, studying Creative Computing at the University of Salford.
                I bounce between client websites, university research projects and small
                experimental builds that don&apos;t fit a brief.
              </p>
              <p>
                Mostly I care about how things <span className="font-serif text-[hsl(var(--terracotta))]">feel.</span>{" "}
                Clean interfaces, playful details, code that doesn&apos;t fight you back.
              </p>
            </div>
          </div>
        </section>

        <section className="container-wide mt-32 md:mt-48">
          <div className="grid gap-12 md:grid-cols-12">
            <h2 className="md:col-span-3 font-serif text-3xl md:text-4xl">Focus</h2>
            <ul className="md:col-span-9 divide-y divide-foreground/15 border-y border-foreground/15">
              {focusAreas.map((area, i) => (
                <motion.li
                  key={area}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="py-4 font-serif text-2xl md:text-3xl hover:text-[hsl(var(--terracotta))] hover:translate-x-2 transition-all duration-300 cursor-default"
                >
                  {area}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-wide mt-32 md:mt-48">
          <div className="grid gap-12 md:grid-cols-12">
            <h2 className="md:col-span-3 font-serif text-3xl md:text-4xl">Tools</h2>
            <div className="md:col-span-9 grid gap-12 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-serif text-2xl mb-4 text-[hsl(var(--terracotta))]">{g.title}</h3>
                  <ul className="space-y-1.5 text-base text-foreground/80 font-mono">
                    {g.skills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
};

export default About;
