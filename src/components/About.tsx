const About = () => {
  const focusAreas = [
    "Web and full-stack development",
    "Interactive and XR work",
    "Generative visuals",
    "AI and computer vision",
    "Physical computing and IoT",
    "Game development",
  ];

  return (
    <section id="about" className="section border-t border-foreground/10">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif font-light leading-tight">
              I build websites, software and interactive projects.
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  I am based in Halifax and study Creative Computing at the University of Salford.
                  My portfolio includes client work, university projects and independent builds.
                </p>
                <p>
                  I focus on quality execution: clean interfaces, solid technical decisions,
                  and practical outcomes.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
                {focusAreas.map((area, i) => (
                  <li
                    key={area}
                    className="bg-card p-4 text-sm text-foreground/90"
                  >
                    <span className="font-mono text-[10px] text-primary mr-2">
                      0{i + 1}
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
