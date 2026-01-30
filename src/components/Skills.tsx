interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Web & Development",
    skills: ["HTML", "CSS", "JavaScript", "VS Code", "GitHub", "Responsive Design"],
  },
  {
    title: "Design",
    skills: ["Branding", "Visual Hierarchy", "Logo Design", "Favicon Design", "Colour Systems", "Typography"],
  },
  {
    title: "Hardware & Systems",
    skills: ["Arduino", "Sensors", "Physical Computing", "IoT", "Web-Connected Devices"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container-wide">
        <div className="container-narrow mb-12 px-0">
          <h2 className="mb-4">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground">
            What I work with regularly. No exaggeration — these are tools I actually use.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-4 text-foreground">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
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
