import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Competencies from './components/competencies';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Projects />
      <Competencies />
    </div>
  );
};

export default App;
