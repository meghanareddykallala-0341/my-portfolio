function Skills() {
    const skillCategories = [
      {
        title: "Programming",
        skills: ["Python", "JavaScript", "SQL"],
      },
  
      {
        title: "Web Development",
        skills: ["HTML", "CSS", "React", "Django"],
      },
  
      {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code"],
      },
  
      {
        title: "Analytics & Concepts",
        skills: [
          "Power BI",
          "Data Analytics",
          "Business Intelligence",
          "OOPs",
          "Web Development",
        ],
      },
    ];
  
    return (
      <section id="skills" className="section skills">
        <div className="section-title">
          <h2>
            <span>Skills</span>
          </h2>
        </div>
  
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>
  
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;