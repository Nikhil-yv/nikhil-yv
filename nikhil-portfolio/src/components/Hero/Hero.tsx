import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-display container">
      <div className="hero-content-block">
        <h1>Hi, I'm <span className="gradient-text">Nikhil Elpula</span></h1>
        <p className="hero-subtitle">Senior Frontend Engineer & UI Architect</p>
        <p className="hero-lead-text">
          High-impact Frontend Engineer with <strong>10 years of experience</strong> architecting enterprise-scale platforms. Expert in building high-concurrency fintech applications supporting <strong>1M+ active banking users</strong> and integrating AI-driven solutions to optimize system runtime and architecture.
        </p>
        <div className="interactive-links">
          <a 
            href="https://www.linkedin.com/in/nikhil-elpula-6686a9180/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="outline-card-link"
          >
            LinkedIn Profile
          </a>
          <a href="mailto:nikhil.elpula01@gmail.com" className="flat-link">
            Contact Me →
          </a>
        </div>
      </div>
      <div className="hero-metrics-block">
        <div className="metric-glass-card">
          <h3>10+</h3>
          <div className="metric-label">Years Experience</div>
        </div>
        <div className="metrics-divider"></div>
        <div className="metric-glass-card">
          <h3>1M+</h3>
          <div className="metric-label">Active Users Supported</div>
        </div>
        <div className="metrics-divider"></div>
        <div className="metric-glass-card">
          <h3>20%</h3>
          <div className="metric-label">Dev Velocity Boost</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;