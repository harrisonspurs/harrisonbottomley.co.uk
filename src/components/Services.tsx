import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const services = [
    {
      num: "01",
      title: "Custom website design & build",
      desc: "I build small business sites from scratch — clean, fast, and tailored to your brief. No bloated templates.",
    },
    {
      num: "02",
      title: "Domain & hosting setup",
      desc: "I'll get you live end-to-end: domain, hosting, email forwarding, the lot. You don't have to touch the technical side.",
    },
    {
      num: "03",
      title: "Maintenance & updates",
      desc: "Ongoing tweaks, content changes, fixes. A site is never really finished — I keep yours moving.",
    },
    {
      num: "04",
      title: "Mobile-first design",
      desc: "Most of your visitors will arrive on a phone. Every site I build is designed for that screen first.",
    },
  ];

  const clients = [
    { name: "HBottomley Ltd", type: "Mechanic & Haulage", link: "https://hbottomleyltd.lovable.app/" },
    { name: "Top Frog Records", type: "Independent Record Label", link: "https://topfrogrecords.lovable.app/" },
    { name: "The Wearhouse Company", type: "Vintage Clothing Wholesale", link: "https://thewearhousecompany.lovable.app/" },
  ];

  return (
    <section id="services" className="section relative bg-paper-deep">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-3"
          >
            <p className="eyebrow">§ 04 — Services</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-9 font-serif font-light"
          >
            Building websites for <span className="serif-italic">small businesses</span> that need to look the part.
          </motion.h2>
        </div>

        {/* Services list — large editorial rows */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-foreground/10 last:border-b"
            >
              <p className="col-span-2 md:col-span-1 text-xs font-mono text-muted-foreground pt-2">{s.num}</p>
              <h3 className="col-span-10 md:col-span-6 font-serif text-2xl md:text-3xl font-light leading-tight">
                {s.title}
              </h3>
              <p className="col-span-12 md:col-span-5 text-base text-ink-soft leading-relaxed pt-1">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recent client work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-12 gap-4 md:gap-8"
        >
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">§ Live for</p>
          </div>
          <ul className="col-span-12 md:col-span-9 divide-y divide-foreground/10 border-y border-foreground/10">
            {clients.map((c) => (
              <li key={c.name}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between py-5 hover:text-[hsl(var(--terracotta))] transition-colors"
                >
                  <span className="font-serif text-2xl">{c.name}</span>
                  <span className="hidden sm:block text-sm text-muted-foreground font-mono group-hover:text-[hsl(var(--terracotta))]">{c.type}</span>
                  <ArrowUpRight className="h-4 w-4 ml-4 text-muted-foreground group-hover:text-[hsl(var(--terracotta))] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <button onClick={scrollToContact} className="btn-ink">
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
