import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string;
  tools: string[];
  outcome: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Bathroom Occupancy Detector",
    description: "A hardware-software system that displays live bathroom occupancy status on a custom website.",
    details: "Built using an Arduino UNO R4 WiFi with sensors to detect occupancy. The system communicates with a web interface that shows real-time status — useful for shared spaces where you'd rather not knock on doors.",
    tools: ["Arduino UNO R4 WiFi", "Sensors", "HTML", "CSS", "JavaScript"],
    outcome: "Demonstrates practical IoT problem-solving: hardware integration, real-time data, and a clean user interface.",
    github: "https://github.com/harrisonspurs",
  },
  {
    title: "Personal & Client Websites",
    description: "Clean, functional websites built for real use — not just portfolio pieces.",
    details: "I've developed websites for personal projects and small clients, focusing on clear layouts, good typography, and fast load times. Each site is hand-coded using HTML, CSS, and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript", "VS Code", "GitHub"],
    outcome: "Every project ships. These aren't design concepts — they're working websites that people actually use.",
  },
  {
    title: "Branding & Visual Identity",
    description: "Logo design, favicons, and colour systems for digital projects.",
    details: "I create simple but effective visual identities. This includes logos that work at any size, cohesive colour palettes, and favicon sets. The goal is always recognisability and clarity.",
    tools: ["Design principles", "Colour theory", "Typography"],
    outcome: "Brand assets that look professional and work consistently across web and print.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <div className="container-narrow mb-12 px-0">
          <h2 className="mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Real work, completed and shipped. No placeholders or concept-only projects.
          </p>
        </div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <h3 className="text-foreground">{project.title}</h3>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <p className="text-muted-foreground mb-4">
                {project.details}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <p className="text-sm text-accent">
                {project.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
