import { motion } from "framer-motion";
import { Code, Palette, Cpu, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Web & Development",
    description: "Building clean, functional websites",
    icon: <Code className="h-6 w-6" />,
    skills: ["HTML", "CSS", "JavaScript", "VS Code", "GitHub", "Responsive Design"],
  },
  {
    title: "Design",
    description: "Creating cohesive visual identities",
    icon: <Palette className="h-6 w-6" />,
    skills: ["Branding", "Visual Hierarchy", "Logo Design", "Favicon Design", "Colour Systems", "Typography"],
  },
  {
    title: "Hardware & Systems",
    description: "Connecting physical to digital",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Arduino", "Sensors", "Physical Computing", "IoT", "Web-Connected Devices"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">Capabilities</span>
          <h2 className="mb-4">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground">
            What I work with regularly. No exaggeration — these are tools I actually use 
            to build real projects.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card p-6 h-full transition-all duration-300 hover:border-accent/30">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {category.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                
                <ul className="space-y-2.5">
                  {category.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className="text-muted-foreground flex items-center gap-2.5 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
