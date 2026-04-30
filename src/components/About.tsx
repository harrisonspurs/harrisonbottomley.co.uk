const About = () => {
  const focusAreas = [
    "Full-stack web development",
    "Interactive and XR prototyping",
    "Creative coding and generative visuals",
    "AI and machine learning experiments",
  ];

  return (
    <section id="about" className="section border-t border-foreground/10">
      <div className="container-wide">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h2 className="mt-4 max-w-3xl font-serif font-light">
          I build practical digital experiences with a strong design focus.
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-foreground/85">
            <p>
              I'm a Creative Computing student at the University of Salford, based in Halifax.
              My work moves between web development, interaction design, XR and backend systems.
            </p>
            <p>
              Alongside university projects, I run freelance web projects for local businesses.
              That balance keeps my work grounded in real users and real outcomes.
            </p>
          </div>

          <div className="border border-foreground/10 bg-card p-5">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Focus areas
            </p>
            <ul className="mt-4 space-y-2">
              {focusAreas.map((area) => (
                <li key={area} className="text-sm text-foreground/85">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-foreground/10 bg-card p-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Based</p>
            <p className="mt-2 font-serif text-xl">Halifax, UK</p>
          </div>
          <div className="border border-foreground/10 bg-card p-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Studying</p>
            <p className="mt-2 font-serif text-xl">BSc Creative Computing</p>
          </div>
          <div className="border border-foreground/10 bg-card p-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Status</p>
            <p className="mt-2 font-serif text-xl">Open to freelance</p>
          </div>
          <div className="border border-foreground/10 bg-card p-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Stage</p>
            <p className="mt-2 font-serif text-xl">Second year</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
