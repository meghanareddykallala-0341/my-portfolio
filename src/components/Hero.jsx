
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <p className="hero-intro">Hello, I'm</p>

          <h1>Meghana Reddy</h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="hero-description">
            I'm an aspiring Full Stack Developer with an interest in
            building practical and user-friendly web applications.
            I enjoy learning new technologies and turning ideas into
            real projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View Resume
            </a>

            <a href="/resume.pdf" download className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/profile.jpeg"
            alt="Meghana Reddy"
            className="profile-photo"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

