import { useState } from "react";
import { ExternalLink, Github, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCategory = "all" | "client" | "university" | "in-progress";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  badge: string;
  badgeColor: string;
  category: ProjectCategory[];
  link?: string;
  github?: string;
  status?: string;
  placeholder?: boolean;
}

const projects: Project[] = [
  // Client work
  {
    title: "HBottomley Ltd",
    subtitle: "Mechanic Repairs & Haulage Company",
    description: "Professional website for a local haulage and mechanics business, featuring services overview, contact information, and company details.",
    tech: ["HTML/CSS", "JavaScript", "React", "Lovable"],
    badge: "CLIENT WORK",
    badgeColor: "bg-blue/20 text-blue",
    category: ["client"],
    link: "https://hbottomleyltd.lovable.app/",
  },
  {
    title: "Top Frog Records",
    subtitle: "Independent Record Label",
    description: "Minimal black and white website for an independent record label, directing visitors to Discogs and contact information.",
    tech: ["HTML/CSS", "JavaScript", "React", "Lovable"],
    badge: "CLIENT WORK",
    badgeColor: "bg-blue/20 text-blue",
    category: ["client"],
    link: "https://topfrogrecords.lovable.app/",
  },
  {
    title: "The Wearhouse Company",
    subtitle: "Clothing Sales Business",
    description: "E-commerce focused website for a clothing sales business with product showcase and contact features.",
    tech: ["HTML/CSS", "JavaScript", "React", "Lovable"],
    badge: "CLIENT WORK",
    badgeColor: "bg-blue/20 text-blue",
    category: ["client"],
    link: "https://thewearhousecompany.lovable.app/",
  },
  // University - Completed
  {
    title: "Backend Development Projects",
    subtitle: "Server-Side Programming & APIs",
    description: "Collection of backend projects focusing on server architecture, databases, and API development. Coursework includes REST APIs, authentication systems, and database design.",
    tech: ["Node.js", "Python", "MongoDB", "Express.js", "PostgreSQL"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Generative Art Portfolio",
    subtitle: "Algorithmic & Computational Art",
    description: "Creative coding projects exploring generative algorithms, visual patterns, and artistic programming. Includes parametric design and procedural generation.",
    tech: ["p5.js", "JavaScript", "Processing", "Three.js", "GLSL"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Interaction Design & IoT",
    subtitle: "Physical Computing Projects",
    description: "Internet of Things projects combining hardware and software for interactive experiences. Sensor integration and embedded systems programming.",
    tech: ["Arduino", "Python", "JavaScript", "Sensors", "MQTT"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Creative Coding Foundations",
    subtitle: "Programming for Creative Expression",
    description: "Foundational projects exploring creative applications of programming and computational thinking. Interactive visuals and generative systems.",
    tech: ["JavaScript", "p5.js", "HTML/CSS", "Canvas API"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Web Technologies Projects",
    subtitle: "Introduction to Web Development",
    description: "Early web development projects covering HTML, CSS, JavaScript fundamentals and responsive design principles.",
    tech: ["HTML/CSS", "JavaScript", "Git", "Responsive Design"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Mathematical Practice Projects",
    subtitle: "Computational Mathematics",
    description: "Projects applying mathematical concepts through programming and computational methods. Algorithms, data structures, and mathematical modeling.",
    tech: ["Python", "JavaScript", "NumPy", "Matplotlib"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Maths for Computing",
    subtitle: "Applied Mathematics in CS",
    description: "Mathematical foundations for computer science including linear algebra, calculus, and discrete mathematics applied to programming problems.",
    tech: ["Python", "NumPy", "Mathematical Analysis"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  {
    title: "Creative Collaboration",
    subtitle: "Team-Based Creative Projects",
    description: "Collaborative projects focusing on teamwork, agile methodologies, and interdisciplinary creative work.",
    tech: ["Git", "Agile", "Collaboration Tools"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    placeholder: true,
  },
  // In Progress
  {
    title: "Artificial Intelligence",
    subtitle: "Machine Learning & AI Development",
    description: "Currently studying machine learning algorithms, neural networks, and AI applications. Projects include supervised/unsupervised learning and deep learning implementations.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Keras", "NumPy"],
    badge: "IN PROGRESS",
    badgeColor: "bg-orange/20 text-orange",
    category: ["university", "in-progress"],
    status: "In Progress — Year 2, 2025",
  },
  {
    title: "Full-Stack Development",
    subtitle: "End-to-End Web Applications",
    description: "Building complete web applications from frontend to backend, databases to deployment. Focus on modern frameworks and cloud deployment.",
    tech: ["React", "Node.js", "MongoDB", "Express", "PostgreSQL", "AWS"],
    badge: "IN PROGRESS",
    badgeColor: "bg-orange/20 text-orange",
    category: ["university", "in-progress"],
    status: "In Progress — Year 2, 2025",
  },
  {
    title: "XR Design",
    subtitle: "Extended Reality Experiences",
    description: "Exploring VR, AR, and mixed reality development using modern XR frameworks. Creating immersive 3D experiences and spatial computing applications.",
    tech: ["Three.js", "Unreal Engine", "Blender", "WebXR", "Unity"],
    badge: "IN PROGRESS",
    badgeColor: "bg-orange/20 text-orange",
    category: ["university", "in-progress"],
    status: "In Progress — Year 2, 2025",
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Client Work", value: "client" },
  { label: "University Projects", value: "university" },
  { label: "In Progress", value: "in-progress" },
];

const Projects = () => {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue/5 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="mb-4">All Projects</h2>
          <p className="text-lg text-muted-foreground">
            A collection of client web development work and university creative computing projects 
            from my time at the University of Salford.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                active === f.value
                  ? "bg-gradient-to-r from-blue to-purple text-white"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="project-card group flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-secondary/50 border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="text-muted-foreground/30 text-xs font-mono">
                  {project.placeholder ? "Coming Soon" : "Screenshot"}
                </div>
                {/* Badge */}
                <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-pill text-[10px]">{t}</span>
                  ))}
                </div>

                {/* Status */}
                {project.status && (
                  <div className="flex items-center gap-2 text-xs text-orange mb-4">
                    <Clock className="h-3 w-3" />
                    {project.status}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 mt-auto pt-3 border-t border-border/50">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-blue hover:text-blue/80 font-medium transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Live Site
                    </a>
                  ) : project.placeholder ? (
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      Details Coming Soon
                    </span>
                  ) : project.status ? (
                    <span className="text-sm text-muted-foreground">Coming Soon</span>
                  ) : null}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">No projects found for this category.</p>
            <button onClick={() => setActive("all")} className="text-blue text-sm hover:underline">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
