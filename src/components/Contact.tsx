import { Mail, Phone, Github, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const cards = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Me",
      value: "harrison11bottomley@gmail.com",
      desc: "Best for project inquiries and detailed questions",
      href: "mailto:harrison11bottomley@gmail.com",
      action: "Send Email",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call or Text",
      value: "07877 760 374",
      desc: "Available weekdays 9am–6pm",
      href: "tel:07877760374",
      action: "Call Now",
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "Connect Online",
      value: "GitHub & Instagram",
      desc: "Follow my work and projects",
      href: "https://github.com/harrisonspurs",
      action: "View Profiles",
      socials: [
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/harrisonspurs", label: "GitHub" },
        { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/harrison4_11", label: "Instagram" },
      ],
    },
  ];

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink/5 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Contact</span>
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Interested in working together or have questions about my work? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-blue/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue/10 text-blue flex items-center justify-center mx-auto mb-4 group-hover:bg-blue group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1 text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{card.desc}</p>

              {card.socials ? (
                <div className="flex justify-center gap-3">
                  {card.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-blue hover:bg-blue/10 transition-all text-sm"
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue/80 transition-colors"
                >
                  {card.action}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Extra info */}
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Response time: Typically within 24 hours
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green/10 border border-green/20">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green">Currently accepting new web development projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
