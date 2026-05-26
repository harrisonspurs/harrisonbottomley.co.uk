import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Animated blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 -right-20 md:right-10 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-[hsl(var(--terracotta))]/95"
        style={{ animation: "blob 11s ease-in-out infinite" }}
      />

      <div className="container-wide w-full relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif leading-[0.9]"
        >
          Harrison
          <br />
          <span className="inline-block text-[hsl(var(--terracotta))] wobble">Bottomley.</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
