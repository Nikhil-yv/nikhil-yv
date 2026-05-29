import React from 'react';
import './App.css';
import { ThemeProvider, createTheme, CssBaseline, Box, Container, Divider } from '@mui/material';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#020617', paper: '#0f172a' },
    primary: { main: '#06b6d4' },
    secondary: { main: '#3b82f6' },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container">
        <Header />
        
        <Box component="main" className="main-content">
          <Container maxWidth="md">
            <Hero />
            <Divider className="divider-spacing" />
            <Skills />
            <Divider className="divider-spacing" />
            <Experience />
            <Divider className="divider-spacing" />
            <Education />
          </Container>
        </Box>

        <footer className="footer-container">
          <Container>
            <p>nikhil.elpula01@gmail.com</p>
            <Box component="p" className="footer-text">
              © Nikhil Elpula.
            </Box>
          </Container>
        </footer>
      </Box>
    </ThemeProvider>
  );
};

export default App;