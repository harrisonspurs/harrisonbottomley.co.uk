import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const About = () => {
  const focuses = [
    "Artificial Intelligence & Machine Learning",
    "Full-Stack Web Development",
    "XR Design & Immersive Technologies",
    "Freelance Web Development",
    "Creative Coding & Generative Art",
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue/3 via-transparent to-pink/3 pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="section-label">Background</span>
          <h2>About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Photo & info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Photo placeholder */}
            <div className="aspect-square max-w-sm rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-purple/5 to-pink/10" />
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue via-purple to-pink flex items-center justify-center shadow-2xl shadow-blue/20 ring-4 ring-blue/20">
                  <span className="text-white font-bold text-5xl tracking-tight select-none">HB</span>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="glass-card p-5 space-y-4">
              {[
                { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Middlesbrough / Salford, UK" },
                { icon: <CheckCircle2 className="h-4 w-4" />, label: "Status", value: "Available for Projects" },
                { icon: <Calendar className="h-4 w-4" />, label: "Year", value: "2nd Year Student" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-blue">{item.icon}</span>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="text-foreground text-lg leading-relaxed">
                I'm a second-year Creative Computing student at the University of Salford 
                with a passion for web development and creative technology.
              </p>
              <p>
                Currently studying Artificial Intelligence, Full-Stack Development, and XR Design, 
                I combine technical skills with creative thinking to build digital solutions. My coursework 
                spans backend development, generative art, interaction design, IoT, and mathematical 
                computing, giving me a diverse technical foundation across multiple disciplines.
              </p>
              <p>
                Alongside my studies, I work as a freelance web developer, creating professional websites 
                for small businesses in the Manchester and Salford area. I specialise in custom website 
                design, hosting setup, and ongoing maintenance, helping local businesses establish their 
                online presence.
              </p>
            </div>

            {/* Education */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">University of Salford</p>
                <p className="text-sm text-muted-foreground">BSc Creative Computing · 2023 – Present · Expected 2026</p>
              </div>
            </div>

            {/* Current focus */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                {focuses.map((f) => (
                  <span key={f} className="skill-pill">{f}</span>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green/10 border border-green/20">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green">Available for new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
