import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-end pb-16 md:pb-24">
      <div className="container-wide w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-light leading-[0.9] tracking-[-0.04em]"
        >
          Harrison
          <br />
          <span className="serif-italic">Bottomley</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
