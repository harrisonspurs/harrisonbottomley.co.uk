import { ExternalLink, TrendingUp, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

interface ClientSite {
  title: string;
  url: string;
  description: string;
  results: string[];
  industry: string;
}

const clientSites: ClientSite[] = [
  {
    title: "H Bottomley Ltd",
    url: "https://hbottomleyltd.lovable.app",
    description: "A professional business website designed to establish credibility and generate enquiries for a construction and property services company.",
    results: [
      "Increased online visibility",
      "Professional brand presence",
      "Direct enquiry generation"
    ],
    industry: "Construction & Property"
  },
  {
    title: "Top Frog Records",
    url: "https://topfrogrecords.lovable.app",
    description: "A clean, modern website for an independent record label — showcasing artists, releases, and making it easy for new talent to get in touch.",
    results: [
      "Stronger brand identity",
      "Artist showcase platform",
      "Improved artist submissions"
    ],
    industry: "Music & Entertainment"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ClientWebsites = () => {
  return (
    <section id="client-work" className="section relative">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="section-label">Client Work</span>
          <h2 className="mb-4">Websites That Deliver Results</h2>
          <p className="text-lg text-muted-foreground">
            I build websites that help businesses reach more customers, 
            generate leads, and establish a professional online presence.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {clientSites.map((site, index) => (
            <motion.article 
              key={index} 
              variants={itemVariants}
              className="project-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded mb-2 inline-block">
                    {site.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {site.title}
                  </h3>
                </div>
                <a 
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">View Site</span>
                </a>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {site.description}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Results & Impact
                </p>
                <ul className="space-y-2">
                  {site.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border">
            <Users className="h-5 w-5 text-accent" />
            <span className="text-foreground">
              Want your business to be next? <a href="#contact" className="text-accent hover:underline font-medium">Let's talk</a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientWebsites;
