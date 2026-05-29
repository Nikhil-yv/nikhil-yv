import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="#" className="brand-logo">Nikhil<span className="dot">.</span></a>
        <nav className="navigation-bar">
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            Available for Roles
          </div>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#education" className="nav-item">Education</a>
          <a href="mailto:nikhil.elpula01@gmail.com" className="action-button">
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;