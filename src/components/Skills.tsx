import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SkillGroup {
  title: string;
  gradient: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    gradient: "from-[#a855f7] to-[#6366f1]",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 70 },
      { name: "GLSL", level: 60 },
    ],
  },
  {
    title: "Tools",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Blender", level: 70 },
      { name: "Unreal Engine", level: 65 },
    ],
  },
  {
    title: "Frameworks",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "p5.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Three.js", level: 70 },
      { name: "TensorFlow", level: 65 },
    ],
  },
  {
    title: "Creative & Specialisations",
    gradient: "from-[#ec4899] to-[#a855f7]",
    skills: [
      { name: "Generative Art", level: 80 },
      { name: "Backend Development", level: 80 },
      { name: "UI/UX Design", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "3D Modelling", level: 70 },
      { name: "XR Development", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, gradient, delay }: { name: string; level: number; gradient: string; delay: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
        <span className="text-sm font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className={`progress-fill bg-gradient-to-r ${gradient}`}
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow: visible ? `0 0 12px hsl(var(--blue) / 0.3)` : "none",
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple/5 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Capabilities</span>
          <h2 className="mb-4">Technical Proficiency</h2>
          <p className="text-lg text-muted-foreground">
            Skills developed through coursework and professional projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold mb-6 text-foreground">{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    gradient={group.gradient}
                    delay={si * 100}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
