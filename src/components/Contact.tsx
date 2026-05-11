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
    <section id="contact" className="section border-t border-foreground/15">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">04 — Contact</p>
          <h2 className="col-span-12 md:col-span-9 font-serif font-light leading-[1.05]">
            Say <span className="serif-italic text-[hsl(var(--terracotta))]">hello.</span>
          </h2>
        </div>

        <motion.a
          href="mailto:harrison11bottomley@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="group mt-14 block border-t border-b border-foreground/20 py-10 md:py-14"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-serif text-3xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] break-all leading-none">
              harrison11bottomley
              <span className="text-foreground/40">@gmail.com</span>
            </p>
            <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 flex-shrink-0 text-foreground/60 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </motion.a>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <p className="lg:col-span-4 text-sm text-muted-foreground max-w-xs">
            Email&apos;s the fastest way through. I read everything, reply to most.
          </p>
          <ul className="lg:col-span-8 divide-y divide-foreground/15 border-y border-foreground/15">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 items-center py-5 hover:text-foreground transition-colors"
                >
                  <span className="col-span-4 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="col-span-7 font-serif text-lg md:text-2xl">{c.value}</span>
                  <ArrowUpRight className="col-span-1 h-4 w-4 ml-auto text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
