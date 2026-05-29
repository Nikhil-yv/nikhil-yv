import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Education & Credentials</h2>
      <div className="edu-grid">
        <div className="edu-card">
          <p className="edu-meta">Master of Science — 2016</p>
          <h3>Computer & Information Systems</h3>
          <p className="edu-issuer">Kent State University</p>
        </div>
        <div className="edu-card">
          <p className="edu-meta">Microsoft Certifications</p>
          <h3>Microsoft Certified Professional (MCP)</h3>
          <p className="edu-issuer">Specialist: HTML5 with JavaScript & CSS3</p>
        </div>
      </div>
    </section>
  );
};

export default Education;