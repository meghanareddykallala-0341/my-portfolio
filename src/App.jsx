
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Achievements from "./components/Achievements.jsx";

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2026 Meghana Reddy Kallala. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
