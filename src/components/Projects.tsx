import { useState } from "react";
import { Github, FileText, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

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

const ProjectCard = ({ project }: { project: Project }) => {
  const renderBtn = (btn: ProjectButton) => {
    const cls = "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors";
    if (btn.disabled) {
      return (
        <span key={btn.label} className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-muted-foreground/50 cursor-not-allowed">
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

  return (
    <article
      className={`border border-foreground/10 bg-card p-5 md:p-6 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {project.image && (
        <div className="aspect-[16/9] overflow-hidden border border-foreground/10 bg-background">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="mt-5">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {project.badge} · {project.year}
          {project.state === "in-development" ? " · In progress" : ""}
        </p>
        <h3 className="mt-2 font-serif text-2xl md:text-3xl font-light">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/85">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-foreground/15 px-2.5 py-1 text-xs text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-foreground/10 pt-4">
          {project.buttons.map((btn) => renderBtn(btn))}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [active, setActive] = useState<ProjectCategory>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <h2 className="mt-4 max-w-3xl font-serif font-light">
          Selected work across client projects, coursework and experiments.
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-foreground/10 pb-5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wide transition-colors ${
                active === f.value
                  ? "border-foreground/30 bg-foreground text-background"
                  : "border-foreground/15 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono uppercase tracking-wide text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.num} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-muted-foreground mb-4">No projects in this category.</p>
            <button onClick={() => setActive("all")} className="text-sm underline underline-offset-4">
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
