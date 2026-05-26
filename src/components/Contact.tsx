import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const channels = [
    { label: "Email", value: "harrison11bottomley@gmail.com", href: "mailto:harrison11bottomley@gmail.com" },
    { label: "Phone", value: "07877 760 374", href: "tel:07877760374" },
    { label: "GitHub", value: "@harrisonspurs", href: "https://github.com/harrisonspurs" },
    { label: "Instagram", value: "@harrison4_11", href: "https://instagram.com/harrison4_11" },
  ];

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container-wide">
        <motion.a
          href="mailto:harrison11bottomley@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="group block"
        >
          <p className="font-serif text-4xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[0.95]">
            Say <span className="serif-italic">hello.</span>
            <ArrowUpRight className="inline-block h-8 w-8 md:h-14 md:w-14 align-top ml-2 text-foreground/40 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </p>
        </motion.a>

        <ul className="mt-20 grid gap-6 md:grid-cols-2 max-w-3xl">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-3 border-b border-foreground/15 hover:border-foreground transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                  {c.label}
                </span>
                <span className="font-serif text-base md:text-lg text-right">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
