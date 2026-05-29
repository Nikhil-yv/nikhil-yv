import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-entry-wrapper">
      <Header />
      
      <main className="main-content">
        <Hero />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Education />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>nikhil.elpula01@gmail.com</p>
          <p className="copyright">© Nikhil Elpula.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;