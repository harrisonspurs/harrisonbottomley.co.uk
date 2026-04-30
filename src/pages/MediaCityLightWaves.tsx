import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import lightwavesEvent from "@/assets/lightwaves_event.png";
import lightwavesEvent1 from "@/assets/lightwaves_event1.png";
import lightwavesEvent2 from "@/assets/lightwaves_event2.png";
import lightwavesEvent3 from "@/assets/lightwaves_event3.png";
import lightwavesEvent4 from "@/assets/lightwaves_event4.png";
import creativeCollabImg from "@/assets/creative_collab.png";

const galleryImages = [
  { src: lightwavesEvent, alt: "Orbit Fall on the large public screen at MediaCityUK" },
  { src: lightwavesEvent1, alt: "Orbit Fall poster — astronaut floating in space" },
  { src: lightwavesEvent2, alt: "Live gameplay footage at the Light Waves event" },
  { src: lightwavesEvent3, alt: "Character design — astronaut models in Unreal Engine" },
  { src: lightwavesEvent4, alt: "Promotional art — astronaut and rocket in an asteroid field" },
  { src: creativeCollabImg, alt: "In-game environment — planets and asteroids" },
];

const Lightbox = ({
  images,
  initialIndex,
  onClose,
}: {
  images: typeof galleryImages;
  initialIndex: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 border border-background/30 text-background hover:bg-background hover:text-foreground transition-colors flex items-center justify-center z-10"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-background/60 text-xs font-mono tracking-[0.2em]">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-background/30 text-background hover:bg-background hover:text-foreground transition-colors flex items-center justify-center z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-full max-h-[85vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-background/30 text-background hover:bg-background hover:text-foreground transition-colors flex items-center justify-center z-10"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background/60 text-xs font-serif italic max-w-md text-center px-4">
          {images[current].alt}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

const MediaCityLightWaves = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background grain">
      <Header />

      <main className="relative z-10">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-20">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-12"
            >
              <Link to="/" className="hover:text-foreground transition-colors">Index</Link>
              <span>/</span>
              <Link to="/#projects" className="hover:text-foreground transition-colors">Work</Link>
              <span>/</span>
              <span className="text-foreground">Light Waves</span>
            </motion.nav>

            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="col-span-12 md:col-span-3 eyebrow"
              >
                § 01 — Featured
              </motion.p>

              <div className="col-span-12 md:col-span-9">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif font-light"
                >
                  Orbit Fall <span className="serif-italic text-[hsl(var(--terracotta))]">at</span> Light Waves.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="mt-6 font-serif italic text-xl text-muted-foreground"
                >
                  An interactive game installation at MediaCityUK. Salford, 2024.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero image ────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container-wide pb-20"
        >
          <div className="aspect-[16/9] overflow-hidden border border-foreground/10">
            <img src={lightwavesEvent} alt="Orbit Fall at Media City Light Waves" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <p className="col-span-12 md:col-span-6">Fig. 01 — Orbit Fall on the public screen, MediaCityUK</p>
            <p className="col-span-12 md:col-span-6 md:text-right">Light Waves Festival · 2024</p>
          </div>
        </motion.section>

        {/* ── About the project ─────────────────────────────────────────── */}
        <section className="section border-t border-foreground/10">
          <div className="container-wide">
            <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
              <p className="col-span-12 md:col-span-3 eyebrow">§ The Project</p>
              <h2 className="col-span-12 md:col-span-9 font-serif font-light">
                A space-survival game, shown to the <span className="serif-italic">public</span>.
              </h2>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-7 md:col-start-3 space-y-6 text-lg text-ink-soft leading-relaxed">
                <p>
                  <span className="float-left font-serif text-7xl leading-[0.8] mr-3 mt-1 text-[hsl(var(--terracotta))]">M</span>
                  edia City Light Waves is an annual public art-and-technology festival at
                  MediaCityUK in Salford. As part of the Creative Collaboration module I
                  developed and showed an original game built in Unreal Engine 5 — Orbit Fall.
                </p>
                <p>
                  The game is a space survival experience: you control an astronaut navigating
                  asteroid fields, planets and cosmic hazards. We installed it on a large public
                  screen for the weekend, and watched hundreds of people pick it up and play.
                </p>
                <p>
                  The project gave me real, on-the-ground experience of game design, 3D
                  environment work in Unreal, Blueprint visual scripting, and the production
                  side of running a public installation — not just making something, but
                  putting it in front of strangers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────── */}
        <section className="section border-t border-foreground/10">
          <div className="container-wide">
            <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
              <p className="col-span-12 md:col-span-3 eyebrow">§ Gallery</p>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-serif font-light">Six images <span className="serif-italic">from</span> the weekend.</h2>
                <p className="mt-3 text-sm font-mono text-muted-foreground">Click any image to enlarge</p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {galleryImages.map((img, i) => {
                // Asymmetric layout for the gallery
                const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-6", "md:col-span-6"];
                return (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setLightboxIndex(i)}
                    className={`group col-span-12 ${spans[i]} block overflow-hidden border border-foreground/10`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04] grayscale-[20%] group-hover:grayscale-0"
                      />
                    </div>
                    <div className="px-3 py-2 flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>Fig. {String(i + 1).padStart(2, "0")}</span>
                      <span>View</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Details ───────────────────────────────────────────────────── */}
        <section className="section border-t border-foreground/10">
          <div className="container-wide">
            <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
              <p className="col-span-12 md:col-span-3 eyebrow">§ Details</p>
              <h2 className="col-span-12 md:col-span-9 font-serif font-light">The <span className="serif-italic">specifics</span>.</h2>
            </div>

            <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
              {/* Tech */}
              <div className="col-span-12 md:col-span-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-3 mb-4">
                  Built with
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Unreal Engine 5", desc: "Blueprint visual scripting and 3D environment design" },
                    { label: "Blueprint Scripting", desc: "Visual programming for gameplay mechanics" },
                    { label: "Game Design", desc: "Level design, character creation and UX" },
                    { label: "Event Production", desc: "Installation setup and audience engagement" },
                  ].map((t) => (
                    <li key={t.label}>
                      <p className="font-serif text-lg">{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Module */}
              <div className="col-span-12 md:col-span-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-3 mb-4">
                  Context
                </p>
                <ul className="space-y-4 text-sm">
                  {[
                    ["Module", "Creative Collaboration"],
                    ["University", "University of Salford"],
                    ["Year", "Year 2 · 2024"],
                    ["Event", "Light Waves Festival"],
                    ["Venue", "MediaCityUK, Salford"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between border-b border-foreground/5 pb-2">
                      <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{k}</span>
                      <span className="font-serif">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="col-span-12 md:col-span-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground border-b border-foreground/10 pb-3 mb-4">
                  Outcomes
                </p>
                <ul className="space-y-3">
                  {[
                    "Public exhibition at MediaCityUK",
                    "Hundreds of visitors engaged",
                    "Collaborative team development",
                    "Real-world game deployment",
                    "Live audience testing & feedback",
                    "Professional event production experience",
                  ].map((o, i) => (
                    <li key={o} className="flex gap-3 text-sm text-ink-soft">
                      <span className="text-xs font-mono text-muted-foreground pt-1">{String(i + 1).padStart(2, "0")}</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Back nav ─────────────────────────────────────────────────── */}
        <section className="py-16 border-t border-foreground/10">
          <div className="container-wide">
            <Link
              to="/#projects"
              className="group inline-flex items-center gap-3 text-foreground"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-serif text-2xl">Back to all <span className="serif-italic">work</span></span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
};

export default MediaCityLightWaves;
