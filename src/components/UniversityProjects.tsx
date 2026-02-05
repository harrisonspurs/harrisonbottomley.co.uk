import { motion } from "framer-motion";
import { GraduationCap, Plus } from "lucide-react";

const UniversityProjects = () => {
  return (
    <section id="university-projects" className="section bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="section-label">University Work</span>
          <h2 className="mb-4">Academic Projects</h2>
          <p className="text-lg text-muted-foreground">
            Projects from my Creative Computing degree at the University of Salford — 
            where I explore hardware, software, and everything in between.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Bathroom Occupancy Detector */}
          <div className="project-card group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Bathroom Occupancy Detector
                </h3>
                <p className="text-sm text-muted-foreground">IoT & Physical Computing</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Built using an Arduino UNO R4 WiFi with sensors to detect room occupancy. 
              The system displays live status on a custom website — useful for shared spaces.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="skill-pill">Arduino</span>
              <span className="skill-pill">Sensors</span>
              <span className="skill-pill">JavaScript</span>
            </div>
          </div>

          {/* Placeholder for future projects */}
          <div className="project-card border-dashed opacity-60 flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="w-12 h-12 rounded-xl bg-secondary text-muted-foreground flex items-center justify-center mb-3">
              <Plus className="h-5 w-5" />
            </div>
            <p className="text-muted-foreground text-sm">More projects coming soon</p>
          </div>

          <div className="project-card border-dashed opacity-60 flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="w-12 h-12 rounded-xl bg-secondary text-muted-foreground flex items-center justify-center mb-3">
              <Plus className="h-5 w-5" />
            </div>
            <p className="text-muted-foreground text-sm">More projects coming soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityProjects;
