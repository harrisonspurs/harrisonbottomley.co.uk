import { Mail, Phone, Github, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "harrison11bottomley@gmail.com",
      href: "mailto:harrison11bottomley@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "07877 760374",
      href: "tel:07877760374",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/harrisonspurs",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://instagram.com/harrison4_11",
    },
  ];

  return (
    <section id="contact" className="section bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-border" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="mb-4">Let's talk</h2>
          <p className="text-lg text-muted-foreground">
            Whether you need a website, want to collaborate, or just have a question — 
            I'd like to hear from you.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {/* Main contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-8"
          >
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group glass-card p-6 flex items-center gap-4 transition-all duration-300 hover:border-accent/40"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">{link.label}</p>
                  <p className="text-foreground font-medium truncate">{link.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </motion.div>
          
          {/* Divider */}
          <div className="divider my-10" />
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-background hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
              >
                <span className="text-muted-foreground group-hover:text-accent transition-colors">
                  {link.icon}
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
