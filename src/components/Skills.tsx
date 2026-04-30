interface SkillGroup {
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["HTML / CSS", "JavaScript / TypeScript", "Python", "C++", "GLSL"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express", "p5.js", "Three.js", "TensorFlow"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "Git / GitHub", "Figma", "Blender", "Unreal Engine 5", "Arduino"],
  },
  {
    title: "Specialisms",
    skills: ["Generative Art", "Backend / APIs", "UI / UX", "Machine Learning", "3D Modelling", "XR Development"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section border-t border-foreground/10">
      <div className="container-wide">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
        <h2 className="mt-4 max-w-3xl font-serif font-light">
          Core tools and technologies I use regularly.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="border border-foreground/10 bg-card p-5">
              <h3 className="font-serif text-xl">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
