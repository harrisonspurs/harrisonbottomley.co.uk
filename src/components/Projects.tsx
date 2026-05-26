import { Github, FileText, Globe, ArrowUpRight, Star } from "lucide-react";
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

interface ProjectButton {
  label: string;
  href?: string;
  icon: "live" | "code" | "docs" | "gallery";
}

interface Project {
  year: string;
  title: string;
  subtitle: string;
  image?: string;
  buttons: ProjectButton[];
  size: "full" | "wide" | "tall" | "small";
}

const projects: Project[] = [
  {
    year: "2024",
    title: "Orbit Fall",
    subtitle: "Media City Light Waves",
    image: lightwavesImg,
    size: "full",
    buttons: [{ label: "Event", href: "/projects/media-city-light-waves", icon: "gallery" }],
  },
  {
    year: "2026",
    title: "Student Focus",
    subtitle: "Full-stack web app",
    image: fullstackImg,
    size: "wide",
    buttons: [
      { label: "Live", href: "https://studentfocus.me/", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/Fullstack_Development", icon: "code" },
      { label: "Docs", href: "/docs/fullstack_development.pdf", icon: "docs" },
    ],
  },
  {
    year: "2026",
    title: "XR Rooftop",
    subtitle: "WebXR scene",
    image: xrDesignImg,
    size: "tall",
    buttons: [
      { label: "Live", href: "https://xrdesign.vercel.app/", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/XR-Design", icon: "code" },
      { label: "Docs", href: "/docs/xr_design.pdf", icon: "docs" },
    ],
  },
  {
    year: "2026",
    title: "AI Study Tracking",
    subtitle: "Computer vision",
    image: aiStudyImg,
    size: "wide",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs/Ai_study_tracking", icon: "code" },
      { label: "Docs", href: "/docs/ai_study_tracking.pdf", icon: "docs" },
    ],
  },
  {
    year: "2026",
    title: "Generative Art",
    subtitle: "Interactive p5.js",
    image: generativeArtImg,
    size: "tall",
    buttons: [
      { label: "Live", href: "https://generative-art-project.vercel.app/", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/Generative-Art_Project", icon: "code" },
      { label: "Docs", href: "/docs/generative_art.pdf", icon: "docs" },
    ],
  },
  {
    year: "2025",
    title: "HBottomley Ltd",
    subtitle: "Mechanic & haulage",
    image: hbottomleyImg,
    size: "wide",
    buttons: [{ label: "Live", href: "https://hbottomleyltd.lovable.app/", icon: "live" }],
  },
  {
    year: "2025",
    title: "Top Frog Records",
    subtitle: "Independent label",
    image: topfrogImg,
    size: "tall",
    buttons: [{ label: "Live", href: "https://topfrogrecords.lovable.app/", icon: "live" }],
  },
  {
    year: "2025",
    title: "The Wearhouse Company",
    subtitle: "Vintage wholesale",
    image: wearhouseImg,
    size: "wide",
    buttons: [{ label: "Live", href: "https://thewearhousecompany.lovable.app/", icon: "live" }],
  },
  {
    year: "2024",
    title: "Sunset Cityscape",
    subtitle: "Generative p5.js",
    image: cityscapeImg,
    size: "tall",
    buttons: [
      { label: "Live", href: "https://openprocessing.org/sketch/2590894", icon: "live" },
      { label: "Code", href: "https://github.com/harrisonspurs/City_scene", icon: "code" },
      { label: "Docs", href: "/docs/creative_coding.pdf", icon: "docs" },
    ],
  },
  {
    year: "2025",
    title: "Backend Development",
    subtitle: "APIs & databases",
    image: backendImg,
    size: "wide",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/backend_development.pdf", icon: "docs" },
    ],
  },
  {
    year: "2024",
    title: "Interaction & IoT",
    subtitle: "Physical computing",
    image: iotImg,
    size: "wide",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/iot_documentation.pdf", icon: "docs" },
    ],
  },
  {
    year: "2024",
    title: "Mathematical Practice",
    subtitle: "Computational maths",
    image: mathPracticeImg,
    size: "tall",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/mathematical_practice.pdf", icon: "docs" },
    ],
  },
  {
    year: "2024",
    title: "Maths for Computing",
    subtitle: "Linear algebra & calculus",
    image: mathsComputingImg,
    size: "small",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/maths_for_computing.pdf", icon: "docs" },
    ],
  },
  {
    year: "2023",
    title: "Web Technologies",
    subtitle: "Foundations",
    size: "small",
    buttons: [
      { label: "Code", href: "https://github.com/harrisonspurs", icon: "code" },
      { label: "Docs", href: "/docs/web_technologies.pdf", icon: "docs" },
    ],
  },
];

const ButtonIcon = ({ icon }: { icon: ProjectButton["icon"] }) => {
  if (icon === "live") return <Globe className="h-3 w-3" />;
  if (icon === "code") return <Github className="h-3 w-3" />;
  if (icon === "docs") return <FileText className="h-3 w-3" />;
  if (icon === "gallery") return <Star className="h-3 w-3" />;
  return null;
};

const sizeClasses: Record<Project["size"], string> = {
  full: "md:col-span-12 aspect-[16/9]",
  wide: "md:col-span-7 aspect-[4/3]",
  tall: "md:col-span-5 aspect-[3/4]",
  small: "md:col-span-6 aspect-[5/4]",
};

const ProjectFeature = ({ project, index }: { project: Project; index: number }) => {
  const renderBtn = (btn: ProjectButton) => {
    const cls =
      "inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors";
    if (!btn.href) {
      return (
        <span key={btn.label} className={cls + " opacity-40"}>
          <ButtonIcon icon={btn.icon} /> {btn.label}
        </span>
      );
    }
    if (btn.href.startsWith("/") && !btn.href.startsWith("/docs")) {
      return (
        <Link key={btn.label} to={btn.href} className={cls}>
          <ButtonIcon icon={btn.icon} /> {btn.label}
        </Link>
      );
    }
    return (
      <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" className={cls}>
        <ButtonIcon icon={btn.icon} /> {btn.label}
      </a>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`group col-span-12 ${sizeClasses[project.size]} relative overflow-hidden`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
          <p className="font-serif text-5xl text-foreground/30 italic">{project.title}</p>
        </div>
      )}

      {/* Caption overlay — quiet, only legible on hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex items-end justify-between gap-6 bg-gradient-to-t from-background/85 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">
            {project.year} — {project.subtitle}
          </p>
          <h3 className="mt-2 font-serif text-2xl md:text-3xl font-light tracking-tight">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          {project.buttons.map(renderBtn)}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pb-32 md:pb-48">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {projects.map((p, i) => (
            <ProjectFeature key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
