import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Wrench } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      label: "Student",
      value: "University of Salford",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Based in",
      value: "United Kingdom",
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      label: "Focus",
      value: "Creative Computing",
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      label: "Approach",
      value: "Build & Ship",
    },
  ];

  return (
    <section id="about" className="section bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column - highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="section-label">About Me</span>
            <h2 className="mb-8">Harrison Bottomley</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="feature-card"
                >
                  <div className="text-accent mb-2">{item.icon}</div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - bio */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6 text-lg text-muted-foreground"
          >
            <p className="text-foreground text-xl leading-relaxed">
              I'm a Creative Computing student who enjoys building things that work — 
              functional websites, interactive systems, and projects that connect hardware to the web.
            </p>
            
            <p>
              My work sits at the intersection of code, design, and physical computing. 
              I'm comfortable working with HTML, CSS, and JavaScript for web development, 
              and I've built sensor-based systems using Arduino that display real-time data online.
            </p>
            
            <p>
              I value clarity and usability over flashy visuals. When I build something, 
              I focus on making it work well and look clean — no unnecessary complexity.
            </p>
            
            <p>
              I'm early in my career, but I'm already doing real work. If you need a 
              straightforward website or want to collaborate on something interesting, 
              I'd be happy to chat.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
