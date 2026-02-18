import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import lightwavesEvent from "@/assets/lightwaves_event.png";
import lightwavesEvent1 from "@/assets/lightwaves_event1.png";
import lightwavesEvent2 from "@/assets/lightwaves_event2.png";
import lightwavesEvent3 from "@/assets/lightwaves_event3.png";
import lightwavesEvent4 from "@/assets/lightwaves_event4.png";
import creativeCollabImg from "@/assets/creative_collab.png";

const galleryImages = [
  { src: lightwavesEvent, alt: "Orbit Fall displayed on large screen at Media City Light Waves event" },
  { src: lightwavesEvent1, alt: "Orbit Fall official game poster — astronaut floating through space" },
  { src: lightwavesEvent2, alt: "Live gameplay footage on the Media City event screen" },
  { src: lightwavesEvent3, alt: "Character design documentation — astronaut models and Unreal Engine integration" },
  { src: lightwavesEvent4, alt: "Orbit Fall promotional art — astronaut and rocket in asteroid field" },
  { src: creativeCollabImg, alt: "In-game screenshot of the space environment with planets and asteroids" },
];

const techDetails = [
  { label: "Unreal Engine 5", desc: "Blueprint visual scripting and 3D environment design" },
  { label: "Blueprint Scripting", desc: "Visual programming for gameplay mechanics" },
  { label: "Game Design", desc: "Level design, character creation, and UX" },
  { label: "Event Production", desc: "Installation setup and public engagement" },
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
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
          {current + 1} / {images.length}
        </div>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Image */}
        <motion.img
          key={current}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Alt text */}
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs text-center max-w-md px-4">
          {images[current].alt}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

const MediaCityLightWaves = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange/8 via-transparent to-pink/8 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--orange)/0.06),transparent_60%)] pointer-events-none" />

          <div className="container-wide relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/#projects" className="hover:text-foreground transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-foreground">Media City Light Waves</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-purple/20 text-purple">
                  UNIVERSITY
                </span>
                <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md bg-orange/20 text-orange border border-orange/30 flex items-center gap-1">
                  ★ FEATURED EVENT
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Media City{" "}
                <span className="gradient-text">Light Waves</span>{" "}
                2024
              </h1>
              <p className="text-xl text-muted-foreground mb-2">Interactive Game Installation — Orbit Fall</p>
              <p className="text-muted-foreground">
                University of Salford · Creative Collaboration Module · Year 2
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── About the Event ───────────────────────────────────────────── */}
        <section className="py-16 border-t border-border">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <span className="section-label">The Project</span>
                <h2 className="text-3xl font-bold">About the Event</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Media City Light Waves is an annual public art and technology festival at MediaCityUK, 
                    Salford. As part of the Creative Collaboration module, I developed and showcased an 
                    original interactive game built in Unreal Engine 5 called <strong className="text-foreground">Orbit Fall</strong>.
                  </p>
                  <p>
                    The game is a space-themed survival experience where players control an astronaut 
                    navigating through asteroid fields, planets, and cosmic hazards. The installation 
                    was displayed on a large public screen at MediaCityUK, attracting hundreds of 
                    visitors over the event weekend.
                  </p>
                  <p>
                    The project provided real-world experience in game design, 3D environment creation 
                    with Unreal Engine 5, Blueprint visual scripting, and public event production — 
                    combining technical development with live audience engagement.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src={lightwavesEvent}
                    alt="Orbit Fall on display at Media City Light Waves event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                  <p className="text-xs text-muted-foreground">Event</p>
                  <p className="text-sm font-semibold text-foreground">Light Waves 2024</p>
                  <p className="text-xs text-orange">MediaCityUK, Salford</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Gallery ───────────────────────────────────────────────────── */}
        <section className="py-16 border-t border-border">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="section-label">Gallery</span>
              <h2 className="text-3xl font-bold mb-2">Event Gallery</h2>
              <p className="text-muted-foreground">Click any image to view in fullscreen</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative aspect-video bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-2 right-2 text-white/60 text-xs font-mono bg-black/50 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {i + 1} / {galleryImages.length}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project Details ───────────────────────────────────────────── */}
        <section className="py-16 border-t border-border">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="section-label">Details</span>
              <h2 className="text-3xl font-bold">Project Details</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="glass-card p-6 space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">Technologies</h3>
                <ul className="space-y-2">
                  {techDetails.map((t) => (
                    <li key={t.label}>
                      <p className="text-sm font-medium text-foreground">{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Module info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">Module</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Module</p>
                    <p className="text-foreground font-medium">Creative Collaboration</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">University</p>
                    <p className="text-foreground font-medium">University of Salford</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Year</p>
                    <p className="text-foreground font-medium">Year 2, 2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Event</p>
                    <p className="text-foreground font-medium">Light Waves Festival</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Venue</p>
                    <p className="text-foreground font-medium">MediaCityUK, Salford</p>
                  </div>
                </div>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">Outcomes</h3>
                <ul className="space-y-2">
                  {[
                    "Public exhibition at MediaCityUK",
                    "Hundreds of visitors engaged",
                    "Collaborative team development",
                    "Real-world game deployment",
                    "Live audience testing & feedback",
                    "Professional event production experience",
                  ].map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-green mt-0.5">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Back navigation ───────────────────────────────────────────── */}
        <section className="py-12 border-t border-border">
          <div className="container-wide">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
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
