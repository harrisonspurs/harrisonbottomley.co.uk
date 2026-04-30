import { useState } from "react";
import { ArrowUpRight, Github, FileText, Globe, Star } from "lucide-react";
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
import cityscapeImg from "@/assets/cityscape_sunset.png";
import hbottomleyImg from "@/assets/hbottomley.png";
import topfrogImg from "@/assets/topfrog.png";
import wearhouseImg from "@/assets/wearhouse.png";

type ProjectCategory = "all" | "client" | "university" | "in-progress";
type Span = "sm" | "md" | "lg" | "xl";

interface ProjectButton {
  label: string;
  href?: string;
  icon: "live" | "code" | "docs" | "gallery";
  disabled?: boolean;
}

interface Project {
  num: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  badge: "CLIENT" | "UNIVERSITY";
  category: ProjectCategory[];
  image?: string;
  buttons: ProjectButton[];
  featured?: boolean;
  state: "live" | "in-development";
  span: Span; // editorial grid span
}

const projects: Project[] = [
  // ── FEATURED — Media City ──────────────────────────────────────────────
  {
    num: "01",
    year: "2024",
    title: "Orbit Fall — Media City Light Waves",
    subtitle: "Public installation · Unreal Engine 5",
    description:
      "A space-survival game built in Unreal Engine 5 and shown on a public screen at MediaCityUK during the Light Waves festival. Hundreds of visitors played it across the weekend — my first real taste of putting work in front of an audience.",
    tech: ["Unreal Engine 5", "Blueprint", "Game Design", "Event Production"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: lightwavesImg,
    featured: true,
    state: "live",
    span: "xl",
    buttons: [
      { label: "Event gallery", href: "/projects/media-city-light-waves", icon: "gallery" },
    ],
  },

  // ── RECENTLY SUBMITTED ─────────────────────────────────────────────────
  {
    num: "02",
    year: "2026",
    title: "AI Study Tracking",
    subtitle: "Computer vision · Focus detection",
    description:
      "A study tracker that uses computer vision to detect focus during sessions and gives real-time feedback on attention. Built for the AI module.",
    tech: ["Python", "Computer Vision", "ML"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: aiStudyImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs/Ai_study_tracking", icon: "code" },
      { label: "Docs", href: "/docs/ai_study_tracking.pdf", icon: "docs" },
    ],
  },
  {
    num: "03",
    year: "2026",
    title: "Student Focus",
    subtitle: "Full-stack web app",
    description:
      "A full-stack web app for logging study sessions, with analytics charts and progress dashboards. Live at studentfocus.me.",
    tech: ["React", "Node.js", "Charts", "Database"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: fullstackImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Live site", href: "https://studentfocus.me/", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/Fullstack_Development", icon: "code" },
      { label: "Docs", href: "/docs/fullstack_development.pdf", icon: "docs" },
    ],
  },
  {
    num: "04",
    year: "2026",
    title: "XR Design — Rooftop Scene",
    subtitle: "WebXR · First-person 3D",
    description:
      "An interactive 3D rooftop you can walk around in the browser using WASD and mouse. A spatial-design experiment for the XR module.",
    tech: ["WebXR", "Three.js", "3D"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: xrDesignImg,
    state: "live",
    span: "lg",
    buttons: [
      { label: "Live demo", href: "https://xrdesign.vercel.app/", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/XR-Design", icon: "code" },
      { label: "Docs", href: "/docs/xr_design.pdf", icon: "docs" },
    ],
  },

  // ── CLIENT WORK ────────────────────────────────────────────────────────
  {
    num: "05",
    year: "2025",
    title: "HBottomley Ltd",
    subtitle: "Mechanic & haulage company",
    description:
      "A site for a local family-run mechanics and haulage business. Two service strands, one identity — built to be unmistakably Bottomley.",
    tech: ["React", "Tailwind", "Lovable"],
    badge: "CLIENT",
    category: ["client"],
    image: hbottomleyImg,
    state: "live",
    span: "lg",
    buttons: [
      { label: "Live site", href: "https://hbottomleyltd.lovable.app/", icon: "live" },
    ],
  },
  {
    num: "06",
    year: "2025",
    title: "Top Frog Records",
    subtitle: "Independent record label",
    description:
      "A black-and-white minimal site for a record label, pointing visitors to Discogs and contact channels.",
    tech: ["React", "Tailwind", "Lovable"],
    badge: "CLIENT",
    category: ["client"],
    image: topfrogImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Live site", href: "https://topfrogrecords.lovable.app/", icon: "live" },
    ],
  },
  {
    num: "07",
    year: "2025",
    title: "The Wearhouse Company",
    subtitle: "Vintage clothing wholesale",
    description:
      "A bold, image-led site for a vintage wholesaler — built to convert resellers and direct buyers to live shopping streams.",
    tech: ["React", "Tailwind", "Lovable"],
    badge: "CLIENT",
    category: ["client"],
    image: wearhouseImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Live site", href: "https://thewearhousecompany.lovable.app/", icon: "live" },
    ],
  },

  // ── UNIVERSITY ─────────────────────────────────────────────────────────
  {
    num: "08",
    year: "2025",
    title: "Backend Development",
    subtitle: "Server-side & APIs",
    description:
      "Coursework on REST APIs, authentication and database design — the underlying plumbing of modern apps.",
    tech: ["Node.js", "Python", "MongoDB", "Express", "PostgreSQL"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: backendImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/backend_development.pdf", icon: "docs" },
    ],
  },
  {
    num: "09",
    year: "2024",
    title: "Interaction Design & IoT",
    subtitle: "Physical computing",
    description:
      "Hardware-meets-software prototypes using sensors, microcontrollers and MQTT — projects that live in the real world, not just on a screen.",
    tech: ["Arduino", "Python", "Sensors", "MQTT"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: iotImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/iot_documentation.pdf", icon: "docs" },
    ],
  },
  {
    num: "10",
    year: "2024",
    title: "Sunset Cityscape — p5.js",
    subtitle: "Generative pixel art",
    description:
      "A pixel-art sunset cityscape sketch built in p5.js, exploring layered composition and warm atmospheric colour. Live on OpenProcessing.",
    tech: ["p5.js", "JavaScript", "Generative"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: cityscapeImg,
    state: "live",
    span: "lg",
    buttons: [
      { label: "Live demo", href: "https://openprocessing.org/sketch/2590894", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/City_scene", icon: "code" },
      { label: "Docs", href: "/docs/creative_coding.pdf", icon: "docs" },
    ],
  },
  {
    num: "11",
    year: "2024",
    title: "Mathematical Practice",
    subtitle: "Computational mathematics",
    description:
      "Projects applying mathematical concepts through code — algorithms, data structures and modelling.",
    tech: ["Python", "NumPy", "Matplotlib"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: mathPracticeImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/mathematical_practice.pdf", icon: "docs" },
    ],
  },
  {
    num: "12",
    year: "2024",
    title: "Maths for Computing",
    subtitle: "Linear algebra & calculus",
    description:
      "Mathematical foundations for computer science — linear algebra, calculus and discrete maths applied to programming problems.",
    tech: ["Python", "NumPy"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: mathsComputingImg,
    state: "live",
    span: "sm",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/maths_for_computing.pdf", icon: "docs" },
    ],
  },
  {
    num: "13",
    year: "2024",
    title: "Generative Art Portfolio",
    subtitle: "Algorithmic visuals",
    description:
      "Creative-coding projects exploring generative algorithms, parametric design and procedural pattern.",
    tech: ["p5.js", "Processing", "Three.js", "GLSL"],
    badge: "UNIVERSITY",
    category: ["university", "in-progress"],
    state: "in-development",
    span: "sm",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/generative_art.pdf", icon: "docs" },
    ],
  },
  {
    num: "14",
    year: "2023",
    title: "Web Technologies",
    subtitle: "Foundations of the web",
    description:
      "First-year web projects covering HTML, CSS, JavaScript and responsive design fundamentals.",
    tech: ["HTML/CSS", "JavaScript", "Git"],
    badge: "UNIVERSITY",
    category: ["university"],
    state: "live",
    span: "sm",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/web_technologies.pdf", icon: "docs" },
    ],
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Client", value: "client" },
  { label: "University", value: "university" },
  { label: "In Progress", value: "in-progress" },
];

const ButtonIcon = ({ icon }: { icon: ProjectButton["icon"] }) => {
  if (icon === "live") return <Globe className="h-3 w-3" />;
  if (icon === "code") return <Github className="h-3 w-3" />;
  if (icon === "docs") return <FileText className="h-3 w-3" />;
  if (icon === "gallery") return <Star className="h-3 w-3" />;
  return null;
};

const spanClasses: Record<Span, string> = {
  xl: "md:col-span-12",                    // full-width hero row
  lg: "md:col-span-7",                     // 7 of 12
  md: "md:col-span-6",                     // half
  sm: "md:col-span-5",                     // 5 of 12
};

const ProjectCell = ({ project, index }: { project: Project; index: number }) => {
  const renderBtn = (btn: ProjectButton) => {
    const cls = "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider link-quiet";
    if (btn.disabled) {
      return (
        <span key={btn.label} className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground/50 cursor-not-allowed">
          <ButtonIcon icon={btn.icon} />
          {btn.label}
        </span>
      );
    }
    if (btn.href?.startsWith("/") && !btn.href.startsWith("/docs")) {
      return (
        <Link key={btn.label} to={btn.href} className={cls}>
          <ButtonIcon icon={btn.icon} />
          {btn.label}
        </Link>
      );
    }
    return (
      <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" className={cls}>
        <ButtonIcon icon={btn.icon} />
        {btn.label}
      </a>
    );
  };

  // Featured (xl) gets a horizontal layout
  const isFeatured = project.span === "xl";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.05 }}
      className={`col-span-12 ${spanClasses[project.span]} group`}
    >
      <div className={isFeatured ? "grid md:grid-cols-12 gap-6 md:gap-10 items-end" : ""}>
        {/* Image */}
        {project.image ? (
          <div className={`overflow-hidden bg-paper-deep border border-foreground/10 ${
            isFeatured ? "md:col-span-7 aspect-[16/10]" :
            project.span === "lg" ? "aspect-[16/10]" :
            project.span === "md" ? "aspect-[4/3]" : "aspect-square"
          }`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] grayscale-[20%] group-hover:grayscale-0"
            />
          </div>
        ) : (
          <div className={`bg-paper-deep border border-foreground/10 flex items-center justify-center ${
            project.span === "lg" ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}>
            <span className="font-serif serif-italic text-2xl text-muted-foreground">No preview yet</span>
          </div>
        )}

        {/* Text */}
        <div className={`mt-5 ${isFeatured ? "md:col-span-5 md:mt-0" : ""}`}>
          {/* Meta row */}
          <div className="flex items-center justify-between mb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span>№ {project.num} · {project.badge}</span>
            <span className="flex items-center gap-2">
              {project.state === "in-development" && (
                <span className="text-[hsl(var(--ochre))]">In progress</span>
              )}
              <span>{project.year}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-serif font-light leading-tight ${
            isFeatured ? "text-3xl md:text-5xl" :
            project.span === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}>
            {project.featured && (
              <span className="serif-italic text-[hsl(var(--terracotta))]">★ </span>
            )}
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 italic font-serif">{project.subtitle}</p>

          {/* Description */}
          <p className={`text-ink-soft leading-relaxed mt-4 ${
            isFeatured ? "text-base md:text-lg" : "text-sm"
          }`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-5">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 pt-5 border-t border-foreground/10">
            {project.buttons.map((b) => renderBtn(b))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section relative">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <p className="eyebrow">§ 02 — Selected Work</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-9 font-serif font-light"
          >
            Fourteen projects, give or take — <span className="serif-italic">client work, coursework, experiments.</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-16 pb-6 border-b border-foreground/10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`text-sm font-mono uppercase tracking-wider transition-colors pb-1 border-b ${
                active === f.value
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono uppercase tracking-wider text-muted-foreground self-end pb-1">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Editorial asymmetric grid */}
        <motion.div layout className="grid grid-cols-12 gap-x-6 gap-y-20 md:gap-y-28">
          {filtered.map((p, i) => (
            <ProjectCell key={p.num} project={p} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-muted-foreground mb-4">Nothing in this category.</p>
            <button onClick={() => setActive("all")} className="link-accent text-sm">
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
