import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Jeirod</h1>
        <p>Full Stack Developer</p>
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
            A responsive React portfolio showcasing my work and skills, hosted
            on Vercel.
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
        <p>Email: jeirod@example.com</p>
        <p>GitHub: <a href="https://github.com/jeirod">github.com/jeirod</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jeirod">linkedin.com/in/jeirod</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jeirod. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
