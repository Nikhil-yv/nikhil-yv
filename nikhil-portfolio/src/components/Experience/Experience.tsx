import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        
        {/* SILICON VALLEY BANK */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-header">
            <div>
              <h3 className="role-title">Senior UI Developer (ReactJS)</h3>
              <span className="company-name">Silicon Valley Bank</span>
            </div>
            <span className="timeline-date">Jan 2021 – Present</span>
          </div>
          <ul className="timeline-bullets">
            <li>Architected and scaled a high-traffic React frontend supporting 1M+ active users, optimizing rendering performance and state management to maintain no downtime for mission-critical financial operations.</li>
            <li>Collaborated closely with UX designers to translate Figma prototypes into pixel-perfect components, actively participating in design reviews and managing iterative UI updates to ensure a seamless user experience.</li>
            <li>Optimized Redux state management to handle complex, multi-layered financial data structures for 10k+ corporate loan portfolios, reducing client-side memory leaks.</li>
            <li>Deployed an AI-powered customer support chatbot using FastAPI and LLMs, successfully automating query resolution for a global user base and reducing support tickets.</li>
            <li>Led the UI Admin team in developing an integrated reporting suite and a high-speed chatbot, significantly reducing response times for a massive user demographic.</li>
            <li>Mentored a team of 5+ developers on best practices for TypeScript and unit testing, improving overall code quality and reducing the peer-review cycle time by 15%.</li>
            <li>Standardized a robust Material UI component library used across multiple product lines, improving cross-team development velocity by 20% while maintaining brand consistency.</li>
            <li>Collaborated with cross-functional stakeholders to translate complex business requirements into scalable technical solutions for SVB’s premier tech-client segment.</li>
          </ul>
        </div>

        {/* BBVA USA */}
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-header">
            <div>
              <h3 className="role-title">Senior UI Developer</h3>
              <span className="company-name">BBVA USA</span>
            </div>
            <span className="timeline-date">Jan 2017 – Jan 2021</span>
          </div>
          <ul className="timeline-bullets">
            <li>Spearheaded the UI development for the Online-Account-Origination (OAO) project, enabling customers to seamlessly open deposit, loan, and credit card accounts.</li>
            <li>Modernized legacy admin tools by migrating the features to React/Redux, improving state management and application performance for customer service representatives.</li>
            <li>Engineered secure, PCI-compliant frontend interfaces for high-volume transaction processing, ensuring zero security vulnerabilities in frontend-to-API data handling.</li>
            <li>Enhanced cross-browser compatibility and SEO performance across mobile, tablet, and desktop platforms using responsive design best practices.</li>
            <li>Developed complex data visualization components using D3.js or Recharts to provide customers with real-time insights into spending habits, increasing user session duration by 20%.</li>
            <li>Optimized state management patterns using Redux-Saga to handle asynchronous side effects in complex multi-step loan application workflows.</li>
            <li>Utilized CI/CD pipelines (GitLab, Jenkins, Bamboo) and SonarQube to automate builds and maintain high code quality standards.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;