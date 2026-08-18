import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      {/* Header */}
      <header className="header">
        <div className="header-column profile-pic">
          <img src="assets/images/Abogado, Jeirod.webp" alt="Profile" className="profile-pic" />
        </div>

        <div className="header-column">
          <h1 className="my-name">Jeirod Taas Abogado</h1>
          <p className="job-title">Full Stack Developer</p>
        </div>

        <div className="header-column button-column">
          <button 
            className="toggle-btn" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate Full Stack Developer skilled in building scalable web
          applications, optimizing performance, and crafting seamless user
          experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: React, JavaScript, HTML, CSS</li>
          <li>Backend: Node.js, Ruby on Rails, PHP</li>
          <li>Databases: MySQL, PostgreSQL</li>
          <li>Tools: Git, Docker, Vercel, Netlify</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A responsive React portfolio showcasing my work and skills.
          </p>
        </div>
        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>
            Full stack application with product listings, cart, and secure
            checkout.
          </p>
        </div>
        <div className="project-card">
          <h3>Analytics Dashboard</h3>
          <p>
            Real-time data visualization using React and Node.js with MySQL
            backend.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Mobile: +63 956 365 8519</p>
        <p>Email: jeirodabogado@gmail.com</p>
        <p>GitHub: <a href="https://github.com/jeirod" target="_blank" rel="noopener noreferrer">github.com/jeirod</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jeirod-abogado/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeirod-abogado</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jeirod Taas Abogado. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
