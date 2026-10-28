function Achievements() {
  const certifications = [
    {
      title: "Fundamentals of Information Security",
      issuer: "Infosys Springboard • June 2026",
      file: "/springboard.pdf",
    },
    {
      title: "Cisco Networking Certificate",
      issuer: "Cisco",
      file: "/networking.pdf",
    },
    {
      title: "Web Application Development Internship",
      issuer: "MANAC Infotech • July 2023 – October 2023",
      file: "/manac.pdf",
    },
  ];

  const achievements = [
    {
      title: "Cognizant Technoverse Hackathon 2026",
      description: "Certificate of Appreciation",
      file: "/cognizent.pdf",
    },
    {
      title: "MVSR Hackathon",
      description: "Participated in the hackathon",
      file: null,
    },
  ];

  return (
    <section id="achievements" className="section achievements">
      <div className="section-title">
        <h2>
          Certifications & <span>Achievements</span>
        </h2>
      </div>

      <div className="achievements-grid">

        {/* CERTIFICATIONS */}

        <div className="achievement-card">
          <h3>Certifications</h3>

          <div className="certificate-list">
            {certifications.map((certificate, index) => (
              <div className="certificate-item" key={index}>

                <div className="certificate-preview">
                  <iframe
                    src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={certificate.title}
                  />
                </div>

                <h4>{certificate.title}</h4>

                <p>{certificate.issuer}</p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate →
                </a>

              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}

        <div className="achievement-card">
          <h3>Achievements & Activities</h3>

          <div className="achievement-list">
            {achievements.map((achievement, index) => (
              <div className="achievement-item" key={index}>

                <span>0{index + 1}</span>

                <div>
                  <h4>{achievement.title}</h4>

                  <p>{achievement.description}</p>

                  {achievement.file && (
                    <a
                      href={achievement.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;