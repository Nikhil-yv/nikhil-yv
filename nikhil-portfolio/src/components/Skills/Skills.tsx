import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Core Competencies</h2>
      <div className="modern-skills-grid">
        <div className="modern-skill-container">
          <h3>Frontend & UI Ecosystem</h3>
          <div className="pill-cloud">
            <span className="tech-pill">ReactJS (Hooks/Context API)</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Redux</span>
            <span className="tech-pill">MobX</span>
            <span className="tech-pill">NextJS</span>
            <span className="tech-pill">JavaScript (ES6+)</span>
            <span className="tech-pill">Material UI (MUI)</span>
            <span className="tech-pill">Tailwind CSS</span>
            <span className="tech-pill">SASS</span>
            <span className="tech-pill">Responsive UI</span>
            <span className="tech-pill">Web Accessibility (WCAG)</span>
          </div>
        </div>
        <div className="modern-skill-container">
          <h3>Backend & AI Engineering</h3>
          <div className="pill-cloud">
            <span className="tech-pill">NodeJS</span>
            <span className="tech-pill">Java</span>
            <span className="tech-pill">.NET</span>
            <span className="tech-pill">Python</span>
            <span className="tech-pill">FastAPI</span>
            <span className="tech-pill">RESTful APIs</span>
            <span className="tech-pill">SOAP</span>
            <span className="tech-pill">GraphQL</span>
            <span className="tech-pill">LLM Integration</span>
          </div>
        </div>
        <div className="modern-skill-container">
          <h3>Quality & Testing</h3>
          <div className="pill-cloud">
            <span className="tech-pill">Jest</span>
            <span className="tech-pill">React Testing Library</span>
            <span className="tech-pill">JUnit</span>
            <span className="tech-pill">Enzyme</span>
            <span className="tech-pill">Cypress</span>
            <span className="tech-pill">SonarQube automation</span>
            <span className="tech-pill">Chrome DevTools</span>
          </div>
        </div>
        <div className="modern-skill-container">
          <h3>Cloud & DevOps</h3>
          <div className="pill-cloud">
            <span className="tech-pill">AWS</span>
            <span className="tech-pill">GCP</span>
            <span className="tech-pill">Docker</span>
            <span className="tech-pill">Kubernetes</span>
            <span className="tech-pill">Jenkins (CI/CD)</span>
            <span className="tech-pill">GitLab CI</span>
            <span className="tech-pill">Git</span>
            <span className="tech-pill">Jira</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;