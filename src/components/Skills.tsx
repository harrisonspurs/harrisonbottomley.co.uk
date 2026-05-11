interface SkillGroup {
  title: string;
  num: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  { num: "01", title: "Languages", skills: ["HTML / CSS", "JavaScript / TypeScript", "Python", "C++", "GLSL"] },
  { num: "02", title: "Frameworks", skills: ["React", "Node.js", "Express", "p5.js", "Three.js", "TensorFlow"] },
  { num: "03", title: "Tools", skills: ["VS Code", "Git / GitHub", "Figma", "Blender", "Unreal Engine 5", "Arduino"] },
  { num: "04", title: "Specialisms", skills: ["Generative Art", "Backend / APIs", "UI / UX", "Machine Learning", "3D Modelling", "XR Development"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section border-t border-foreground/15">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">03 — Stack</p>
          <h2 className="col-span-12 md:col-span-9 font-serif font-light leading-[1.05]">
            Tools <span className="serif-italic">in rotation.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-foreground/15 pt-10">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-b border-foreground/15 pb-8 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[10px] font-mono text-muted-foreground">{group.num}</span>
                <h3 className="font-serif text-2xl">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-foreground/85 font-mono"
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
