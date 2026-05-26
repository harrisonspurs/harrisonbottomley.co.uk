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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <section className="container-wide">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light leading-[0.95] tracking-[-0.03em] max-w-5xl"
          >
            Builder, tinkerer, <span className="serif-italic">part-time artist.</span>
          </motion.h1>

          <div className="mt-20 md:mt-28 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7 md:col-start-2 space-y-6 text-lg text-foreground/85 leading-relaxed max-w-2xl">
              <p>
                I&apos;m based in Halifax and study Creative Computing at the University of Salford.
                My work moves between client websites, university research projects and small
                experimental builds that don&apos;t fit a brief.
              </p>
              <p>
                Mostly I care about how things <em className="serif-italic">feel</em>. Clean
                interfaces, considered typography, code that doesn&apos;t fight you back.
              </p>
            </div>
          </div>
        </section>

        <section className="container-wide mt-32 md:mt-48">
          <div className="grid gap-12 md:grid-cols-12">
            <h2 className="md:col-span-3 font-serif text-2xl md:text-3xl font-light">Focus</h2>
            <ul className="md:col-span-9 divide-y divide-foreground/15 border-y border-foreground/15">
              {focusAreas.map((area) => (
                <li key={area} className="py-4 font-serif text-xl md:text-2xl font-light">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-wide mt-32 md:mt-48">
          <div className="grid gap-12 md:grid-cols-12">
            <h2 className="md:col-span-3 font-serif text-2xl md:text-3xl font-light">Tools</h2>
            <div className="md:col-span-9 grid gap-12 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-serif text-xl font-light mb-4">{g.title}</h3>
                  <ul className="space-y-1.5 text-sm text-foreground/75">
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
