
function Projects() {
  const projects = [
    {
      title: "Student Placement Tracker",
      description:
        "A web application for managing job applications, interviews, companies, and placement progress in one place.",
      technologies: ["React", "JavaScript", "CSS"],
      github:
        "https://github.com/meghanareddykallala-0341/student-placement-tracker",
      demo: "https://student-placement-tracker-app.netlify.app",
    },
    {
      title: "Alankaara – Personalized Online Shopping Website",
      description:
        "A personalized shopping website designed to help users discover products based on factors such as weather, occasion, colour, and body type.",
      technologies: ["Django", "React", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-title">
        <h2>
          <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>
              )}

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
