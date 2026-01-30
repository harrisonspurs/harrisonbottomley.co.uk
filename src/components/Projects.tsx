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
    title: "Bathroom Occupancy Detector",
    description: "A hardware-software system that displays live bathroom occupancy status on a custom website.",
    details: "Built using an Arduino UNO R4 WiFi with sensors to detect occupancy. The system communicates with a web interface that shows real-time status — useful for shared spaces where you'd rather not knock on doors.",
    tools: ["Arduino UNO R4 WiFi", "Sensors", "HTML", "CSS", "JavaScript"],
    outcome: "Demonstrates practical IoT problem-solving: hardware integration, real-time data, and a clean user interface.",
    github: "https://github.com/harrisonspurs",
    icon: <Cpu className="h-6 w-6" />,
    featured: true,
  },
  {
    title: "Personal & Client Websites",
    description: "Clean, functional websites built for real use — not just portfolio pieces.",
    details: "I've developed websites for personal projects and small clients, focusing on clear layouts, good typography, and fast load times. Each site is hand-coded using HTML, CSS, and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript", "VS Code", "GitHub"],
    outcome: "Every project ships. These aren't design concepts — they're working websites that people actually use.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Branding & Visual Identity",
    description: "Logo design, favicons, and colour systems for digital projects.",
    details: "I create simple but effective visual identities. This includes logos that work at any size, cohesive colour palettes, and favicon sets. The goal is always recognisability and clarity.",
    tools: ["Design principles", "Colour theory", "Typography"],
    outcome: "Brand assets that look professional and work consistently across web and print.",
    icon: <Palette className="h-6 w-6" />,
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
          <span className="section-label">Portfolio</span>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Real work, completed and shipped. No placeholders or concept-only projects — 
            these are things I've actually built.
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
