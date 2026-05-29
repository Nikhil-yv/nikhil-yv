import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-display container">
      <div className="hero-content-block">
        <h1>Hi, I'm <span className="gradient-text">Nikhil Elpula</span></h1>
        <p className="hero-subtitle">Senior Frontend Engineer & React JS Specialist</p>
        <p className="hero-lead-text">
          High-impact Frontend Engineer with <strong>10 years of experience</strong> architecting enterprise-scale platforms. Expert in building high-concurrency fintech applications supporting <strong>1M+ active banking users</strong> and integrating AI-driven solutions to optimize system runtime and architecture.
        </p>
        <div className="interactive-links">
          <a 
            href="https://www.linkedin.com/in/nikhil-elpula-6686a9180/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="outline-card-link"
            aria-label="LinkedIn Profile"
          >
            <svg className="link-icon linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn Profile
          </a>
          <a 
            href="mailto:nikhil.elpula01@gmail.com" 
            className="flat-link"
            aria-label="Contact Me via Email"
          >
            <svg className="link-icon gmail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Contact Me
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