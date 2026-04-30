import { motion } from "framer-motion";

interface SkillGroup {
  title: string;
  num: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    num: "01",
    skills: ["HTML / CSS", "JavaScript / TypeScript", "Python", "C++", "GLSL"],
  },
  {
    title: "Frameworks",
    num: "02",
    skills: ["React", "Node.js", "Express", "p5.js", "Three.js", "TensorFlow"],
  },
  {
    title: "Tools",
    num: "03",
    skills: ["VS Code", "Git / GitHub", "Figma", "Blender", "Unreal Engine 5", "Arduino"],
  },
  {
    title: "Specialisms",
    num: "04",
    skills: ["Generative Art", "Backend / APIs", "UI / UX", "Machine Learning", "3D Modelling", "XR Development"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section relative">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <p className="eyebrow">§ Capabilities</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-9 font-serif font-light"
          >
            What I work <span className="serif-italic">with</span>.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-10 border-t border-foreground/10 pt-10">
          {skillGroups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="space-y-4"
            >
              <div className="flex items-baseline gap-3 pb-3 border-b border-foreground/10">
                <span className="text-[10px] font-mono text-muted-foreground">{g.num}</span>
                <h3 className="font-serif text-xl">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.skills.map((s) => (
                  <li key={s} className="text-sm text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
