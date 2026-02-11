import { ArrowDown, Briefcase, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { value: "10+", label: "University Projects", icon: <Code2 className="h-4 w-4" /> },
    { value: "3", label: "Client Websites", icon: <Briefcase className="h-4 w-4" /> },
    { value: "Available", label: "For Hire", icon: <Sparkles className="h-4 w-4" /> },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-wide relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-blue to-pink" />
            <span className="text-sm font-medium tracking-wide text-muted-foreground">
              Creative Computing Student · University of Salford
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <span className="gradient-text">Harrison Bottomley</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-4 leading-relaxed font-light"
          >
            Second-year student exploring AI, full-stack development, and XR design. 
            Also available for professional web development projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary flex items-center justify-center gap-2 group">
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
            <button onClick={() => scrollTo("services")} className="btn-secondary flex items-center justify-center gap-2">
              Web Development Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                    <span className="text-blue">{stat.icon}</span>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
