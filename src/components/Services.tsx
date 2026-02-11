import { ArrowRight, Check, Globe, Wrench, Smartphone, Server } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const services = [
    { icon: <Globe className="h-5 w-5" />, title: "Custom Website Design & Development", desc: "Professional websites tailored to your business needs" },
    { icon: <Server className="h-5 w-5" />, title: "Domain Setup & Hosting", desc: "Full setup so your site is live and accessible" },
    { icon: <Wrench className="h-5 w-5" />, title: "Ongoing Maintenance & Updates", desc: "Keep your site running smoothly with regular updates" },
    { icon: <Smartphone className="h-5 w-5" />, title: "Mobile-Responsive Design", desc: "Looks great on every device, from phones to desktops" },
  ];

  const clientSites = [
    { name: "HBottomley Ltd", type: "Mechanic & Haulage", link: "https://hbottomleyltd.lovable.app/" },
    { name: "Top Frog Records", type: "Record Label", link: "https://topfrogrecords.lovable.app/" },
    { name: "The Wearhouse Company", type: "Clothing Sales", link: "https://thewearhousecompany.lovable.app/" },
  ];

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/5 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <span className="section-label">Services</span>
          <h2 className="mb-4">Professional Web Development</h2>
          <p className="text-lg text-muted-foreground">
            I create custom websites for small businesses. From simple landing pages to full 
            business sites with hosting and maintenance.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 group hover:border-blue/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center mb-3 group-hover:bg-blue group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h4 className="font-semibold text-sm text-foreground mb-1">{s.title}</h4>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Client examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold mb-6 text-foreground">Recent Client Work</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {clientSites.map((site) => (
              <a
                key={site.name}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 group hover:border-blue/30 transition-all duration-300 flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-sm text-foreground group-hover:text-blue transition-colors">{site.name}</p>
                  <p className="text-xs text-muted-foreground">{site.type}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-blue transition-all group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </motion.div>

        <button onClick={scrollToContact} className="btn-primary flex items-center gap-2 group">
          Get in Touch
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Services;
