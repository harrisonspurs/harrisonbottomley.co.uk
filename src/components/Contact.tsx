import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const channels = [
    { label: "Email", value: "harrison11bottomley@gmail.com", href: "mailto:harrison11bottomley@gmail.com" },
    { label: "Phone", value: "07877 760 374", href: "tel:07877760374" },
    { label: "GitHub", value: "@harrisonspurs", href: "https://github.com/harrisonspurs" },
    { label: "Instagram", value: "@harrison4_11", href: "https://instagram.com/harrison4_11" },
  ];

  return (
    <section id="contact" className="section border-t border-foreground/10">
      <div className="container-wide">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h2 className="mt-4 max-w-3xl font-serif font-light">
          Want to work together or ask about a project?
        </h2>

        <a
          href="mailto:harrison11bottomley@gmail.com"
          className="group mt-8 block border border-foreground/10 bg-card p-6 md:p-8 hover:bg-secondary/40 transition-colors"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-serif text-2xl md:text-4xl font-light tracking-tight break-all">
              harrison11bottomley@gmail.com
            </p>
            <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
        </a>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="text-sm text-muted-foreground">
            I usually reply within one day. Email is best for project enquiries.
          </div>
          <ul className="lg:col-span-2 divide-y divide-foreground/10 border-y border-foreground/10">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 items-center py-4 hover:text-foreground transition-colors"
                >
                  <span className="col-span-4 text-xs font-mono uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="col-span-7 font-serif text-lg md:text-xl">{c.value}</span>
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
