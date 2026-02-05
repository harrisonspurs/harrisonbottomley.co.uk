import { ExternalLink, Github, ArrowUpRight, Cpu, Globe, Palette } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  details: string;
  tools: string[];
  outcome: string;
  link?: string;
  github?: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Web Design & Development",
    description: "Clean, functional websites built for businesses and personal brands.",
    details: "I design and develop websites that look professional and convert visitors into customers. Every site is built with performance, clarity, and usability in mind.",
    tools: ["HTML", "CSS", "JavaScript", "React", "VS Code", "GitHub"],
    outcome: "Websites that help businesses establish credibility and generate leads.",
    icon: <Globe className="h-6 w-6" />,
    featured: true,
  },
  {
    title: "Branding & Visual Identity",
    description: "Logo design, favicons, and colour systems for digital projects.",
    details: "I create simple but effective visual identities. This includes logos that work at any size, cohesive colour palettes, and favicon sets. The goal is always recognisability and clarity.",
    tools: ["Design principles", "Colour theory", "Typography"],
    outcome: "Brand assets that look professional and work consistently across web and print.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Physical Computing",
    description: "Hardware projects that connect to the web.",
    details: "I build sensor-based systems using Arduino that communicate with web interfaces. From occupancy detection to interactive installations — bridging the gap between physical and digital.",
    tools: ["Arduino", "Sensors", "JavaScript", "APIs"],
    outcome: "Connected systems that solve real problems.",
    github: "https://github.com/harrisonspurs",
    icon: <Cpu className="h-6 w-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
const Projects = () => {
  return (
    <section id="projects" className="section relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label">What I Do</span>
          <h2 className="mb-4">Services</h2>
          <p className="text-lg text-muted-foreground">
            From websites to physical computing — I enjoy building things that solve problems 
            and help people get things done.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.article 
              key={index} 
              variants={itemVariants}
              className={`project-card group ${project.featured ? 'ring-1 ring-accent/20' : ''}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon/Number Column */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    project.featured 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-secondary text-secondary-foreground group-hover:bg-accent group-hover:text-accent-foreground'
                  }`}>
                    {project.icon}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      {project.featured && (
                        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded mb-2">
                          Featured Project
                        </span>
                      )}
                      <h3 className="text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex gap-3 flex-shrink-0">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-4 w-4" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                          aria-label="View project"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="hidden sm:inline">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3 font-medium">
                    {project.description}
                  </p>
                  
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {project.details}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="skill-pill">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                    <ArrowUpRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-accent">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
