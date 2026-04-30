import { useState } from "react";
import { ExternalLink, Github, FileText, Clock, ArrowRight, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import backendImg from "@/assets/backend_development.png";
import creativeCollabImg from "@/assets/creative_collab.png";
import iotImg from "@/assets/internet_of_things.png";
import lightwavesImg from "@/assets/lightwaves_event.png";
import mathPracticeImg from "@/assets/mathematical_practice.png";
import mathsComputingImg from "@/assets/maths_for_computing.png";
import xrDesignImg from "@/assets/xr_design.png";
import fullstackImg from "@/assets/fullstack_development.png";
import aiStudyImg from "@/assets/ai_study_tracking.png";

type ProjectCategory = "all" | "client" | "university" | "in-progress";

interface ProjectButton {
  label: string;
  href?: string;
  icon: "live" | "code" | "docs" | "gallery";
  disabled?: boolean;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  badge: string;
  badgeColor: string;
  category: ProjectCategory[];
  status?: string;
  image?: string;
  buttons: ProjectButton[];
  featured?: boolean;
  stateBadge?: "live" | "in-development" | "coming-soon";
}

const projects: Project[] = [
  // ── CLIENT WORK ───────────────────────────────────────────────────────────
  {
    title: "HBottomley Ltd",
    subtitle: "Mechanic Repairs & Haulage Company",
    description:
      "Professional website for a local haulage and mechanics business, featuring services overview, contact information, and company details.",
    tech: ["HTML/CSS", "JavaScript", "React", "Lovable"],
    badge: "CLIENT WORK",
    badgeColor: "bg-blue/20 text-blue",
    category: ["client"],
    image: "/hbottomley.png",
    stateBadge: "live",
    buttons: [
      { label: "View Live Site", href: "https://hbottomleyltd.lovable.app/", icon: "live" },
      { label: "View Code", icon: "code", disabled: true },
    ],
  },
  {
    title: "Top Frog Records",
    subtitle: "Independent Record Label",
    description:
      "Minimal black and white website for an independent record label, directing visitors to Discogs and contact information.",
    tech: ["HTML/CSS", "JavaScript", "React", "Lovable"],
    badge: "CLIENT WORK",
    badgeColor: "bg-blue/20 text-blue",
    category: ["client"],
    image: "/topfrog.png",
    stateBadge: "live",
    buttons: [
      { label: "View Live Site", href: "https://topfrogrecords.lovable.app/", icon: "live" },
      { label: "View Code", icon: "code", disabled: true },
    ],
  },
  {
    title: "The Wearhouse Company",
    subtitle: "Clothing Sales Business",
    description:
      "E-commerce focused website for a clothing sales business with product showcase and contact features.",
    tech: ["HTML/CSS", "JavaScript", "React", "Lovable"],
    badge: "CLIENT WORK",
    badgeColor: "bg-blue/20 text-blue",
    category: ["client"],
    image: "/wearhouse.png",
    stateBadge: "live",
    buttons: [
      { label: "View Live Site", href: "https://thewearhousecompany.lovable.app/", icon: "live" },
      { label: "View Code", icon: "code", disabled: true },
    ],
  },
  // ── UNIVERSITY – COMPLETED ─────────────────────────────────────────────────
  {
    title: "Backend Development Projects",
    subtitle: "Server-Side Programming & APIs",
    description:
      "Collection of backend projects focusing on server architecture, databases, and API development. Coursework includes REST APIs, authentication systems, and database design.",
    tech: ["Node.js", "Python", "MongoDB", "Express.js", "PostgreSQL"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: backendImg,
    stateBadge: "live",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/backend_development.pdf", icon: "docs" },
    ],
  },
  // ── CREATIVE COLLAB (Featured – 5th position) ──────────────────────────────
  {
    title: "Creative Collaboration — Media City Light Waves",
    subtitle: "Interactive Game Installation · Public Exhibition",
    description:
      "Showcased an original Unreal Engine game at the Media City Light Waves public event as part of the Creative Collaboration module. Interactive installation attracting hundreds of visitors and demonstrating real-world application of game design skills.",
    tech: ["Unreal Engine", "Game Design", "Blueprint Scripting", "Event Production"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: lightwavesImg,
    featured: true,
    stateBadge: "live",
    buttons: [
      { label: "View Event Gallery", href: "/projects/media-city-light-waves", icon: "gallery" },
      { label: "View Code", icon: "code", disabled: true },
      { label: "View Documentation", icon: "docs", disabled: true },
    ],
  },
  {
    title: "Interaction Design & IoT",
    subtitle: "Physical Computing Projects",
    description:
      "Internet of Things projects combining hardware and software for interactive experiences. Sensor integration and embedded systems programming.",
    tech: ["Arduino", "Python", "JavaScript", "Sensors", "MQTT"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: iotImg,
    stateBadge: "live",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/iot_documentation.pdf", icon: "docs" },
    ],
  },
  {
    title: "Mathematical Practice Projects",
    subtitle: "Computational Mathematics",
    description:
      "Projects applying mathematical concepts through programming and computational methods. Algorithms, data structures, and mathematical modeling.",
    tech: ["Python", "JavaScript", "NumPy", "Matplotlib"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: mathPracticeImg,
    stateBadge: "live",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/mathematical_practice.pdf", icon: "docs" },
    ],
  },
  {
    title: "Maths for Computing",
    subtitle: "Applied Mathematics in CS",
    description:
      "Mathematical foundations for computer science including linear algebra, calculus, and discrete mathematics applied to programming problems.",
    tech: ["Python", "NumPy", "Mathematical Analysis"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: mathsComputingImg,
    stateBadge: "live",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/maths_for_computing.pdf", icon: "docs" },
    ],
  },
  {
    title: "Generative Art Portfolio",
    subtitle: "Algorithmic & Computational Art",
    description:
      "Creative coding projects exploring generative algorithms, visual patterns, and artistic programming. Includes parametric design and procedural generation.",
    tech: ["p5.js", "JavaScript", "Processing", "Three.js", "GLSL"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    stateBadge: "in-development",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/generative_art.pdf", icon: "docs" },
    ],
  },
  {
    title: "Creative Coding Foundations",
    subtitle: "Programming for Creative Expression",
    description:
      "Foundational projects exploring creative applications of programming and computational thinking. Interactive visuals and generative systems.",
    tech: ["JavaScript", "p5.js", "HTML/CSS", "Canvas API"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    stateBadge: "in-development",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/creative_coding.pdf", icon: "docs" },
    ],
  },
  {
    title: "Web Technologies Projects",
    subtitle: "Introduction to Web Development",
    description:
      "Early web development projects covering HTML, CSS, JavaScript fundamentals and responsive design principles.",
    tech: ["HTML/CSS", "JavaScript", "Git", "Responsive Design"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    stateBadge: "in-development",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "View Documentation", href: "/docs/web_technologies.pdf", icon: "docs" },
    ],
  },
  // ── RECENTLY SUBMITTED ────────────────────────────────────────────────────
  {
    title: "AI Study Tracking",
    subtitle: "Artificial Intelligence Module",
    description:
      "Recently submitted AI study tracker that uses computer vision to detect focus during study sessions. Applies machine learning to monitor attention and provide real-time feedback on study habits.",
    tech: ["Python", "Computer Vision", "Machine Learning", "AI"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: aiStudyImg,
    stateBadge: "live",
    buttons: [
      { label: "View Code", href: "https://github.com/harrisonspurs/Ai_study_tracking", icon: "code" },
      { label: "View Documentation", icon: "docs", disabled: true },
    ],
  },
  {
    title: "Full-Stack Development",
    subtitle: "Student Focus Web Application",
    description:
      "Recently submitted full-stack project — a student focus tracking web app with session logging, analytics charts, and progress dashboards. Live at studentfocus.me.",
    tech: ["React", "Node.js", "Charts", "Database", "Full-Stack"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: fullstackImg,
    stateBadge: "live",
    buttons: [
      { label: "View Live Demo", href: "https://studentfocus.me/", icon: "live" },
      { label: "View Code", href: "https://github.com/harrisonspurs/Fullstack_Development", icon: "code" },
      { label: "View Documentation", icon: "docs", disabled: true },
    ],
  },
  {
    title: "XR Design",
    subtitle: "Extended Reality Experiences",
    description:
      "Recently submitted XR project — an interactive 3D rooftop scene with first-person controls (WASD + mouse). Explores spatial computing, environmental design and immersive WebXR experiences.",
    tech: ["WebXR", "Three.js", "3D Design", "First-Person Controls"],
    badge: "UNIVERSITY",
    badgeColor: "bg-purple/20 text-purple",
    category: ["university"],
    image: xrDesignImg,
    stateBadge: "live",
    buttons: [
      { label: "View Live Demo", href: "https://xrdesign.vercel.app/", icon: "live" },
      { label: "View Code", href: "https://github.com/harrisonspurs/XR-Design", icon: "code" },
      { label: "View Documentation", icon: "docs", disabled: true },
    ],
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Client Work", value: "client" },
  { label: "University Projects", value: "university" },
  { label: "In Progress", value: "in-progress" },
];

const stateBadgeConfig = {
  live: { label: "LIVE", className: "bg-green/20 text-green border border-green/30" },
  "in-development": { label: "IN DEVELOPMENT", className: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" },
  "coming-soon": { label: "COMING SOON", className: "bg-orange/20 text-orange border border-orange/30" },
};

const ButtonIcon = ({ icon }: { icon: ProjectButton["icon"] }) => {
  if (icon === "live") return <Globe className="h-3.5 w-3.5" />;
  if (icon === "code") return <Github className="h-3.5 w-3.5" />;
  if (icon === "docs") return <FileText className="h-3.5 w-3.5" />;
  if (icon === "gallery") return <Star className="h-3.5 w-3.5" />;
  return null;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const primaryBtn = project.buttons[0];
  const secondaryBtns = project.buttons.slice(1);

  const renderButton = (btn: ProjectButton, isPrimary: boolean) => {
    const baseClass = isPrimary
      ? "flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-200"
      : "flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-2 px-3 rounded-lg border transition-all duration-200";

    const enabledPrimary = "bg-gradient-to-r from-blue to-purple text-white hover:shadow-lg hover:shadow-blue/20 hover:-translate-y-0.5";
    const disabledClass = "opacity-40 cursor-not-allowed bg-secondary/50 border-border text-muted-foreground";
    const enabledSecondary = "border-border text-muted-foreground hover:text-foreground hover:border-blue/40 hover:bg-blue/5 hover:-translate-y-0.5";
    const galleryClass = "bg-gradient-to-r from-orange/80 to-pink/80 text-white hover:shadow-lg hover:shadow-orange/20 hover:-translate-y-0.5";

    let className = baseClass;
    if (btn.disabled) {
      className += ` ${disabledClass}`;
    } else if (btn.icon === "gallery") {
      className += ` ${galleryClass}`;
    } else if (isPrimary) {
      className += ` ${enabledPrimary}`;
    } else {
      className += ` ${enabledSecondary}`;
    }

    if (btn.disabled) {
      return (
        <button key={btn.label} disabled className={className}>
          <ButtonIcon icon={btn.icon} />
          {btn.label}
        </button>
      );
    }

    // Internal link (gallery)
    if (btn.href && btn.href.startsWith("/") && !btn.href.startsWith("/docs")) {
      return (
        <Link key={btn.label} to={btn.href} className={className}>
          <ButtonIcon icon={btn.icon} />
          {btn.label}
        </Link>
      );
    }

    return (
      <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" className={className}>
        <ButtonIcon icon={btn.icon} />
        {btn.label}
      </a>
    );
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`project-card group flex flex-col relative ${
        project.featured
          ? "ring-1 ring-orange/30 shadow-lg shadow-orange/5"
          : ""
      }`}
    >
      {/* Featured pulse border */}
      {project.featured && (
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          <div className="absolute inset-0 rounded-xl animate-pulse opacity-20 bg-gradient-to-r from-orange/20 to-pink/20" />
        </div>
      )}

      {/* Image */}
      <div className="aspect-video bg-secondary/50 border-b border-border flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-muted-foreground/30 text-xs font-mono">No Preview</div>
        )}

        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md ${project.badgeColor}`}>
          {project.badge}
        </span>

        {/* State badge */}
        {project.stateBadge && (
          <span className={`absolute top-3 right-3 text-[9px] font-bold tracking-wider px-2 py-1 rounded-md ${stateBadgeConfig[project.stateBadge].className}`}>
            {stateBadgeConfig[project.stateBadge].label}
          </span>
        )}

        {/* Featured label */}
        {project.featured && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-orange/90 text-white text-[9px] font-bold px-2 py-1 rounded-md">
            <Star className="h-2.5 w-2.5 fill-white" />
            FEATURED EVENT
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-foreground group-hover:text-blue transition-colors mb-1 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">{project.subtitle}</p>
        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>

        {/* Tech pills */}
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

        {/* Buttons */}
        <div className="mt-auto pt-3 border-t border-border/50 space-y-2">
          {/* Primary button full width */}
          <div className="flex">
            {renderButton(primaryBtn, true)}
          </div>
          {/* Secondary buttons in a row */}
          {secondaryBtns.length > 0 && (
            <div className="flex gap-2">
              {secondaryBtns.map((btn) => renderButton(btn, false))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category.includes(active));

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
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">No projects found for this category.</p>
            <button
              onClick={() => setActive("all")}
              className="text-blue text-sm hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
