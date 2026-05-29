import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="https://www.linkedin.com/in/nikhil-elpula-6686a9180/" 
          className="brand-logo" target="_blank">Nikhil<span className="dot"></span></a>
        <nav className="navigation-bar">
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            Available for Roles
          </div>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#experience" className="nav-item">Experience</a>
          <a href="#education" className="nav-item">Education</a>
          
          <div className="dropdown-container" ref={dropdownRef}>
            <button 
              className="action-button" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Let's Talk
              <svg 
                className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a 
                  href="https://www.linkedin.com/in/nikhil-elpula-6686a9180/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="dropdown-item"
                >
                  <svg className="dropdown-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="mailto:nikhil.elpula01@gmail.com" 
                  className="dropdown-item"
                >
                  <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Gmail
                </a>
              </div>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;