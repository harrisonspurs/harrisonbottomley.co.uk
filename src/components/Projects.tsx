import { useState } from "react";
import { Github, FileText, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Images
import backendImg from "@/assets/backend_development.png";
import iotImg from "@/assets/internet_of_things.png";
import lightwavesImg from "@/assets/lightwaves_event.png";
import mathPracticeImg from "@/assets/mathematical_practice.png";
import mathsComputingImg from "@/assets/maths_for_computing.png";
import xrDesignImg from "@/assets/xr_design.png";
import fullstackImg from "@/assets/fullstack_development.png";
import aiStudyImg from "@/assets/ai_study_tracking.png";
import cityscapeImg from "@/assets/cityscape_sunset.png";
import generativeArtImg from "@/assets/generative_art.png";
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
  {
    num: "01",
    year: "2024",
    title: "Orbit Fall - Media City Light Waves",
    subtitle: "Public installation · Unreal Engine 5",
    description:
      "A space survival game built in Unreal Engine 5 and shown on a public screen at MediaCityUK during the Light Waves festival.",
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
    title: "XR Design - Rooftop Scene",
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

  {
    num: "05",
    year: "2025",
    title: "HBottomley Ltd",
    subtitle: "Mechanic & haulage company",
    description:
      "Website for a local family-run mechanics and haulage company.",
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
      "Website for a vintage clothing wholesaler with an image-led storefront.",
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

  {
    num: "08",
    year: "2025",
    title: "Backend Development",
    subtitle: "Server-side & APIs",
    description:
      "Coursework on REST APIs, authentication and database design.",
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
      "Physical computing projects using sensors, microcontrollers and MQTT.",
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
    title: "Sunset Cityscape - p5.js",
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
      "Projects applying mathematical concepts through code, including algorithms, data structures and modelling.",
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
      "Mathematical foundations for computer science, including linear algebra, calculus and discrete maths.",
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
    year: "2026",
    title: "Generative Art Project",
    subtitle: "Interactive p5.js sketch",
    description:
      "An interactive generative sketch that reinterprets a source image as evolving fields of strokes, with live controls for length, grid density and stroke count.",
    tech: ["p5.js", "JavaScript", "Generative"],
    badge: "UNIVERSITY",
    category: ["university"],
    image: generativeArtImg,
    state: "live",
    span: "md",
    buttons: [
      { label: "Live demo", href: "https://generative-art-project.vercel.app/", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/Generative-Art_Project", icon: "code" },
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

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const flip = index % 2 === 1;

  const renderBtn = (btn: ProjectButton) => {
    const cls =
      "inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground border-b border-foreground/30 hover:border-foreground pb-0.5 transition-colors";
    if (btn.disabled) {
      return (
        <span
          key={btn.label}
          className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 cursor-not-allowed"
        >
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

  // Visual scale based on span
  const aspect =
    project.span === "xl" ? "aspect-[16/10]" : project.span === "lg" ? "aspect-[4/3]" : project.span === "md" ? "aspect-[5/4]" : "aspect-[1/1]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-12 gap-4 md:gap-10 items-start py-12 md:py-20 border-t border-foreground/15"
    >
      {/* Index marker */}
      <div className="col-span-12 md:col-span-1 flex md:flex-col items-center md:items-start gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
        <span>№ {project.num}</span>
        <span className="hidden md:block h-12 w-px bg-foreground/20" />
        <span>{project.year}</span>
      </div>

      {/* Image */}
      <div className={`col-span-12 ${flip ? "md:col-span-7 md:col-start-6 md:order-3" : "md:col-span-7 md:col-start-2"}`}>
        {project.image ? (
          <div className={`relative overflow-hidden ${aspect} bg-secondary`}>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-[0.25em] text-background bg-foreground/80 px-2 py-1">
              {project.badge}
            </div>
          </div>
        ) : (
          <div className={`relative overflow-hidden ${aspect} border border-foreground/15 bg-secondary flex items-center justify-center`}>
            <p className="font-serif text-4xl text-foreground/30 italic">{project.title.split(" ")[0]}</p>
          </div>
        )}
      </div>

      {/* Text */}
      <div className={`col-span-12 md:col-span-4 ${flip ? "md:col-start-2" : ""}`}>
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          {project.subtitle}
          {project.state === "in-development" ? " · In progress" : ""}
        </p>
        <h3 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-[1.05] tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="mt-5 text-sm md:text-base text-foreground/80 leading-relaxed max-w-md">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[11px] font-mono text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          {project.buttons.map((btn) => renderBtn(btn))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [active, setActive] = useState<ProjectCategory>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section border-t border-foreground/15">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">01 — Index</p>
          <h2 className="col-span-12 md:col-span-9 font-serif font-light leading-[1.02] tracking-[-0.02em]">
            Selected <span className="serif-italic text-[hsl(var(--terracotta))]">work</span>,
            <br />
            shop &amp; sketchbook.
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-foreground/15 pb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`text-[11px] font-mono uppercase tracking-[0.2em] pb-1 border-b transition-colors ${
                active === f.value
                  ? "text-foreground border-foreground"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {String(filtered.length).padStart(2, "0")} entries
          </span>
        </div>

        <div>
          {filtered.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-muted-foreground mb-4">No entries here yet.</p>
            <button onClick={() => setActive("all")} className="text-sm underline underline-offset-4">
              Show everything
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
