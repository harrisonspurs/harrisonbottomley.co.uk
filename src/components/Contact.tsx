import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const channels = [
    { num: "01", label: "Email", value: "harrison11bottomley@gmail.com", href: "mailto:harrison11bottomley@gmail.com" },
    { num: "02", label: "Phone", value: "07877 760 374", href: "tel:07877760374" },
    { num: "03", label: "GitHub", value: "@harrisonspurs", href: "https://github.com/harrisonspurs" },
    { num: "04", label: "Instagram", value: "@harrison4_11", href: "https://instagram.com/harrison4_11" },
  ];

  return (
    <section id="contact" className="section relative">
      <div className="container-wide">
        {/* Headline */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <p className="eyebrow">§ 05 — Contact</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-9 font-serif font-light"
          >
            Got an idea, a project, or just want to <span className="serif-italic">say hello</span>?
          </motion.h2>
        </div>

        {/* Big email link */}
        <motion.a
          href="mailto:harrison11bottomley@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group block py-12 md:py-16 border-y border-foreground/10 hover:bg-paper-deep transition-colors"
        >
          <div className="container-wide flex items-center justify-between gap-4">
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight break-all">
              harrison11bottomley<span className="serif-italic text-[hsl(var(--terracotta))]">@</span>gmail.com
            </p>
            <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 flex-shrink-0 text-muted-foreground group-hover:text-[hsl(var(--terracotta))] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
        </motion.a>

        {/* Channels list */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mt-20">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">§ Channels</p>
            <p className="text-sm text-ink-soft mt-4 leading-relaxed">
              I usually reply within a day. Email's best for projects;
              text or call for anything urgent.
            </p>
          </div>

          <ul className="col-span-12 md:col-span-9 divide-y divide-foreground/10 border-y border-foreground/10">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 items-baseline py-5 hover:text-[hsl(var(--terracotta))] transition-colors"
                >
                  <span className="col-span-1 text-xs font-mono text-muted-foreground">{c.num}</span>
                  <span className="col-span-3 text-xs font-mono uppercase tracking-wider text-muted-foreground group-hover:text-[hsl(var(--terracotta))]">
                    {c.label}
                  </span>
                  <span className="col-span-7 font-serif text-xl md:text-2xl">{c.value}</span>
                  <ArrowUpRight className="col-span-1 h-4 w-4 ml-auto text-muted-foreground group-hover:text-[hsl(var(--terracotta))] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 inline-flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 bg-[hsl(var(--moss))] rounded-full animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[hsl(var(--moss))]">
            Currently accepting new projects
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
