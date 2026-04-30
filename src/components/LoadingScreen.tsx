import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 1800);
    const t2 = setTimeout(onComplete, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center px-6"
        >
          {/* Top eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-10 left-10 text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground"
          >
            Portfolio · Vol. 01
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-10 right-10 text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground"
          >
            MMXXVI
          </motion.div>

          {/* Centre piece */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] uppercase tracking-[0.4em] font-mono text-muted-foreground mb-6"
            >
              A site by
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            >
              Harrison <span className="serif-italic text-[hsl(var(--terracotta))]">Bottomley</span>
            </motion.h1>

            {/* Hairline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
              className="mx-auto mt-8 h-px bg-foreground/30 w-48 origin-center"
            />
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground"
          >
            Loading
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
